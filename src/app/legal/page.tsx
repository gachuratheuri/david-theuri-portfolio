import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy notice, cookies notice, disclaimer, and terms for davidtheuri.com.',
}

const links = [
  { href: '/legal/privacy', title: 'Privacy notice', desc: 'How personal data is handled (contact form, email delivery, basic security logging).' },
  { href: '/legal/cookies', title: 'Cookies & analytics', desc: 'What cookies/metrics may be used and how to control them.' },
  { href: '/legal/disclaimer', title: 'Website disclaimer', desc: 'No legal advice, no solicitor-client relationship, and liability boundaries.' },
  { href: '/legal/terms', title: 'Terms of use', desc: 'Rules for using this website and its content.' },
] as const

export default function LegalIndexPage() {
  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="01 // Legal"
          title="Legal information"
          description="Site policies intended to support transparency and safe use."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block">
              <GlassCard className="h-full hover:translate-y-[-2px] transition-transform">
                <h2 className="text-2xl font-semibold mb-2">{l.title}</h2>
                <p className="text-slate-600 dark:text-slate-300">{l.desc}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
