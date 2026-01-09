import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GlassCard from '@/components/GlassCard'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How davidtheuri.com processes personal data when you use the site and contact form.',
}

export default function PrivacyNoticePage() {
  const lastUpdated = '2026-01-10'

  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="02 // Legal"
          title="Privacy notice"
          description={`Last updated: ${lastUpdated}`}
        />

        <div className="mt-12 grid gap-6 max-w-3xl">
          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              This notice explains how personal data is handled when using this website and its contact functionality.
            </p>
            <p>
              For privacy-related enquiries, contact: <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Data collected</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact form fields you submit (e.g., name, email, message, and optional purpose).</li>
              <li>Basic technical data needed to secure the form (e.g., IP address for rate limiting / abuse prevention, where enabled).</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How data is used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to enquiries and maintain a record of communications.</li>
              <li>To protect the contact endpoint from spam and abuse.</li>
              <li>To operate and secure the website.</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Service providers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email delivery: Resend (only if configured on the server).</li>
              <li>Hosting & delivery: the site is deployed on an edge/CDN platform (e.g., Vercel) as part of the build setup.</li>
              <li>Optional rate limiting: Upstash Redis (only if enabled via environment variables).</li>
              <li>Performance measurement: Vercel Speed Insights may be enabled.</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Retention</h2>
            <p>
              Messages are retained only as long as needed to handle the enquiry and maintain reasonable records, after which they may be deleted or archived.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 text-slate-600 dark:text-slate-300">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Your choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can contact via email instead of the form.</li>
              <li>You can request correction or deletion of your message by emailing the address above (subject to legal/professional record-keeping needs).</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
