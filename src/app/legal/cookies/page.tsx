import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Cookies & analytics',
  description: 'Information about cookies and performance/analytics signals used by davidtheuri.com.',
}

export default function CookiesPage() {
  const lastUpdated = '2026-01-10'

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="03 // Legal"
          title="Cookies & analytics"
          description={`Last updated: ${lastUpdated}`}
        />

        <div className="mt-12 grid gap-6 max-w-3xl">
          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              This site aims to be lightweight and may use minimal measurement tools for performance and reliability.
            </p>
            <p>
              If analytics/performance tools are enabled, they may collect basic usage or device information to help improve site performance and stability.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Managing cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most browsers allow you to delete or block cookies in settings.</li>
              <li>Blocking cookies may affect certain site functionality, depending on the tools enabled.</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
