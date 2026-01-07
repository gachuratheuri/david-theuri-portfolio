import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { siteConfig } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-slate-600">
              Privacy, Data Protection & AI Governance.
            </p>
            <p className="text-sm text-slate-600 mt-2">
              CIPP/E, CIPM, AIGP | LLM (QMUL) | Advocate (Kenya)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-primary-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-sm text-slate-600 hover:text-primary-700">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-slate-600 hover:text-primary-700">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-primary-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-slate-600 hover:text-primary-700"
                aria-label="Email"
              >
                <HiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 text-center">© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
