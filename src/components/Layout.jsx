import { NavLink, Link, useLocation } from 'react-router-dom'
import { Building2, Home, Info, Mail, MapPin, Phone, Search, Tag, Upload } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Buy', to: '/properties', Icon: Home },
  { label: 'Sell', to: '/sell', Icon: Tag },
  { label: 'Properties', to: '/properties', Icon: Building2 },
  { label: 'About', to: '/about', Icon: Info },
  { label: 'Contact', to: '/contact', Icon: Phone },
]

function BrandMark() {
  return (
    <svg
      viewBox="0 0 150 110"
      aria-hidden="true"
      className="h-11 w-[68px] shrink-0 sm:h-16 sm:w-[100px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="55%" stopColor="#087443" />
          <stop offset="100%" stopColor="#58B83A" />
        </linearGradient>

        <linearGradient id="brandGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8B34A" />
          <stop offset="100%" stopColor="#B8862B" />
        </linearGradient>
      </defs>

      {/* HOUSE ROOF */}
      <path
        d="M18 55 L62 14 L106 55 L91 48 L62 24 L33 50 Z"
        fill="url(#brandGreen)"
      />

      {/* CHIMNEY */}
      <path
        d="M70 30 V15 H83 V40 Z"
        fill="#064E3B"
      />

      {/* HOUSE BODY */}
      <rect
        x="36"
        y="48"
        width="52"
        height="29"
        fill="white"
      />

      {/* GOLD WINDOWS - clearly inside house */}
      <g fill="url(#brandGold)">
        <rect x="46" y="52" width="9" height="9" rx="1" />
        <rect x="60" y="52" width="9" height="9" rx="1" />
        <rect x="46" y="65" width="9" height="9" rx="1" />
        <rect x="60" y="65" width="9" height="9" rx="1" />
      </g>

      {/* HOUSE BASE */}
      <path
        d="M33 77 H92"
        stroke="#064E3B"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* GREEN LAND — BELOW THE HOUSE */}
      <path
        d="
          M6 82
          C29 73 48 73 68 80
          C90 88 113 84 143 67
          C132 87 113 97 91 100
          C61 103 31 94 6 82
          Z
        "
        fill="url(#brandGreen)"
      />

      {/* LAND HIGHLIGHT */}
      <path
        d="
          M11 82
          C31 76 48 77 68 83
          C89 90 112 86 136 72
        "
        fill="none"
        stroke="#A8D96A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
function Logo() {
  return (
    <Link to="/" className="flex min-w-0 max-w-[calc(100%-110px)] items-center gap-1 sm:max-w-none sm:gap-2">
      <BrandMark />
      <Wordmark />
    </Link>
  )
}

function Wordmark() {
  return (
    <span className="brand-wordmark flex min-w-0 items-baseline gap-1 whitespace-nowrap leading-none sm:gap-1.5">
      <span className="brand-aathif text-[25px] font-extrabold text-[#064E3B] sm:text-[44px]">Aathif</span>
      <span className="brand-property truncate text-[17px] font-semibold text-[#C89B3C] sm:text-[30px]">Property</span>
    </span>
  )
}

export default function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className={`${pathname === '/' ? 'relative' : 'sticky top-0'} z-40 border-b border-[#E5E1D8] bg-white/95 shadow-sm backdrop-blur`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex min-h-14 items-center justify-between gap-1 py-1 sm:min-h-16 sm:gap-3 sm:py-1.5">
            <Link to="/" className="flex min-w-0 max-w-[calc(100%-110px)] items-center">
              <Wordmark />
            </Link>
            <Link
              to="/sell"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#064E3B] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#064E3B] shadow-sm transition-colors hover:bg-[#F7F4ED] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 sm:gap-1.5 sm:px-3.5 sm:text-xs"
            >
              Post Property
              <span className="animate-[sell-glow_2s_ease-in-out_infinite] rounded-full bg-[#047857] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                FREE
              </span>
            </Link>
          </div>
        </div>

        {pathname === '/' && (
          <nav aria-label="Primary navigation" className="mx-auto max-w-7xl overflow-x-auto px-2 sm:px-6 lg:px-8">
            <div className="flex min-w-max items-stretch justify-between gap-1 sm:justify-start sm:gap-8">
              {NAV_ITEMS.map(({ label, to, Icon }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    `group flex min-w-[60px] flex-1 flex-col items-center gap-0.5 border-b-2 px-2 py-1.5 text-[10px] font-medium transition-colors sm:min-w-16 sm:flex-none sm:px-3 sm:text-xs ${
                      isActive
                        ? 'border-[#2C78B8] text-[#1D6194]'
                        : 'border-transparent text-[#52636D] hover:border-[#9BC5E1] hover:text-[#1D6194]'
                    }`
                  }
                >
                  <Icon className="h-5 w-5 text-[#2C78B8] transition-transform duration-200 group-hover:animate-[nav-icon-pop_450ms_ease-out] sm:h-[22px] sm:w-[22px]" aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pb-16 xl:pb-0">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-[60] flex h-14 items-center justify-around border-t border-[#E5E1D8] bg-white px-3 pb-[env(safe-area-inset-bottom)] text-xs text-[#69756F] shadow-[0_-4px_18px_rgba(14,43,37,0.12)] xl:hidden">
        <NavLink to="/" className={({ isActive }) => `group flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Home className="h-5 w-5 text-[#2C78B8] transition-transform duration-200 group-hover:animate-[nav-icon-pop_450ms_ease-out]" />
          Home
        </NavLink>
        <NavLink to="/properties" className={({ isActive }) => `group flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Search className="h-5 w-5 text-[#2C78B8] transition-transform duration-200 group-hover:animate-[nav-icon-pop_450ms_ease-out]" />
          Search
        </NavLink>
        <NavLink to="/sell" className={({ isActive }) => `group flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Upload className="h-5 w-5 text-[#2C78B8] transition-transform duration-200 group-hover:animate-[nav-icon-pop_450ms_ease-out]" />
          Sell
        </NavLink>
      </nav>

      {/* Footer */}
      <footer className="bg-[#0E2B25] text-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Logo />
              <p className="mt-2 text-sm text-gray-400">
                Your trusted partner for premium land and property investments across South India.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">Quick Links</h3>
              <ul className="space-y-1.5 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <NavLink to={item.to} className="text-gray-400 hover:text-white">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">Contact</h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>info@aathifproperty.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-500 sm:mt-8">
            © {new Date().getFullYear()} Aathif Property. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
