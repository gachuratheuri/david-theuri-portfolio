'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container-custom py-24">
      <h1 className="da-display text-4xl mb-4">Something went wrong</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Please try again. If the issue persists, use the Contact page.
      </p>
      <button className="btn-primary" onClick={() => reset()}>Retry</button>
    </div>
  )
}
