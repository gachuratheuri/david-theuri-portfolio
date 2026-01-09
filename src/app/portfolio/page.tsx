import type { Metadata } from 'next'
import Link from 'next/link'
import { allCaseStudies } from 'contentlayer/generated'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Case studies showing deliverables (playbooks, RoPA/DPIA/TIA, AI governance artifacts) and outcomes.',
}

export default function PortfolioPage() {
  const items = allCaseStudies.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader kicker="01 // Portfolio" title="Case studies & deliverables" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((cs) => (
            <Link key={cs.slug} href={cs.url} className="block">
              <GlassCard className="h-full hover:translate-y-[-2px] transition-transform">
                <p className="da-kicker mb-3">{cs.lane}</p>
                <h2 className="text-2xl font-semibold mb-2">{cs.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-5">{cs.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.slice(0, 6).map((t) => (
                    <span key={t} className="chip py-1 px-3 text-xs">{t}</span>
                  ))}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
