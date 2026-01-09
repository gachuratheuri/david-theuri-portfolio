import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-custom py-24">
      <h1 className="da-display text-4xl mb-4">Page not found</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        The page may have moved, or the link is incorrect.
      </p>
      <Link className="btn-primary" href="/">Go home</Link>
    </div>
  )
}
