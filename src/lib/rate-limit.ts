type Entry = { count: number; resetAt: number }

const bucket = new Map<string, Entry>()

export function rateLimit(options: {
  key: string
  limit: number
  windowMs: number
}): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now()
  const entry = bucket.get(options.key)

  if (!entry || entry.resetAt <= now) {
    bucket.set(options.key, { count: 1, resetAt: now + options.windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  if (entry.count >= options.limit) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000)
    return { allowed: false, retryAfterSeconds }
  }

  entry.count += 1
  bucket.set(options.key, entry)
  return { allowed: true, retryAfterSeconds: 0 }
}
