'use client'

import { useMemo, useState } from 'react'
import { siteConfig } from '@/lib/site'

type Status = 'idle' | 'loading' | 'success' | 'error'

const purposes = ['Recruitment', 'Consulting', 'Collaboration', 'Other'] as const

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
    company: '', // honeypot (should stay empty)
  })

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      formData.email.includes('@') &&
      formData.message.trim().length >= 20 &&
      status !== 'loading'
    )
  }, [formData, status])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', purpose: '', message: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-10">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((v) => ({ ...v, name: e.target.value }))}
              className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((v) => ({ ...v, email: e.target.value }))}
              className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-2">
            Purpose
          </label>
          <select
            id="purpose"
            value={formData.purpose}
            onChange={(e) => setFormData((v) => ({ ...v, purpose: e.target.value }))}
            className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Select...</option>
            {purposes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Honeypot: hidden from users, visible to many bots */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData((v) => ({ ...v, company: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message (min 20 characters)
          </label>
          <textarea
            id="message"
            required
            rows={7}
            value={formData.message}
            onChange={(e) => setFormData((v) => ({ ...v, message: e.target.value }))}
            className="w-full rounded-md border-slate-300 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <button type="submit" disabled={!canSubmit} className="btn-primary w-full disabled:opacity-50">
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className="rounded-md border border-green-200 bg-green-50 p-4">
            <p className="text-green-900 font-medium">Message sent.</p>
            <p className="text-green-800 text-sm mt-1">
              A response will follow as soon as possible.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-red-900 font-medium">Delivery failed.</p>
            <p className="text-red-800 text-sm mt-1">
              Please try again, or email directly using the link below.
            </p>
          </div>
        )}
      </form>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Alternative contact</h2>
        <p className="text-slate-700">
          Email:{' '}
          <a className="text-primary-700 hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
        <p className="text-slate-700 mt-1">
          LinkedIn:{' '}
          <a
            className="text-primary-700 hover:underline"
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.social.linkedin.replace('https://', '')}
          </a>
        </p>
      </div>
    </div>
  )
}
