import Link from 'next/link'
import { allInsights } from 'contentlayer/generated'
import { format } from 'date-fns'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  const featuredInsights = allInsights
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => p.featured)
    .slice(0, 3)

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              AI Governance & Privacy Law Specialist
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Kenyan-qualified legal professional specializing in privacy, data protection, and AI governance.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['CIPP/E', 'CIPM', 'AIGP', 'LLM (QMUL)', 'Advocate (Kenya)'].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
              <Link href="/experience" className="btn-secondary">
                <HiDownload className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Expertise across jurisdictions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">UK & EU</h3>
              <p className="text-slate-600">
                Postgraduate study at Queen Mary University of London (LLM, Technology, Media & Telecommunications),
                plus privacy operations and AI governance focus.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kenya & Africa</h3>
              <p className="text-slate-600">
                Advocate of the High Court of Kenya with experience mapping GDPR-aligned privacy frameworks to Kenya’s
                Data Protection Act 2019.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI governance</h3>
              <p className="text-slate-600">
                AIGP-certified, with research and applied work on responsible AI, accountability, and emerging tech regulation.
              </p>
            </div>
          </div>

          <div className="mt-10 text-sm text-slate-600">
            Prefer email?{' '}
            <a className="text-primary-700 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      {featuredInsights.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="flex items-center justify-between gap-6 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Latest insights</h2>
              <Link
                href="/insights"
                className="text-primary-700 hover:text-primary-800 font-medium flex items-center"
              >
                View all <HiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredInsights.map((post) => (
                <Link
                  key={post.slug}
                  href={post.url}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.jurisdiction.slice(0, 2).map((j) => (
                      <span
                        key={j}
                        className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded"
                      >
                        {j}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{post.description}</p>
                  <p className="text-xs text-slate-500">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
