import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { allInsights, allCaseStudies } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.siteUrl, lastModified: now },
    { url: `${siteConfig.siteUrl}/services`, lastModified: now },
    { url: `${siteConfig.siteUrl}/portfolio`, lastModified: now },
    { url: `${siteConfig.siteUrl}/insights`, lastModified: now },
    { url: `${siteConfig.siteUrl}/about`, lastModified: now },
    { url: `${siteConfig.siteUrl}/contact`, lastModified: now },

    // Legal hygiene
    { url: `${siteConfig.siteUrl}/legal`, lastModified: now },
    { url: `${siteConfig.siteUrl}/legal/privacy`, lastModified: now },
    { url: `${siteConfig.siteUrl}/legal/cookies`, lastModified: now },
    { url: `${siteConfig.siteUrl}/legal/disclaimer`, lastModified: now },
    { url: `${siteConfig.siteUrl}/legal/terms`, lastModified: now },
  ]

  const insightRoutes: MetadataRoute.Sitemap = allInsights.map((p) => ({
    url: `${siteConfig.siteUrl}${p.url}`,
    lastModified: new Date(p.date),
  }))

  const portfolioRoutes: MetadataRoute.Sitemap = allCaseStudies.map((p) => ({
    url: `${siteConfig.siteUrl}${p.url}`,
    lastModified: new Date(p.date),
  }))

  return [...staticRoutes, ...insightRoutes, ...portfolioRoutes]
}
