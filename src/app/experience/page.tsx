import type { Metadata } from 'next'
import { HiDownload } from 'react-icons/hi'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Experience overview and CV downloads.',
}

const cvDownloads = [
  {
    title: 'Privacy & AI Governance (International)',
    description: 'For privacy operations, DPO, AI governance, and regulatory roles.',
    href: siteConfig.cv.privacyAiIntl,
  },
  {
    title: 'Legal & Compliance (International)',
    description: 'For legal, compliance, governance, and risk roles.',
    href: siteConfig.cv.legalComplianceIntl,
  },
  {
    title: 'Legal & Compliance (Kenya)',
    description: 'For Kenya and regional roles.',
    href: siteConfig.cv.legalComplianceKe,
  },
] as const

export default function ExperiencePage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Experience</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-slate-600">
              Privacy operations, AI governance, contracts support, and regulatory compliance work across technology-enabled
              organizations and regulated sectors.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
          <div className="grid gap-4 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Privacy & governance delivery</h3>
              <p className="text-slate-700">
                GDPR-aligned privacy frameworks, RoPA/DPIA/TIA support, and audit-ready evidence for regulated clients.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Contracts acceleration</h3>
              <p className="text-slate-700">
                Practical playbooks and negotiation support across DPAs/SCCs/NDAs and commercial terms.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Measurable outcomes</h3>
              <p className="text-slate-700">
                Documented impact includes reduced compliance gaps (30%), increased deal velocity (25%), and improved client
                satisfaction (40%).
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Download CV</h2>
          <p className="text-slate-600 mb-6">Choose the variant most relevant to the role.</p>

          <div className="space-y-4">
            {cvDownloads.map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                download
                className="flex items-start justify-between gap-6 p-6 border border-slate-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{cv.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{cv.description}</p>
                </div>
                <HiDownload className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
