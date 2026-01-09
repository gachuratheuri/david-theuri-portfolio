'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { format } from 'date-fns'
import GlassCard from '@/components/GlassCard'
import SectionHeader from '@/components/SectionHeader'

export type PostListItem = {
  slug: string
  url: string
  title: string
  description: string
  date: string
  tags: string[]
  jurisdiction: string[]
}

export default function InsightsClient({ posts }: { posts: PostListItem[] }) {
  const [jurisdiction, setJurisdiction] = useState<string | null>(null)

  const jurisdictions = useMemo(() => {
    return Array.from(new Set(posts.flatMap((p) => p.jurisdiction))).sort()
  }, [posts])

  const filtered = useMemo(() => {
    if (!jurisdiction) return posts
    return posts.filter((p) => p.jurisdiction.includes(jurisdiction))
  }, [posts, jurisdiction])

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="01 // Writing"
          title="Insights"
          description="Short, keyword-targeted posts designed to compound authority and support recruiter evaluation."
        />

        <div className="mt-10">
          <p className="da-kicker mb-3">Filter by jurisdiction</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setJurisdiction(null)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${jurisdiction === null ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200'}`}
            >
              All
            </button>
            {jurisdictions.map((j) => (
              <button
                key={j}
                type="button"
                onClick={() => setJurisdiction(j)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${jurisdiction === j ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200'}`}
              >
                {j}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} href={p.url} className="block">
              <GlassCard className="h-full hover:translate-y-[-2px] transition-transform">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.jurisdiction.map((j) => (
                    <span key={j} className="chip py-1 px-3 text-xs">{j}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-5">{p.description}</p>
                <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 flex-wrap">
                  <time dateTime={p.date}>{format(new Date(p.date), 'MMMM d, yyyy')}</time>
                  <span aria-hidden="true">•</span>
                  {p.tags.slice(0, 5).map((t) => <span key={t}>#{t}</span>)}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
