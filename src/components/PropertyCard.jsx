import { Link } from 'react-router-dom'
import { MapPin, Sparkles } from 'lucide-react'

export default function PropertyCard({ property, highlighted = false }) {
  const handleImageError = (e) => {
    e.target.src = `https://picsum.photos/seed/fallback-${property.id}/800/600`
  }

  const bgClass = highlighted
    ? 'bg-gradient-to-br from-amber-200 via-lime-100 to-emerald-200'
    : 'bg-gradient-to-br from-slate-700 via-emerald-800 to-lime-700'

  const badgeText = highlighted ? 'Your featured post' : property.purpose

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/properties/${property.id}`} className="block">
        <img
          src={property.images?.[0]}
          alt={property.title}
          onError={handleImageError}
          className="h-28 w-full object-cover sm:h-32 md:h-36"
        />
      </Link>

      <div className={`relative flex h-12 shrink-0 items-end px-3 pb-2 sm:h-14 sm:px-4 sm:pb-3 ${bgClass}`}>
        <span className="rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
          {badgeText}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div className="mb-0.5 flex items-start justify-between gap-1">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900 sm:text-base">
            {property.title}
          </h3>
          {property.featured && <Sparkles className="h-3 w-3 shrink-0 text-amber-400 sm:h-4 sm:w-4" />}
        </div>

        <p className="flex items-center text-xs text-gray-500 sm:text-sm">
          <MapPin className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
          {property.location.locality}, {property.location.city}
        </p>

        <div className="mt-1.5 flex flex-wrap gap-1 text-[10px] font-medium text-gray-800 sm:mt-2 sm:gap-1.5 sm:text-xs">
          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.price}</span>
          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.area}</span>
          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.facing}</span>
        </div>

        <p className="mt-1.5 text-[10px] leading-4 text-gray-600 line-clamp-2 sm:mt-2 sm:text-xs sm:leading-5">{property.description}</p>

        <Link
          to={`/properties/${property.id}`}
          className="mt-2.5 text-xs font-semibold text-gray-900 underline-offset-4 hover:underline sm:mt-3 sm:text-sm"
        >
          View property
        </Link>
      </div>
    </article>
  )
}

