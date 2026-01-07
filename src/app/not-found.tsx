import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
          <p className="text-slate-600 mt-4">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
