import { useEffect, useState } from 'react'
import {
  Building2,
  Home,
  Search,
  Sprout,
  TreePine,
  MapPin,
  Mic,
  LocateFixed,
  ChevronDown,
  X,
} from 'lucide-react'

const PURPOSES = [
  { label: 'Residential Plot', shortLabel: 'Residential', icon: Home },
  { label: 'Farm Land', shortLabel: 'Farm Land', icon: Sprout },
  { label: 'Commercial Land', shortLabel: 'Commercial', icon: Building2 },
  { label: 'Farmhouse', shortLabel: 'Farmhouse', icon: TreePine },
]

const CITIES = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai']

const LOCALITIES = [
  'OMR',
  'ECR',
  'Tambaram',
  'Kelambakkam',
  'Sholinganallur',
  'HSR Layout',
  'Andheri West',
]

function parseNaturalQuery(value) {
  const original = value.trim()
  const normalized = original.toLowerCase()
  const result = { keyword: original }

  const purposePatterns = [
    { pattern: /farm\s*land|farmland|agricultur/, value: 'Farm Land' },
    { pattern: /commercial|shop|office/, value: 'Commercial Land' },
    { pattern: /villa/, value: 'Villa' },
    { pattern: /house|home/, value: 'Residential Plot' },
    { pattern: /plot|residential/, value: 'Residential Plot' },
  ]
  const purposeMatch = purposePatterns.find(({ pattern }) => pattern.test(normalized))
  if (purposeMatch) {
    result.purpose = purposeMatch.value
  }

  const cityMatch = CITIES.find((cityName) => normalized.includes(cityName.toLowerCase()))
  if (cityMatch) {
    result.city = cityMatch
  }

  const localityMatch = LOCALITIES.find((localityName) => normalized.includes(localityName.toLowerCase()))
  const commonLocation = ['ecr', 'omr']
  const locationMatch = localityMatch || commonLocation.find((location) => normalized.includes(location))
  if (locationMatch) {
    result.location = locationMatch
  }

  const areaMatch = normalized.match(/(\d+(?:\.\d+)?)\s*(sq\.?\s*ft|sqft|acre|acres|cent|cents|ground|grounds)/)
  if (areaMatch) {
    result.area = `${areaMatch[1]} ${areaMatch[2].replace(/s$/, '')}`
  }

  result.keyword = original
    .replace(/farm\s*land|farmland|agricultural|commercial|shop|office|villa|house|home|plot|residential/gi, '')
    .replace(new RegExp(CITIES.join('|'), 'ig'), '')
    .replace(new RegExp([...LOCALITIES, ...commonLocation].join('|'), 'ig'), '')
    .replace(/\d+(?:\.\d+)?\s*(sq\.?\s*ft|sqft|acre|acres|cent|cents|ground|grounds)/gi, '')
    .replace(/\b(in|near|at|around|with|land|property|properties|available|for)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return result
}

export default function SearchBar({ onSearch, directMobile = false }) {
  const [purpose, setPurpose] = useState('Residential Plot')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState('')
  const [locality, setLocality] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [locationStatus, setLocationStatus] = useState('')
  const [budget, setBudget] = useState('')
  const [area, setArea] = useState('')
  const [unit, setUnit] = useState('Sq.ft')

  // Prevent background scrolling when mobile search is open
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
    event?.preventDefault()

    const parsedQuery = parseNaturalQuery(keyword)
    const selectedCity = CITIES.includes(selectedLocation) ? selectedLocation : ''
    const selectedLocality = selectedCity ? '' : selectedLocation
    const filters = {
      purpose: parsedQuery.purpose || purpose,
      keyword: parsedQuery.keyword,
      location: parsedQuery.location || '',
      area: parsedQuery.area || area,
      city: parsedQuery.city || selectedCity || city,
      locality: selectedLocality || locality,
      budget,
      unit,
    }

    onSearch?.(filters)
    setMobileOpen(false)
  }

  const handleFindLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Location unavailable')
      return
    }

    navigator.geolocation.getCurrentPosition(
      () => setLocationStatus('Location found'),
      () => setLocationStatus('Location unavailable'),
    )
  }

  return (
    <div className="w-full min-w-0">

      {/* =========================================================
          MOBILE SEARCH TRIGGER
      ========================================================= */}
      {directMobile ? (
        <form
          onSubmit={handleSubmit}
          aria-label="Search properties"
          className="flex h-12 w-full min-w-0 items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 text-left shadow-lg shadow-black/10"
        >
          <Search className="h-4 w-4 shrink-0 text-gray-700" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="House in Chennai or plots in ECR"
            aria-label="Search properties by phrase"
            className="min-w-0 flex-1 bg-transparent text-xs font-medium text-gray-900 outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={handleFindLocation}
            title="Find my location"
            aria-label="Find my location"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F4ED] text-[#C9A55C] hover:bg-[#E5E1D8]"
          >
            <LocateFixed className="h-4 w-4" />
          </button>
          {locationStatus && <span className="sr-only">{locationStatus}</span>}
        </form>
      ) : (
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="
          flex
          h-12
          w-full
          min-w-0
          items-center
          gap-2.5
          rounded-lg
          border
          border-gray-200
          bg-white
          px-3
          text-left
          shadow-lg
          shadow-black/10
          sm:hidden
        "
        aria-label="Open property search"
      >
        <Search className="h-4 w-4 shrink-0 text-gray-700" />
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-gray-900">Search properties</span>
          <span className="block truncate text-[11px] text-gray-400">Location, property type or keyword</span>
        </div>
        <span className="shrink-0 rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-600">Search</span>
      </button>
      )}

      {/* =========================================================
          MOBILE BACKDROP
      ========================================================= */}
      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/50
            backdrop-blur-[2px]
            sm:hidden
          "
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* =========================================================
          MAIN SEARCH CONTAINER
      ========================================================= */}
      <div
        className={`
          ${
            mobileOpen
              ? `
                fixed
                inset-x-5
                top-4
                z-50
                max-h-[calc(100dvh-32px)]
                w-auto
                max-w-[calc(100vw-40px)]
                overflow-hidden
                rounded-lg
              `
              : 'hidden'
          }

          bg-white
          shadow-2xl

          sm:relative
          sm:block
          sm:w-full
          sm:max-w-none
          sm:overflow-visible
          sm:rounded-2xl
        `}
      >

        {/* =======================================================
            MOBILE HEADER
        ======================================================= */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-gray-100
            px-3
            py-2
            sm:hidden
          "
        >
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Search Properties
            </h2>

            <p className="text-[11px] text-gray-400">
              Find land that matches your needs
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-gray-500
            "
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =======================================================
            SEARCH ROW
        ======================================================= */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            min-w-0
          "
        >

          {/* =====================================================
              DESKTOP SEARCH ROW
          ===================================================== */}
          <div className={directMobile ? 'hidden' : 'hidden min-w-0 items-stretch sm:flex'}>

            {/* PROPERTY TYPE */}
            <div
              className="
                flex
                w-[165px]
                shrink-0
                items-center
                border-r
                border-gray-200
                px-4
              "
            >
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  Property Type
                </span>

                <div className="relative mt-1">
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="
                      w-full
                      appearance-none
                      bg-transparent
                      pr-5
                      text-sm
                      font-medium
                      text-gray-800
                      outline-none
                    "
                  >
                    {PURPOSES.map(({ label }) => (
                      <option key={label} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-gray-500
                    "
                  />
                </div>
              </div>
            </div>

            {/* LOCATION SEARCH */}
            <div
              className="
                flex
                min-w-0
                flex-1
                items-center
                gap-2.5
                px-4
              "
            >
              <Search className="h-4 w-4 shrink-0 text-gray-700" />

              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search "Hyderabad"'
                aria-label="Search location or property"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  font-medium
                  text-gray-900
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {/* LOCATION */}
              <button
                type="button"
                title="Use current location"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F7F4ED]
                  text-[#C9A55C]
                  transition
                  hover:bg-[#E5E1D8]
                "
              >
                <LocateFixed className="h-4 w-4" />
              </button>

              {/* VOICE */}
              <button
                type="button"
                title="Voice search"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F7F4ED]
                  text-[#C9A55C]
                  transition
                  hover:bg-[#E5E1D8]
                "
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>

            {/* SEARCH BUTTON */}
            <button
              type="submit"
              className="
                m-1.5
                flex
                min-h-10
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-md
                bg-[#173F35]
                px-5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#0E2B25]
                active:scale-[0.98]
              "
            >
              <Search className="h-4 w-4" />
              Search
            </button>

          </div>

          {/* =====================================================
              MOBILE SEARCH CONTENT
          ===================================================== */}
          <div className="max-h-[calc(100dvh-112px)] overflow-y-auto p-2 sm:hidden">

            {/* UNIVERSAL SEARCH */}
            <div className="mb-2 flex h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5">
              <Search className="h-4 w-4 shrink-0 text-gray-700" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="House in Chennai or plots in ECR"
                aria-label="Search properties by phrase"
                className="min-w-0 flex-1 bg-transparent text-xs font-medium text-gray-900 outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={handleFindLocation}
                title="Find my location"
                aria-label="Find my location"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F4ED] text-[#C9A55C] hover:bg-[#E5E1D8]"
              >
                <LocateFixed className="h-4 w-4" />
              </button>
              {locationStatus && <span className="sr-only">{locationStatus}</span>}
            </div>

            {/* LOCATION SELECTOR */}
            <label className="mb-2 block rounded-lg border border-gray-200 bg-white p-2.5">
              <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                Select Location
              </span>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  aria-label="Select location"
                  className="w-full appearance-none bg-transparent pr-6 text-xs font-medium text-gray-900 outline-none"
                >
                  <option value="">Any city or locality</option>
                  <optgroup label="Cities">
                    {CITIES.map((item) => <option key={item}>{item}</option>)}
                  </optgroup>
                  <optgroup label="Localities">
                    {LOCALITIES.map((item) => <option key={item}>{item}</option>)}
                  </optgroup>
                  <option value="ECR">ECR</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </label>

            {/* PROPERTY TYPE */}
            <div className="mb-2 rounded-lg border border-gray-200 bg-white p-2.5">
              <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                Property Type
              </span>

              <div className="relative">
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full appearance-none bg-transparent pr-8 text-xs font-medium text-gray-900 outline-none"
                >
                  {PURPOSES.map(({ label }) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* BUDGET */}
            <label className="mb-2 block rounded-lg border border-gray-200 bg-white p-2.5">
              <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                Budget
              </span>

              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="
                    w-full
                    appearance-none
                    bg-transparent
                    pr-6
                    text-xs
                    font-medium
                    text-gray-900
                    outline-none
                  "
                >
                  <option value="">
                    Any budget
                  </option>

                  <option>
                    ₹10L – ₹25L
                  </option>

                  <option>
                    ₹25L – ₹50L
                  </option>

                  <option>
                    ₹50L – ₹1Cr
                  </option>

                  <option>
                    ₹1Cr+
                  </option>
                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-gray-500
                  "
                />
              </div>
            </label>

            {/* LAND AREA + UNIT */}
            <div className="mb-2 grid grid-cols-[minmax(0,1fr)_96px] gap-2">

              <label className="min-w-0 rounded-lg border border-gray-200 bg-white p-2.5">
                <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                  Land Area
                </span>

                <input
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter area"
                  aria-label="Land area"
                  className="
                    w-full
                    min-w-0
                    bg-transparent
                    text-xs
                    font-medium
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </label>

              <label className="min-w-0 rounded-lg border border-gray-200 bg-white p-2.5">
                <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                  Unit
                </span>

                <div className="relative">
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="
                      w-full
                      min-w-0
                      appearance-none
                      bg-transparent
                      pr-5
                      text-xs
                      font-medium
                      text-gray-900
                      outline-none
                    "
                  >
                    <option>Sq.ft</option>
                    <option>Cent</option>
                    <option>Ground</option>
                    <option>Acre</option>
                  </select>

                  <ChevronDown
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-gray-500
                    "
                  />
                </div>
              </label>

            </div>

            {/* MOBILE SEARCH BUTTON */}
            <button
              type="submit"
              className="
                flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#173F35]
                px-4
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-[#0E2B25]
                active:scale-[0.99]
              "
            >
              <Search className="h-4 w-4" />
              Search Properties
            </button>

          </div>

        </form>

        {/* =======================================================
            DESKTOP HIDDEN FILTER DATA
        ======================================================= */}
        <input type="hidden" name="purpose" value={purpose} />

      </div>
    </div>
  )
}