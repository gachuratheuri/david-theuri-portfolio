import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allInsights } from 'contentlayer/generated'
import { format } from 'date-fns'
import Mdx from '@/components/Mdx'

type Props = { params: { slug: string } }

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

  const sources =
    Array.isArray(post.sourceLinks) ? (post.sourceLinks as any[]) : []

  return (
    <div className="py-16 bg-white">
      <article className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-primary-700 hover:underline">
            ← Back to Insights
          </Link>

          <header className="mt-8 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.jurisdiction.map((j) => (
                <span
                  key={j}
                  className="text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded"
                >
                  {j}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-3">{post.title}</h1>
            <p className="text-xl text-slate-600 mb-4">{post.description}</p>

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              <span aria-hidden="true">•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-slate max-w-none">
            <Mdx code={post.body.code} />
          </div>

          {sources.length > 0 && (
            <section className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Sources</h2>
              <ul className="space-y-2">
                {sources.map((s, idx) => (
                  <li key={idx}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 hover:underline"
                    >
                      {s.title}
                    </a>
                    {s.type ? <span className="text-slate-500"> — {s.type}</span> : null}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </div>
  )
}
