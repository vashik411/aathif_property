import { Link } from 'react-router-dom'
import { MapPin, Sparkles } from 'lucide-react'

export default function PropertyCard({ property, highlighted = false, compact = false }) {
  const handleImageError = (e) => {
    e.target.src = `https://picsum.photos/seed/fallback-${property.id}/800/600`
  }

  const bgClass = highlighted ? 'bg-[#E5E1D8]' : 'bg-[#173F35]'

  const badgeText = highlighted ? 'Your featured post' : property.purpose

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/properties/${property.id}`} className="block">
        <img
          src={property.images?.[0]}
          alt={property.title}
          onError={handleImageError}
          className={compact ? 'h-16 w-full object-cover sm:h-20 md:h-24' : 'h-20 w-full object-cover sm:h-24 md:h-32'}
        />
      </Link>

      {!compact && (
        <div className={`relative flex h-7 shrink-0 items-end px-1.5 pb-0.5 sm:h-10 sm:px-3 sm:pb-1.5 ${bgClass}`}>
          <span className="max-w-full truncate rounded-full bg-black/65 px-1.5 py-0.5 text-[8px] font-medium text-white backdrop-blur-sm sm:px-2.5 sm:py-0.5 sm:text-xs">
            {badgeText}
          </span>
        </div>
      )}

      <div className="p-1.5 sm:p-2.5">
        <div className="mb-0.5 flex items-start justify-between gap-1">
          <h3 className="line-clamp-2 text-[11px] font-semibold leading-3 tracking-tight text-gray-900 sm:text-base sm:leading-normal">
            {property.title}
          </h3>
          {property.featured && <Sparkles className="h-2.5 w-2.5 shrink-0 text-[#C9A55C] sm:h-4 sm:w-4" />}
        </div>

        <p className="flex min-w-0 items-center truncate text-[9px] text-gray-500 sm:text-sm">
          <MapPin className="mr-0.5 h-2.5 w-2.5 shrink-0 sm:mr-1 sm:h-3 sm:w-3" />
          {property.location.locality}, {property.location.city}
        </p>

        <div className="mt-0.5 flex flex-wrap gap-0.5 text-[8px] font-medium leading-3 text-gray-800 sm:mt-1.5 sm:gap-1 sm:text-xs sm:leading-normal">
          <span className="max-w-full truncate rounded bg-gray-100 px-1 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.price}</span>
          {!compact && <span className="max-w-full truncate rounded bg-gray-100 px-1 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.area}</span>}
          {!compact && <span className="max-w-full truncate rounded bg-gray-100 px-1 py-0.5 sm:rounded-lg sm:px-2 sm:py-1">{property.facing}</span>}
        </div>

        {!compact && <p className="mt-0.5 text-[9px] leading-3 text-gray-600 line-clamp-2 sm:mt-1 sm:text-xs sm:leading-4">{property.description}</p>}

        <Link
          to={`/properties/${property.id}`}
          className={compact ? 'mt-1 inline-flex w-full items-center justify-center rounded bg-black px-1.5 py-1 text-[9px] font-semibold text-white hover:bg-gray-800 sm:mt-2 sm:rounded-full sm:px-3 sm:py-1.5 sm:text-sm' : 'mt-1 text-[10px] font-semibold text-gray-900 underline-offset-4 hover:underline sm:mt-2 sm:text-sm'}
        >
          View property
        </Link>
      </div>
    </article>
  )
}

