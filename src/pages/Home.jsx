import { Link, useNavigate } from 'react-router-dom'
import { Search, Sparkles } from 'lucide-react'
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
    <main className="w-full bg-[#f4f1ea]">
      {/* Hero */}
      <section className="relative h-[330px] min-h-0 w-full overflow-hidden bg-black sm:min-h-[700px] sm:[height:100svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-1/2 top-1/2 z-10 hidden w-[calc(100%-2rem)] max-w-[1180px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 text-center text-white sm:flex sm:w-[min(94%,1180px)] sm:gap-6">
          <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
            Find Your Dream Land
          </h1>
          <p className="max-w-2xl text-sm leading-5 drop-shadow-md sm:text-lg sm:leading-normal">
            Discover premium residential plots, farm land, commercial properties,
            and luxury villas across Tamil Nadu.
          </p>
          <div className="w-full">
            <SearchBar onSearch={handleSearch} />
          </div>
          <Link
            to="/sell"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition-colors hover:bg-emerald-500"
          >
            Sell your property
          </Link>
        </div>
      </section>

      <section className="bg-white px-3 pb-5 pt-3 sm:hidden">
        <SearchBar onSearch={handleSearch} />
        <button type="button" className="mt-3 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs text-gray-500">
          <Search className="h-3.5 w-3.5 text-gray-400" />
          <span className="shrink-0">Recent search</span>
          <span className="truncate rounded-md border border-gray-200 px-2 py-1 text-gray-700">Buy in Chennai South, serviced apartments</span>
        </button>
      </section>

      {/* Stats section */}
      <section className="hidden grid-cols-2 gap-4 bg-gray-50 px-4 py-8 sm:grid sm:gap-6 sm:px-6 sm:py-12 md:grid-cols-4 md:py-16">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">{stat.value}</div>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured properties */}
      <section className="px-4 pb-24 pt-8 sm:px-6 sm:py-12 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Explore the collection
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
                Recommended properties
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
              <p className="hidden max-w-md text-sm leading-6 text-gray-600 sm:block">
                Handpicked land opportunities for living, growing, and building
                what comes next.
              </p>
              <Link
                to="/properties"
                className="shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                View all
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Sell your property CTA */}
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-amber-100 via-lime-50 to-emerald-100 p-6 text-center sm:mt-14 sm:rounded-3xl sm:p-12">
            <Sparkles className="mx-auto h-8 w-8 text-amber-500 sm:h-10 sm:w-10" />
            <h3 className="mt-3 text-xl font-semibold text-gray-900 sm:mt-4 sm:text-2xl">
              Have land to sell?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-gray-600 mx-auto">
              Showcase your property to thousands of qualified buyers. List it
              for free and reach genuine buyers.
            </p>
            <Link
              to="/sell"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-emerald-600 via-lime-400 to-emerald-600 bg-[length:200%_100%] animate-[sell-shimmer_3s_linear_infinite] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 animate-[sell-glow_2s_ease-in-out_infinite]"
            >
              Sell your property
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

