import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Home, Menu, Search, Upload, X, Phone, Mail, MapPin } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Sell', to: '/sell', highlight: true },
]

function Logo({ overlay = false }) {
  return (
    <Link to="/" className={`flex items-center gap-1 text-lg font-bold sm:gap-1.5 sm:text-lg ${overlay ? 'text-gray-900 sm:text-white' : 'text-gray-900'}`}>
      <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-[#173F35] text-xs text-white sm:h-7 sm:w-7 ${overlay ? 'sm:bg-white/20 sm:backdrop-blur-sm' : ''}`}>
        🏡
      </span>
      <span className="inline text-sm sm:text-lg">Aathif Property</span>
    </Link>
  )
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const homeOverlay = pathname === '/'
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className={`z-40 ${homeOverlay ? 'sticky top-0 bg-white/80 shadow-sm backdrop-blur sm:absolute sm:inset-x-0 sm:bg-transparent sm:shadow-none md:sticky md:top-0 md:bg-white/80 md:shadow-sm md:backdrop-blur' : 'sticky top-0 bg-white/80 shadow-sm backdrop-blur'}`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center justify-between py-1">
            <Logo overlay={homeOverlay} />

            {/* Desktop nav */}
            <nav className="hidden space-x-1 text-sm font-medium md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    item.highlight
                      ? `relative rounded-full bg-[#173F35] px-3.5 py-1 font-semibold text-white transition-all duration-300 animate-[sell-glow_2s_ease-in-out_infinite] hover:bg-[#0E2B25] hover:scale-105`
                      : `rounded-full px-2.5 py-1 transition-colors ${
                          isActive
                            ? 'bg-black text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-full p-1.5 md:hidden ${homeOverlay ? 'text-gray-700 hover:bg-gray-100 sm:text-white sm:hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className={`border-t md:hidden ${homeOverlay ? 'border-gray-200 bg-white sm:border-white/20 sm:bg-black/70 sm:backdrop-blur-md' : 'border-gray-200 bg-white'}`}>
            <nav className="flex flex-col gap-0.5 px-3 py-1.5 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    item.highlight
                      ? `relative rounded-full bg-[#173F35] px-3 py-1 font-semibold text-white animate-[sell-glow_2s_ease-in-out_infinite] hover:bg-[#0E2B25]`
                      : `rounded-full px-3 py-1 ${
                          isActive
                            ? 'bg-black text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pb-16 xl:pb-0">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-[60] flex h-14 items-center justify-around border-t border-[#E5E1D8] bg-white px-3 pb-[env(safe-area-inset-bottom)] text-xs text-[#69756F] shadow-[0_-4px_18px_rgba(14,43,37,0.12)] xl:hidden">
        <NavLink to="/" className={({ isActive }) => `flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Home className="h-4 w-4" />
          Home
        </NavLink>
        <NavLink to="/properties" className={({ isActive }) => `flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Search className="h-4 w-4" />
          Search
        </NavLink>
        <NavLink to="/sell" className={({ isActive }) => `flex min-w-14 flex-col items-center gap-0.5 rounded-md px-2 py-1 ${isActive ? 'font-semibold text-[#173F35]' : ''}`}>
          <Upload className="h-4 w-4" />
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
                  <li key={item.to}>
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

            {/* Newsletter */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">Newsletter</h3>
              <p className="mb-1.5 text-sm text-gray-400">
                Subscribe for property alerts and market insights.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-white placeholder-gray-500 outline-none focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500"
                >
                  Send
                </button>
              </form>
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
