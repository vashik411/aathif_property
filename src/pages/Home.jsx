import { Link } from 'react-router-dom'
import { LocateFixed, MapPin, Search, Sparkles } from 'lucide-react'
import { PROPERTIES } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

const STATS = [
  { label: 'Happy Customers', value: '5,000+' },
  { label: 'Properties Sold', value: '12,000+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Projects Delivered', value: '200+' },
]

export default function Home() {
  const featuredProperties = PROPERTIES.filter((p) => p.featured)

  const highlightedProperty = featuredProperties[1] || featuredProperties[0]

  return (
    <main className="w-full bg-[#F7F4ED]">
      {/* Featured property and connected search */}
      <section className="relative px-4 pb-16 pt-3 sm:px-6 sm:pb-20 sm:pt-5 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Link
            to={`/properties/${highlightedProperty.id}`}
            className="group relative block h-[270px] overflow-hidden rounded-t-2xl rounded-b-lg bg-[#173F35] sm:h-[360px] sm:rounded-2xl md:h-[410px]"
          >
            <img
              src={highlightedProperty.images?.[0]}
              alt={highlightedProperty.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2B25]/90 via-[#0E2B25]/25 to-transparent" />
            <div className="absolute right-4 top-5 max-w-[78%] text-right text-white sm:right-8 sm:top-8 md:right-12 md:top-12">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {highlightedProperty.title}
              </h1>
              <p className="mt-2 flex items-center justify-end gap-1.5 text-sm text-white/85 sm:text-base">
                {highlightedProperty.location.locality}, {highlightedProperty.location.city}
                <MapPin className="h-4 w-4 shrink-0 text-[#C9A55C]" />
              </p>
              <p className="mt-3 text-lg font-semibold sm:text-xl">{highlightedProperty.price}</p>
            </div>
          </Link>

          <div className="absolute inset-x-4 top-[calc(100%-1.5rem)] z-20 sm:inset-x-8 sm:top-[calc(100%-1.5rem)] md:inset-x-16">
            <Link
              to="/search"
              className="flex h-12 w-full items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 text-left shadow-lg shadow-black/10 transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2C78B8]/40 sm:h-14 sm:rounded-xl sm:px-5"
              aria-label="Open property search and filters"
            >
              <Search className="h-4 w-4 shrink-0 text-gray-700 sm:h-5 sm:w-5" />
              <span className="flex-1 text-xs font-medium text-gray-400 sm:text-sm">Search properties...</span>
              <span
                title="Open search filters"
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F4ED] text-[#C9A55C] sm:h-10 sm:w-10"
              >
                <LocateFixed className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="hidden grid-cols-2 gap-3 bg-gray-50 px-4 py-5 sm:grid sm:gap-4 sm:px-6 sm:py-7 md:grid-cols-4 md:py-9">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">{stat.value}</div>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured properties */}
      <section className="px-4 pb-12 pt-5 sm:px-6 sm:py-7 md:px-12 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Explore the collection
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl md:text-3xl">
                Recommended properties
              </h2>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
              <p className="hidden max-w-md text-sm leading-6 text-gray-600 sm:block">
                Handpicked land opportunities for living, growing, and building
                what comes next.
              </p>
              <Link
                to="/properties"
                className="shrink-0 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                View all
              </Link>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-1.5 sm:mt-6 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} compact />
            ))}
          </div>

          {/* Sell your property CTA */}
          <div className="mt-6 rounded-lg border border-[#E5E1D8] bg-[#F7F4ED] p-4 text-center sm:mt-8 sm:rounded-xl sm:p-6">
            <Sparkles className="mx-auto h-7 w-7 text-[#C9A55C] sm:h-8 sm:w-8" />
            <h3 className="mt-1.5 text-lg font-semibold text-gray-900 sm:mt-2 sm:text-xl">
              Have land to sell?
            </h3>
            <p className="mt-1.5 max-w-md text-sm leading-5 text-gray-600 mx-auto">
              Showcase your property to thousands of qualified buyers. List it
              for free and reach genuine buyers.
            </p>
            <Link
              to="/sell"
              className="mt-4 inline-block rounded-full bg-[#173F35] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0E2B25] hover:scale-105 animate-[sell-glow_2s_ease-in-out_infinite]"
            >
              Sell your property
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

