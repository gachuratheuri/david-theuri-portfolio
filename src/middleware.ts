import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { siteConfig } from '@/lib/site'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const canonicalHost = new URL(siteConfig.siteUrl).host

  if (host === `www.${canonicalHost}`) {
    const url = req.nextUrl
    url.host = canonicalHost
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|robots.txt|sitemap.xml|favicon.ico).*)'],
}
