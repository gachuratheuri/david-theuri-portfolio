import { siteConfig } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line-light dark:border-line-dark bg-white dark:bg-ink-950">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl mb-3">David Theuri</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Technology Lawyer • IT Transactions • Privacy • AI Governance
            </p>
          </div>
          <div>
            <p className="da-kicker mb-4">Contact</p>
            <p className="text-slate-600 dark:text-slate-300">
              <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              <a className="underline underline-offset-4" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
          <div>
            <p className="da-kicker mb-4">©</p>
            <p className="text-slate-600 dark:text-slate-300">© {year} {siteConfig.name}.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
