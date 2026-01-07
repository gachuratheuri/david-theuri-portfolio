import type { MetadataRoute } from 'next'
import { allInsights } from 'contentlayer/generated'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, '')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/experience`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]

  const insightRoutes: MetadataRoute.Sitemap = allInsights.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: p.featured ? 0.8 : 0.6,
  }))

  return [...staticRoutes, ...insightRoutes]
}
