import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'
import RoleTargets from '@/components/RoleTargets'

export const metadata: Metadata = {
  title: 'About',
  description: 'Technology lawyer and privacy/AI governance professional working across digital regulation, contracting, and operational compliance.',
}

export default function AboutPage() {
  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="01 // About"
          title="Technology law + operational compliance"
          description="Dual-lane practice: Tech/IT Transactions and Privacy/AI Governance."
        />

        <div className="mt-12 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <GlassCard className="p-8">
              <p className="da-kicker mb-4">Bio</p>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  David Theuri is a technology lawyer and privacy/AI governance professional working at the intersection of digital
                  regulation, contracting, and operational compliance.
                </p>
                <p>
                  He holds an LLM in Technology, Media & Telecommunications from Queen Mary University of London and maintains IAPP
                  certifications (CIPP/E, CIPM, AIGP), signalling capability across European privacy concepts, privacy program management,
                  and responsible AI governance.
                </p>
                <p>
                  His experience includes building GDPR-aligned privacy frameworks mapped to Kenya’s Data Protection Act (2019), delivering
                  privacy operations (RoPA, DPIAs, TIAs), and supporting technology transactions through practical playbooks and contract
                  execution (DPAs, SCCs, NDAs, SaaS/MSAs).
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-5">
            <GlassCard className="p-8">
              <p className="da-kicker mb-4">Credentials</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Advocate (Kenya)</li>
                <li>LLM — Technology, Media & Telecommunications (QMUL)</li>
                <li>IAPP — CIPP/E • CIPM • AIGP</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        <div className="mt-12">
          <RoleTargets />
        </div>
      </div>
    </section>
  )
}
