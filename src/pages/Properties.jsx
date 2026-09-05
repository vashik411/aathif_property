import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, Grid, List } from 'lucide-react'
import {
  filterProperties,
  BUDGET_OPTIONS,
  FILTER_OPTIONS,
} from '../data/properties'
import PropertyCard from '../components/PropertyCard'

const SELECT_CLASS =
  'block w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-black'

export default function Properties() {
  const [searchParams] = useSearchParams()

  const initialFilters = {
    purpose: searchParams.get('purpose') || '',
    keyword: searchParams.get('keyword') || '',
    city: searchParams.get('city') || '',
    locality: searchParams.get('locality') || '',
    budget: searchParams.get('budget') || '',
    facing: searchParams.get('facing') || '',
    search: searchParams.get('search') || '',
  }

  const [filters, setFilters] = useState(initialFilters)
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  const updateFilter = (field) => (value) => {
    setFilters((f) => ({ ...f, [field]: value }))
  }

  const clearFilters = () => setFilters(initialFilters)

  const activeFilterCount = Object.values(filters).filter(
    (v) => v !== '' && v !== 'Purpose' && v !== 'City'
  ).length

  const results = useMemo(() => {
    const urlBudget = filters.budget
      ? BUDGET_OPTIONS.find((b) => b.label === filters.budget)
      : null
    return filterProperties({
      purpose: filters.purpose,
      keyword: filters.keyword,
      city: filters.city,
      facing: filters.facing,
      budget: urlBudget,
      search: filters.search,
    })
  }, [filters])

  return (
    <div className="w-full bg-[#f4f1ea] pb-12">
      {/* Page header */}
      <section className="bg-gray-900 px-4 py-12 text-center text-white sm:px-6 sm:py-16 md:px-12 md:py-20">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Browse Properties
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-300 mx-auto sm:mt-4 sm:text-lg">
          Search from our curated collection of residential plots, farm land,
          commercial properties, and luxury villas.
        </p>
      </section>

      {/* Search form */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5"
        >
          <input
            type="text"
            placeholder="Search by keyword..."
            value={filters.keyword}
            onChange={(e) => updateFilter('keyword')(e.target.value)}
            className={SELECT_CLASS}
          />
          <select
            value={filters.purpose}
            onChange={(e) => updateFilter('purpose')(e.target.value)}
            className={SELECT_CLASS}
          >
            <option value="">All Categories</option>
            {FILTER_OPTIONS.purposes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <select
            value={filters.city}
            onChange={(e) => updateFilter('city')(e.target.value)}
            className={SELECT_CLASS}
          >
            <option value="">All Cities</option>
            {FILTER_OPTIONS.cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={filters.budget}
            onChange={(e) => updateFilter('budget')(e.target.value)}
            className={SELECT_CLASS}
          >
            <option value="">Any Budget</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b.label} value={b.label}>{b.label}</option>
            ))}
          </select>
          <select
            value={filters.facing}
            onChange={(e) => updateFilter('facing')(e.target.value)}
            className={SELECT_CLASS}
          >
            <option value="">Any Facing</option>
            {FILTER_OPTIONS.facings.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </form>

        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowFilters(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <Filter className="h-4 w-4" />
            Advanced filters
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`rounded-lg p-1.5 ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-gray-100'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`rounded-lg p-1.5 ${viewMode === 'list' ? 'bg-gray-200' : 'bg-gray-100'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-3 text-sm text-gray-600 hover:text-gray-900"
          >
            Clear all filters
          </button>
        )}
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {results.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-gray-500">
              No properties match your current filters.
            </p>
          </div>
        ) : (
          <p className="mb-6 text-sm text-gray-600">
            Showing {results.length} propert
            {results.length === 1 ? 'y' : 'ies'}
          </p>
        )}

        {viewMode === 'grid' && results.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {viewMode === 'list' && results.length > 0 && (
          <div className="space-y-4">
            {results.map((property) => (
              <ListCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function ListCard({ property }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 sm:flex-row sm:gap-4 sm:p-4">
      <img
        src={property.images?.[0]}
        alt={property.title}
        className="h-28 w-full rounded-xl object-cover sm:h-auto sm:w-40 md:w-48"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
          {property.title}
        </h3>
        <p className="text-xs text-gray-500 sm:text-sm">
          {property.location.locality}, {property.location.city}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-xs font-medium text-gray-800 sm:gap-2 sm:text-sm">
          <span className="rounded-lg bg-gray-100 px-2 py-0.5 sm:px-2.5 sm:py-1">{property.price}</span>
          <span className="rounded-lg bg-gray-100 px-2 py-0.5 sm:px-2.5 sm:py-1">{property.area}</span>
          <span className="rounded-lg bg-gray-100 px-2 py-0.5 sm:px-2.5 sm:py-1">{property.facing}</span>
        </div>
        <p className="mt-2 text-xs text-gray-600 line-clamp-2 sm:text-sm">
          {property.description}
        </p>
      </div>
      <div className="flex shrink-0 items-start border-t border-gray-200 pt-2 sm:items-center sm:border-0 sm:border-l sm:pt-0 sm:pl-4 sm:text-right">
        <span className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm">
          {property.purpose}
        </span>
      </div>
    </article>
  )
}
