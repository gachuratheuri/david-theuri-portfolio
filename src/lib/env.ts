import { z } from 'zod'

const EnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_CALENDLY_URL: z.string().url().optional(),
  CONTACT_EMAIL: z.string().email().optional(),

  RESEND_API_KEY: z.string().min(10).optional(),
  RESEND_FROM: z.string().min(3).optional(),

  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(10).optional(),
})

export const env = EnvSchema.parse(process.env)
export const isProd = process.env.NODE_ENV === 'production'
