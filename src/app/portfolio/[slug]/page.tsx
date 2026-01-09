import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allCaseStudies } from 'contentlayer/generated'
import { format } from 'date-fns'
import Mdx from '@/components/Mdx'
import GlassCard from '@/components/GlassCard'

type Props = { params: { slug: string } }

export const dynamicParams = false

export async function generateStaticParams() {
  return allCaseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = allCaseStudies.find((p) => p.slug === params.slug)
  if (!cs) return {}

  return {
    title: cs.seoTitle || cs.title,
    description: cs.seoDescription || cs.summary,
    openGraph: {
      type: 'article',
      title: cs.seoTitle || cs.title,
      description: cs.seoDescription || cs.summary
    }
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = allCaseStudies.find((p) => p.slug === params.slug)
  if (!cs) notFound()

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Link href="/portfolio" className="text-brand-700 dark:text-slate-200 hover:underline">
            ← Back to Portfolio
          </Link>

          <header className="mt-8 mb-10">
            <p className="da-kicker mb-3">{cs.lane}</p>
            <h1 className="da-display text-4xl md:text-5xl mb-4">{cs.title}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">{cs.summary}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{format(new Date(cs.date), 'MMMM d, yyyy')}</p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <GlassCard>
              <p className="da-kicker mb-3">Deliverables</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                {cs.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </GlassCard>

            {cs.outcomes?.length ? (
              <GlassCard>
                <p className="da-kicker mb-3">Outcomes</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                  {cs.outcomes.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </GlassCard>
            ) : null}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Mdx code={cs.body.code} />
          </div>
        </div>
      </div>
    </section>
  )
}
