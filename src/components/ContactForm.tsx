'use client'

import { useMemo, useState } from 'react'
import GlassCard from '@/components/GlassCard'
import { siteConfig } from '@/lib/site'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', purpose: '', message: '', company: '' })

  const canSubmit = useMemo(() => {
    return form.name.trim().length >= 2 && form.email.includes('@') && form.message.trim().length >= 20 && status !== 'loading'
  }, [form, status])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setStatus('success')
      setForm({ name: '', email: '', purpose: '', message: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <GlassCard className="p-8">
      <form onSubmit={submit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="da-kicker block mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
              required
              className="w-full rounded-md border border-line-light dark:border-line-dark bg-white dark:bg-white/5 px-3 py-2"
            />
          </div>
          <div>
            <label className="da-kicker block mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
              required
              className="w-full rounded-md border border-line-light dark:border-line-dark bg-white dark:bg-white/5 px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="da-kicker block mb-2" htmlFor="purpose">Purpose (optional)</label>
          <input
            id="purpose"
            value={form.purpose}
            onChange={(e) => setForm((v) => ({ ...v, purpose: e.target.value }))}
            className="w-full rounded-md border border-line-light dark:border-line-dark bg-white dark:bg-white/5 px-3 py-2"
          />
        </div>

        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" value={form.company} onChange={(e) => setForm((v) => ({ ...v, company: e.target.value }))} />
        </div>

        <div>
          <label className="da-kicker block mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={7}
            value={form.message}
            onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
            required
            className="w-full rounded-md border border-line-light dark:border-line-dark bg-white dark:bg-white/5 px-3 py-2"
          />
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Minimum 20 characters.</p>
        </div>

        <button type="submit" className="btn-primary w-full" disabled={!canSubmit}>
          {status === 'loading' ? 'Sending…' : 'Send'}
        </button>

        {status === 'success' && <p className="text-sm text-green-600 dark:text-green-300">Message sent.</p>}
        {status === 'error' && (
          <p className="text-sm text-red-600 dark:text-red-300">
            Delivery failed. Email directly: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        )}
      </form>
    </GlassCard>
  )
}
