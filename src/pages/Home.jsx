import { Link, useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { PROPERTIES } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import SearchBar from '../components/SearchBar'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const STATS = [
  { label: 'Happy Customers', value: '5,000+' },
  { label: 'Properties Sold', value: '12,000+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Projects Delivered', value: '200+' },
]

export default function Home() {
  const navigate = useNavigate()

  const handleSearch = (filters) => {
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, val]) => {
      if (val) params.set(key, val)
    })
    navigate(`/properties?${params.toString()}`)
  }

  const featuredProperties = PROPERTIES.filter((p) => p.featured)

  return (
    <main className="w-full bg-[#F7F4ED]">
      {/* Hero */}
      <section className="relative hidden min-h-0 w-full overflow-hidden bg-[#0E2B25] sm:block sm:min-h-[500px] sm:[height:74svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-1/2 top-1/2 z-10 hidden w-[calc(100%-2rem)] max-w-[1180px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center text-white sm:flex sm:w-[min(94%,1180px)] sm:gap-3">
          <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-lg sm:text-3xl md:text-4xl">
            Find Your Dream Land
          </h1>
          <p className="max-w-2xl text-sm leading-5 drop-shadow-md sm:text-base sm:leading-normal">
            Discover premium residential plots, farm land, commercial properties,
            and luxury villas across Tamil Nadu.
          </p>
          <div className="w-full">
            <SearchBar onSearch={handleSearch} />
          </div>
          <Link
            to="/sell"
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition-colors hover:bg-emerald-500"
          >
            Sell your property
          </Link>
        </div>
      </section>

      <section className="bg-white px-3 pb-3 pt-3 sm:hidden">
        <SearchBar onSearch={handleSearch} />
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

