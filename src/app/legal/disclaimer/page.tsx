import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Website disclaimer for davidtheuri.com.',
}

export default function DisclaimerPage() {
  const lastUpdated = '2026-01-10'

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="04 // Legal"
          title="Disclaimer"
          description={`Last updated: ${lastUpdated}`}
        />

        <div className="mt-12 grid gap-6 max-w-3xl">
          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Content on this website is provided for general information only and does not constitute legal advice.
            </p>
            <p>
              Viewing this site or contacting through it does not create a lawyer-client relationship.
            </p>
            <p>
              While reasonable care is taken, accuracy and completeness are not guaranteed, and reliance is at your own risk.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
