import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  a: (props) => <a {...props} className="underline underline-offset-4" />,
  ul: (props) => <ul {...props} className="list-disc pl-6" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6" />,
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
