'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-line-light dark:border-line-dark bg-white/80 dark:bg-ink-950/70 backdrop-blur">
      <div className="container-custom h-16 flex items-center justify-between">
        <Link href="/" className="font-display tracking-tight text-lg text-slate-900 dark:text-white">
          David Theuri
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold tracking-wide transition-colors',
                  active ? 'text-brand-700 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                )}
              >
                {item.name.toUpperCase()}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary py-2 px-4">CONTACT</Link>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line-light dark:border-line-dark bg-white dark:bg-ink-950">
          <div className="container-custom py-4 space-y-1">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 font-semibold',
                    active ? 'bg-slate-100 text-slate-900 dark:bg-white/5 dark:text-white' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
