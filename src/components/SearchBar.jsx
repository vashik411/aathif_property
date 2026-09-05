import { useState, useEffect } from 'react'
import { Building2, Home, Search, Sprout, TreePine, X } from 'lucide-react'

const PURPOSES = [
  { label: 'Residential Plot', icon: Home },
  { label: 'Farm Land', icon: Sprout },
  { label: 'Commercial Land', icon: Building2 },
  { label: 'Farmhouse', icon: TreePine },
]

const FIELD_CLASS =
  'min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-3 text-left transition-colors focus-within:border-gray-400 focus-within:shadow-sm'

export default function SearchBar({ onSearch }) {
  const [purpose, setPurpose] = useState('Residential Plot')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Prevent body scroll when mobile search is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const filters = {
      purpose,
      keyword: data.get('keyword') || '',
      city: data.get('city') || '',
      locality: data.get('locality') || '',
      budget: data.get('budget') || '',
      area: data.get('area') || '',
      unit: data.get('unit') || '',
    }
    onSearch?.(filters)
    setMobileOpen(false)
    // Don't navigate — caller (e.g. Properties page) handles display
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-expanded={mobileOpen}
        aria-label="Open property search"
        className="flex h-11 w-full items-center gap-3 rounded-full bg-white px-4 text-left text-xs font-medium text-gray-500 shadow-2xl shadow-black/20 sm:hidden"
      >
        <Search className="h-4 w-4 text-gray-900" />
        <span className="flex-1">Search properties</span>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-500">Filters</span>
      </button>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <form
      onSubmit={handleSubmit}
      className={`${mobileOpen ? 'block' : 'hidden'} ${mobileOpen ? 'fixed inset-x-2 top-16 z-50' : ''} w-full rounded-[20px] bg-white/95 p-2 pt-[3.35rem] shadow-2xl shadow-black/20 backdrop-blur-md sm:relative sm:block sm:rounded-[28px] sm:p-4 sm:pt-16`}
      >
      <button
        type="button"
        onClick={() => setMobileOpen(false)}
        aria-label="Close property search"
        className="absolute right-3 top-2 z-10 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:hidden"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="absolute inset-x-2 top-2 grid grid-cols-2 gap-0.5 rounded-2xl border border-gray-200 bg-gray-100 p-0.5 sm:inset-x-4 sm:top-4 sm:grid-cols-4 sm:gap-1 sm:rounded-full sm:p-1">
        {PURPOSES.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => setPurpose(label)}
            className={`flex min-w-0 items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[9px] font-medium leading-tight transition-colors sm:gap-2 sm:rounded-full sm:px-3 sm:py-2 sm:text-xs ${purpose === label ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="truncate">{label}</span>
          </button>
        ))}
      </div>

      <input type="hidden" name="purpose" value={purpose} />

      {/* Keyword search field */}
      <label className={`${FIELD_CLASS} mb-1 sm:mb-2 lg:col-span-5`}>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Keyword</span>
        <div className="relative mt-0.5 sm:mt-1">
          <Search className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400 sm:h-4 sm:w-4" />
          <input
            type="text"
            name="keyword"
            aria-label="Search by keyword"
            placeholder="Search by name, description, or features..."
            className="w-full bg-transparent py-0.5 pl-5 text-xs font-medium text-gray-900 outline-none placeholder:text-gray-400 sm:pl-6 sm:text-sm"
          />
        </div>
      </label>

      <div className="grid grid-cols-2 gap-1 sm:gap-2 lg:grid-cols-[1fr_1fr_1fr_1fr_0.9fr_auto] lg:gap-0">
        <label className={`${FIELD_CLASS} rounded-lg px-2 py-1 sm:rounded-xl sm:px-4 sm:py-3`}>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Where</span>
          <select name="city" aria-label="City" className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-900 outline-none sm:mt-1 sm:text-sm" defaultValue="">
            <option value="">Choose city</option>
            <option>Chennai</option>
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
          </select>
        </label>

        <label className={`${FIELD_CLASS} rounded-lg px-2 py-1 sm:rounded-xl sm:px-4 sm:py-3`}>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Locality</span>
          <select name="locality" aria-label="Locality" className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-900 outline-none sm:mt-1 sm:text-sm" defaultValue="">
            <option value="">Any locality</option>
            <option>OMR</option>
            <option>ECR</option>
            <option>Tambaram</option>
            <option>HSR Layout</option>
            <option>Andheri West</option>
          </select>
        </label>

        <label className={`${FIELD_CLASS} rounded-lg px-2 py-1 sm:rounded-xl sm:px-4 sm:py-3`}>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Budget</span>
          <select name="budget" aria-label="Budget" className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-900 outline-none sm:mt-1 sm:text-sm" defaultValue="">
            <option value="">Any budget</option>
            <option>₹10L – ₹25L</option>
            <option>₹25L – ₹50L</option>
            <option>₹50L – ₹1Cr</option>
            <option>₹1Cr+</option>
          </select>
        </label>

        <label className={`${FIELD_CLASS} rounded-lg px-2 py-1 sm:rounded-xl sm:px-4 sm:py-3`}>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Land area</span>
          <input type="number" name="area" aria-label="Land area" min="0" placeholder="Enter area" className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-900 outline-none placeholder:text-gray-400 sm:mt-1 sm:text-sm" />
        </label>

        <label className={`${FIELD_CLASS} rounded-lg px-2 py-1 sm:rounded-xl sm:px-4 sm:py-3`}>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.12em]">Unit</span>
          <select name="unit" aria-label="Land area unit" className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-900 outline-none sm:mt-1 sm:text-sm" defaultValue="Sq.ft">
            <option>Sq.ft</option>
            <option>Cent</option>
            <option>Ground</option>
            <option>Acre</option>
          </select>
        </label>

        <button type="submit" aria-label="Search Properties" className="col-span-2 flex min-h-9 items-center justify-center gap-2 rounded-lg bg-[#df482b] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#c83d24] sm:min-h-[58px] sm:rounded-xl sm:px-5 sm:text-sm lg:col-span-1">
          <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span>Search</span>
        </button>
      </div>
      </form>
    </div>
  )
}
