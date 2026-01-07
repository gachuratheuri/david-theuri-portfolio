'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

export type PostListItem = {
  slug: string
  url: string
  title: string
  description: string
  date: string
  tags: string[]
  jurisdiction: string[]
  featured?: boolean
}

export default function InsightsClient({ posts }: { posts: PostListItem[] }) {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string | null>(null)

  const jurisdictions = useMemo(() => {
    return Array.from(new Set(posts.flatMap((p) => p.jurisdiction))).sort()
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (!selectedJurisdiction) return posts
    return posts.filter((p) => p.jurisdiction.includes(selectedJurisdiction))
  }, [posts, selectedJurisdiction])

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Insights</h1>
          <p className="text-xl text-slate-600 mb-12">
            Analysis and commentary on AI governance, privacy law, and data protection regulation across jurisdictions.
          </p>

          <div className="mb-10">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Filter by jurisdiction</h2>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedJurisdiction(null)}
                className={cn(
                  'px-3 py-1 rounded-full text-sm transition-colors',
                  selectedJurisdiction === null
                    ? 'bg-primary-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-primary-100 hover:text-primary-800'
                )}
              >
                All
              </button>

              {jurisdictions.map((j) => (
                <button
                  type="button"
                  key={j}
                  onClick={() => setSelectedJurisdiction(j)}
                  className={cn(
                    'px-3 py-1 rounded-full text-sm transition-colors',
                    selectedJurisdiction === j
                      ? 'bg-primary-700 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-primary-100 hover:text-primary-800'
                  )}
                >
                  {j}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="border-b border-slate-200 pb-8 last:border-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.jurisdiction.map((j) => (
                    <span
                      key={j}
                      className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded"
                    >
                      {j}
                    </span>
                  ))}
                </div>

                <Link href={post.url} className="group">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-slate-600 mb-4">{post.description}</p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-slate-500">
                  <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                  <span aria-hidden="true">•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600">No insights found for this jurisdiction.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
