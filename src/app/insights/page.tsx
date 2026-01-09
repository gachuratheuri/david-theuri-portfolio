import type { Metadata } from 'next'
import { allInsights } from 'contentlayer/generated'
import InsightsClient, { type PostListItem } from '@/components/InsightsClient'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Insights on RoPA, DPIA, TIA/SCCs, vendor privacy due diligence, and AI governance.',
}

export default function InsightsPage() {
  const posts: PostListItem[] = allInsights
    .map((p) => ({
      slug: p.slug,
      url: p.url,
      title: p.title,
      description: p.description,
      date: p.date,
      tags: p.tags,
      jurisdiction: p.jurisdiction,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return <InsightsClient posts={posts} />
}
