import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background, education, and certifications of David Theuri — privacy, data protection, and AI governance.',
}

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">About</h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-slate-600">
              Kenyan-qualified legal professional specializing in privacy, data protection, and AI governance, with
              postgraduate study in Technology, Media & Telecommunications law at Queen Mary University of London.
            </p>

            <h2>Professional focus</h2>
            <p>
              Work at the intersection of legal compliance and operational delivery: privacy program implementation,
              governance frameworks, regulatory readiness, and cross-functional risk management.
            </p>

            <h2>Education</h2>
            <ul>
              <li>LLM — Technology, Media & Telecommunications Law (QMUL).</li>
              <li>Postgraduate Diploma in Law — Kenya School of Law.</li>
              <li>LLB — Strathmore University (Second Class Honours, Upper Division).</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
              <li>CIPP/E — IAPP.</li>
              <li>CIPM — IAPP.</li>
              <li>AIGP — IAPP.</li>
              <li>Advocate of the High Court of Kenya.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
