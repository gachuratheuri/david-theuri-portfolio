import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allInsights } from 'contentlayer/generated'
import { format } from 'date-fns'
import Mdx from '@/components/Mdx'

type Props = { params: { slug: string } }

export const dynamicParams = false

export async function generateStaticParams() {
  return allInsights.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allInsights.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    openGraph: {
      type: 'article',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default function InsightPage({ params }: Props) {
  const post = allInsights.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-brand-700 dark:text-slate-200 hover:underline">
            ← Back to Writing
          </Link>

          <header className="mt-8 mb-10">
            <p className="da-kicker mb-3">{post.jurisdiction.join(' • ')}</p>
            <h1 className="da-display text-4xl md:text-5xl mb-4">{post.title}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">{post.description}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Mdx code={post.body.code} />
          </div>
        </div>
      </div>
    </section>
  )
}
