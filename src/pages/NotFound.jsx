import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center bg-[#f4f1ea] px-6 py-20 text-center">
      <div className="max-w-md">
        <div className="text-8xl font-bold text-emerald-200">404</div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  )
}
