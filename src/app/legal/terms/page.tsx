import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms governing use of davidtheuri.com.',
}

export default function TermsPage() {
  const lastUpdated = '2026-01-10'

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="05 // Legal"
          title="Terms of use"
          description={`Last updated: ${lastUpdated}`}
        />

        <div className="mt-12 grid gap-6 max-w-3xl">
          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>You may view and share links to content, but do not misrepresent authorship.</li>
              <li>Do not attempt to disrupt the site or abuse the contact form.</li>
              <li>Third-party links are provided for convenience and are not endorsements.</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
