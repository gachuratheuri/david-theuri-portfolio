import { siteConfig } from '@/lib/site'

export default function JsonLdSite() {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.social.linkedin],
    jobTitle: 'Technology Lawyer | IT Transactions | Privacy & AI Governance',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </>
  )
}
