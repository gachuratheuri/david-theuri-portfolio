'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
] as const

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const items = useMemo(() => navigation, [])

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-primary-700 text-lg">
            David Theuri
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium py-5 border-b-2 transition-colors',
                    active
                      ? 'text-primary-700 border-primary-700'
                      : 'text-slate-600 border-transparent hover:text-primary-700 hover:border-primary-200'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            className="md:hidden text-slate-700 hover:text-primary-700"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    active
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
