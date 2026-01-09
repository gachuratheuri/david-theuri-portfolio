import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ProofGrid from '@/components/ProofGrid'
import RoleTargets from '@/components/RoleTargets'
import GlassCard from '@/components/GlassCard'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="da-surface da-grid min-h-[92vh] flex items-center bg-white dark:bg-ink-950">
        <div className="da-glow -top-24 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-glow-blue to-glow-purple" />
        <div className="da-glow -bottom-24 -left-24 w-[520px] h-[520px] bg-gradient-to-br from-glow-cyan to-glow-purple" />

        <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 py-20">
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="da-kicker mb-4">01 // Positioning</p>

            <h1 className="da-display text-4xl md:text-6xl leading-[1.0] mb-6">
              Technology Lawyer | IT Transactions | Privacy & AI Governance
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
              Kenyan-qualified Advocate with an LLM in Technology, Media & Telecommunications (QMUL) and IAPP certifications
              (CIPP/E, CIPM, AIGP), supporting regulated organisations across Africa, the UK and Europe.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn-primary">View portfolio & case studies</Link>
              <Link href="/contact" className="btn-ghost">Contact</Link>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-6">
              Prefer email? <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>

          <div className="md:col-span-5 hidden md:flex md:items-center">
            <div className="w-full border-l border-line-dark pl-8 space-y-6">
              <GlassCard className="p-6">
                <p className="da-kicker mb-3">02 // Focus areas</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Technology/IT transactions (SaaS/MSAs, NDAs, DPAs/SCCs), privacy operations (RoPA/DPIA/TIA), AI governance
                  (policy + risk + controls), and telecommunications/digital regulation research—turning legal requirements into
                  practical workflows and stakeholder-ready guidance.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-ink-950">
        <div className="container-custom">
          <SectionHeader kicker="03 // Proof" title="Evidence-led outcomes" />
          <div className="mt-12">
            <ProofGrid />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-ink-900">
        <div className="container-custom">
          <SectionHeader kicker="04 // Services" title="What I deliver" description="Built for recruiter scanning and stakeholder clarity." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                t: 'Technology Transactions & Legal Ops',
                b: 'SaaS/MSAs/SLAs, NDAs, DPAs/SCCs, and contract playbooks to reduce review bottlenecks and accelerate deal velocity.',
              },
              {
                t: 'Privacy Operations (GDPR & Kenya DPA)',
                b: 'RoPA, DPIA, TIA support; vendor risk; privacy-by-design enablement with evidence-ready artifacts.',
              },
              {
                t: 'AI Governance & Risk',
                b: 'Responsible AI policy and governance artifacts; risk framing, controls, and stakeholder-ready guidance.',
              },
              {
                t: 'Telecommunications & Digital Regulation',
                b: 'Research-driven regulatory analysis and recommendations with EU/UK/US focus and African-market relevance.',
              },
            ].map((x) => (
              <GlassCard key={x.t}>
                <h3 className="text-xl font-semibold mb-2">{x.t}</h3>
                <p className="text-slate-600 dark:text-slate-300">{x.b}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-ink-950">
        <div className="container-custom">
          <SectionHeader kicker="05 // Roles" title="Open to roles" />
          <div className="mt-12">
            <RoleTargets />
          </div>
        </div>
      </section>
    </>
  )
}
