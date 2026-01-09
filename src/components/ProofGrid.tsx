import GlassCard from '@/components/GlassCard'

const proof = [
  {
    metric: '30%',
    label: 'Reduced compliance gaps',
    detail: 'Identified contract-review bottlenecks and implemented playbooks for financial and telecommunications clients.',
  },
  {
    metric: '25%',
    label: 'Increased deal velocity',
    detail: 'Led risk assessments, surfaced regulatory gaps, and delivered actionable remediation plans.',
  },
  {
    metric: '40%',
    label: 'Improved client satisfaction',
    detail: 'Delivered cross-functionally with sales, technical teams, and leadership.',
  },
  {
    metric: 'Research',
    label: 'Telecom regulation contribution',
    detail: 'Produced recommendations (EU/US/UK focus) contributing to a revised edition of Telecommunications Law and Regulation.',
  },
] as const

export default function ProofGrid() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {proof.map((p) => (
        <GlassCard key={p.label}>
          <p className="text-3xl font-semibold">{p.metric}</p>
          <p className="mt-2 font-semibold">{p.label}</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{p.detail}</p>
        </GlassCard>
      ))}
    </div>
  )
}
