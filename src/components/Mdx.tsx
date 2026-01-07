'use client'

import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { MDXComponents } from 'mdx/types'

function isInternalHref(href: string) {
  return href.startsWith('/') || href.startsWith('#')
}

const components: MDXComponents = {
  a: ({ href = '', children, ...props }) => {
    const hrefStr = String(href)

    if (isInternalHref(hrefStr)) {
      return (
        <Link href={hrefStr} {...(props as any)}>
          {children}
        </Link>
      )
    }

    return (
      <a href={hrefStr} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
