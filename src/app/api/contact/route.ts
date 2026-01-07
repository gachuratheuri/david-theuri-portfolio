import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'
import { siteConfig } from '@/lib/site'

export const runtime = 'nodejs'

function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') || 'unknown'
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  const ip = getClientIp(request)
  const limiter = rateLimit({ key: `contact:${ip}`, limit: 5, windowMs: 10 * 60 * 1000 })

  if (!limiter.allowed) {
    return Response.json(
      { ok: false, error: 'Rate limit exceeded', retryAfterSeconds: limiter.retryAfterSeconds },
      { status: 429, headers: { 'Retry-After': String(limiter.retryAfterSeconds) } }
    )
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return Response.json({ ok: false, error: 'Invalid content type' }, { status: 415 })
  }

  let body: any
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const name = String(body?.name ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const purpose = String(body?.purpose ?? '').trim()
  const message = String(body?.message ?? '').trim()
  const company = String(body?.company ?? '').trim() // honeypot

  if (company.length > 0) {
    return Response.json({ ok: true }, { status: 200 })
  }

  if (name.length < 2 || name.length > 120) {
    return Response.json({ ok: false, error: 'Invalid name' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return Response.json({ ok: false, error: 'Invalid email' }, { status: 400 })
  }
  if (message.length < 20 || message.length > 8000) {
    return Response.json({ ok: false, error: 'Invalid message length' }, { status: 400 })
  }
  if (purpose.length > 80) {
    return Response.json({ ok: false, error: 'Invalid purpose' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return Response.json({ ok: false, error: 'Server not configured' }, { status: 500 })
  }

  const from = process.env.RESEND_FROM
  if (!from) {
    return Response.json({ ok: false, error: 'Missing RESEND_FROM' }, { status: 500 })
  }

  const to = process.env.CONTACT_EMAIL || siteConfig.email
  const resend = new Resend(resendKey)

  const subject = `Portfolio contact${purpose ? ` — ${purpose}` : ''} — ${name}`

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Purpose: ${purpose || '(not specified)'}`,
    `IP: ${ip}`,
    '',
    message,
  ].join('\n')

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text,
  })

  if (error) {
    return Response.json({ ok: false, error: 'Email send failed' }, { status: 502 })
  }

  return Response.json({ ok: true }, { status: 200 })
}
