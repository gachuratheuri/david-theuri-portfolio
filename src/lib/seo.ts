import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export function absoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function baseMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
    openGraph: {
      type: 'website',
      url: siteConfig.siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
    },
    ...overrides,
  }
}
