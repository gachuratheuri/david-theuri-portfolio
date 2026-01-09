import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'
import ProofGrid from '@/components/ProofGrid'
import RoleTargets from '@/components/RoleTargets'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'How David Theuri delivers across IT transactions, privacy operations, AI governance, and telecom/digital regulation—with evidence-led outcomes and recruiter-friendly artifacts.',
}

const lanes = [
  {
    kicker: 'Lane A',
    title: 'Technology / IT Transactions',
    summary:
      'Commercial tech contracting and legal ops improvements that reduce bottlenecks and accelerate deal cycles.',
    bullets: [
      'SaaS/MSAs/SLAs: structured redlines and fallback positions.',
      'NDAs + data clauses: practical risk allocation and enforceability focus.',
      'DPAs/SCCs: execution support aligned to operational privacy controls.',
      'Contract playbooks: standard positions + triage to speed approvals.',
    ],
  },
  {
    kicker: 'Lane B',
    title: 'Privacy & AI Governance',
    summary:
      'Operational compliance artifacts and governance controls that translate legal requirements into workflows.',
    bullets: [
      'RoPA: audit-ready structure and evidence mapping.',
      'DPIA/TIA: risk assessment approach and stakeholder outputs.',
      'Vendor privacy due diligence: repeatable intake + review patterns.',
      'AI governance: policy, accountability, risk framing, and controls.',
    ],
  },
  {
    kicker: 'Research',
    title: 'Telecom / Digital Regulation',
    summary:
      'Research-backed regulatory analysis and recommendations with EU/UK/US focus and African-market relevance.',
    bullets: [
      'Comparative regulatory briefs and stakeholder-ready summaries.',
      'Telecom/digital regulation research outputs and recommendations.',
    ],
  },
] as const

const process = [
  {
    step: '01',
    title: 'Scope & success criteria',
    detail:
      'Clarify stakeholders, objectives, constraints, and what “good” looks like (deliverables + decision points).',
  },
  {
    step: '02',
    title: 'Build artifacts',
    detail:
      'Create playbooks, templates, checklists, and risk notes designed to be used repeatedly by teams.',
  },
  {
    step: '03',
    title: 'Embed & enable',
    detail:
      'Align with how teams actually operate: lightweight governance, handover notes, and adoption support.',
  },
  {
    step: '04',
    title: 'Measure & iterate',
    detail:
      'Track bottlenecks, recurring issues, and time-to-decision; refine artifacts so outcomes compound.',
  },
] as const

const faq = [
  {
    q: 'Can specific clients or matters be disclosed?',
    a: 'Case studies focus on deliverables and outcomes while respecting confidentiality and privilege boundaries.',
  },
  {
    q: 'Do you support cross-border work?',
    a: 'Yes—work is structured around operational artifacts and stakeholder-ready outputs that travel across jurisdictions (where appropriate).',
  },
  {
    q: 'What do recruiters get from this page?',
    a: 'A quick view of lanes, deliverables, and measurable outcomes—plus direct next steps (Portfolio and Contact).',
  },
] as const

export default function ExperiencePage() {
  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="01 // Experience"
          title="High-signal delivery, recruiter-readable proof"
          description="This page explains how work is delivered across the dual lanes (Tech/IT Transactions + Privacy/AI Governance) with outcomes and artifacts."
        />

        {/* Lane cards */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {lanes.map((l) => (
            <GlassCard key={l.title} className="p-8 h-full">
              <p className="da-kicker mb-3">{l.kicker}</p>
              <h2 className="text-2xl font-semibold mb-3">{l.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-5">{l.summary}</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                {l.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Proof grid */}
        <div className="mt-16">
          <SectionHeader
            kicker="02 // Proof"
            title="Evidence-led outcomes"
            description="Metrics and research outputs used as credibility boosters on conversion pages."
          />
          <div className="mt-10">
            <ProofGrid />
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SectionHeader
            kicker="03 // Process"
            title="A repeatable delivery model"
            description="Designed for speed, clarity, and stakeholder alignment—without sacrificing auditability."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {process.map((p) => (
              <GlassCard key={p.step} className="p-8">
                <p className="da-kicker mb-3">{p.step} // Step</p>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{p.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Recruiter keywords */}
        <div className="mt-16">
          <SectionHeader kicker="04 // Recruiters" title="Open to roles" />
          <div className="mt-10">
            <RoleTargets />
          </div>
        </div>

        {/* FAQ + CTA */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <GlassCard className="p-8">
              <p className="da-kicker mb-4">05 // FAQ</p>
              <div className="space-y-6">
                {faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{f.a}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-8">
              <p className="da-kicker mb-4">06 // Next step</p>
              <h3 className="text-2xl font-semibold mb-3">Make evaluation easy</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The fastest way to validate fit is to review case studies and then use the contact form for role discussions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/portfolio" className="btn-primary">
                  View portfolio
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Contact
                </Link>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-5">
                Direct email:{' '}
                <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
