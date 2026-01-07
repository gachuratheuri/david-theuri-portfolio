import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact David Theuri regarding privacy, data protection, AI governance, and legal compliance.',
}

export default function ContactPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h1>
          <p className="text-xl text-slate-600 mb-10">
            For privacy, data protection, AI governance, and legal compliance opportunities.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  )
}
