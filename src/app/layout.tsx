import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { baseMetadata } from '@/lib/seo'
import JsonLdSite from '@/components/JsonLdSite'
import { SpeedInsights } from '@vercel/speed-insights/next'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const display = Oswald({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = baseMetadata({
  alternates: { canonical: '/' },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} dark`}>
      <body>
        <JsonLdSite />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
