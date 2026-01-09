import GlassCard from '@/components/GlassCard'

const roles = [
  'Technology Lawyer / Technology & Data Lawyer',
  'Technology Transactions Counsel / IT Transactions Lawyer / Commercial Technology Counsel (SaaS, licensing, outsourcing)',
  'Telecommunications Lawyer / Telecom Regulatory Counsel / Digital Policy & Telecom Regulation Analyst',
  'Privacy Counsel / Data Privacy Counsel / Data Protection Officer (DPO) / Privacy Program Manager (Privacy Ops)',
  'AI Governance Lead / Responsible AI Governance / AI Policy & Risk (Governance)',
  'GRC (Privacy/AI) / Third-Party & Vendor Risk (Privacy) / Regulatory Compliance (Tech & Data)',
  'Legal Operations (Tech/Privacy) / Contract Manager (Technology)',
] as const

export default function RoleTargets() {
  return (
    <GlassCard className="p-8">
      <p className="da-kicker mb-4">06 // Recruiter block</p>
      <h3 className="text-2xl font-semibold mb-4">Open to roles</h3>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
        {roles.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </GlassCard>
  )
}
