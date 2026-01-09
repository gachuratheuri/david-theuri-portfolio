import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact David Theuri for technology law, IT transactions, privacy operations, and AI governance work.',
}

export default function ContactPage() {
  return (
    <section className="py-20 bg-white dark:bg-ink-950">
      <div className="container-custom">
        <SectionHeader
          kicker="01 // Contact"
          title="Start a conversation"
          description="Form-first for reliability; email and scheduling available as fallback."
        />

        <div className="mt-12 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-5">
            <GlassCard className="p-8">
              <p className="da-kicker mb-4">Direct</p>
              <p className="text-slate-600 dark:text-slate-300">
                Email: <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              {siteConfig.calendly ? (
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Calendar: <a className="underline underline-offset-4" href={siteConfig.calendly} target="_blank" rel="noreferrer">Book a slot</a>
                </p>
              ) : null}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
