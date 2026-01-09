import { NextResponse } from 'next/server'
import { z } from 'zod'
import { env, isProd } from '@/lib/env'
import { siteConfig } from '@/lib/site'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const BodySchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  purpose: z.string().max(200).optional().or(z.literal('')),
  message: z.string().min(20).max(5000),
  company: z.string().max(200).optional().or(z.literal('')), // honeypot
})

function getIp(req: Request) {
  const xff = req.headers.get('x-forwarded-for') ?? ''
  const first = xff
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .at(0)

  return first ?? req.headers.get('x-real-ip') ?? '0.0.0.0'
}

function originAllowed(req: Request) {
  const origin = req.headers.get('origin')
  if (!isProd) return true
  if (!origin) return false
  try {
    return new URL(origin).host === new URL(siteConfig.siteUrl).host
  } catch {
    return false
  }
}

async function rateLimit(req: Request) {
  if (!env.UPSTASH_REDIS_REST_URL || !env.UPSTASH_REDIS_REST_TOKEN) return { ok: true as const }

  const redis = new Redis({ url: env.UPSTASH_REDIS_REST_URL, token: env.UPSTASH_REDIS_REST_TOKEN })
  const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    analytics: true,
    prefix: 'contact',
  })

  const ip = getIp(req)
  const { success, reset } = await ratelimit.limit(ip)
  return { ok: success, reset }
}

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 })
  }

  const rl = await rateLimit(req)
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: 'Rate limited' }, { status: 429 })
  }

  const json = await req.json().catch(() => null)
  const parsed = BodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }

  const { name, email, purpose, message, company } = parsed.data

  // Honeypot => pretend success
  if (company && company.trim().length > 0) return NextResponse.json({ ok: true })

  if (!env.RESEND_API_KEY || !env.RESEND_FROM) {
    return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 503 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM,
      to: [siteConfig.email],
      reply_to: email,
      subject: `Website contact: ${purpose ? `${purpose} — ` : ''}${name}`,
      text: `From: ${name} <${email}>\nPurpose: ${purpose ?? ''}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
