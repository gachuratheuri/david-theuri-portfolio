import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Technology/IT transactions, privacy operations, AI governance, and telecom/digital regulation support.',
}

const services = [
  {
    title: 'Tech/IT Transactions',
    bullets: ['SaaS/MSAs/SLAs, NDAs', 'DPAs/SCCs review support', 'Playbooks + approval workflows'],
  },
  {
    title: 'Privacy Operations (GDPR + Kenya DPA)',
    bullets: ['RoPA, DPIA, TIA support', 'Vendor risk and due diligence', 'Privacy-by-design enablement'],
  },
  {
    title: 'AI Governance',
    bullets: ['Responsible AI policy artifacts', 'Risk framing + controls', 'Stakeholder-ready guidance'],
  },
  {
    title: 'Telecom/Digital Regulation',
    bullets: ['Regulatory research and analysis', 'EU/UK/US focus with African-market relevance', 'Recommendations and briefs'],
  },
] as const

export default function ServicesPage() {
  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader kicker="01 // Services" title="High-signal deliverables" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <GlassCard key={s.title}>
              <h2 className="text-2xl font-semibold mb-3">{s.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
