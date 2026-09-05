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
    <Link to="/" className={`flex items-center gap-1.5 text-lg font-bold sm:gap-2 sm:text-xl ${overlay ? 'text-white' : 'text-gray-900'}`}>
      <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm text-white sm:h-8 sm:w-8 ${overlay ? 'bg-white/20 backdrop-blur-sm' : 'bg-gradient-to-br from-emerald-500 to-lime-400'}`}>
        🏡
      </span>
      <span className="inline text-sm sm:text-xl">Aathif Property</span>
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
      <header className={`z-40 ${homeOverlay ? 'absolute inset-x-0 top-0 bg-transparent shadow-none md:sticky md:top-0 md:bg-white/80 md:shadow-sm md:backdrop-blur' : 'sticky top-0 bg-white/80 shadow-sm backdrop-blur'}`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between py-2">
            <Logo overlay={homeOverlay} />

            {/* Desktop nav */}
            <nav className="hidden space-x-1 text-sm font-medium md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    item.highlight
                      ? `relative rounded-full px-5 py-2 font-semibold text-white transition-all duration-300 animate-[sell-glow_2s_ease-in-out_infinite] bg-[length:200%_100%] animate-[sell-shimmer_3s_linear_infinite] bg-gradient-to-r from-emerald-600 via-lime-400 to-emerald-600 hover:from-emerald-500 hover:via-lime-300 hover:to-emerald-500 hover:scale-105`
                      : `rounded-full px-4 py-2 transition-colors ${
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
              className={`rounded-full p-2 md:hidden ${homeOverlay ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className={`border-t md:hidden ${homeOverlay ? 'border-white/20 bg-black/70 backdrop-blur-md' : 'border-gray-200 bg-white'}`}>
            <nav className="flex flex-col gap-1 px-4 py-3 text-base font-medium">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    item.highlight
                      ? `relative rounded-full px-4 py-2 font-semibold text-white animate-[sell-glow_2s_ease-in-out_infinite] bg-[length:200%_100%] animate-[sell-shimmer_3s_linear_infinite] bg-gradient-to-r from-emerald-600 via-lime-400 to-emerald-600`
                      : `rounded-full px-4 py-2 ${
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
      <main className="flex-1 pb-16 md:pb-0">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-gray-200 bg-white px-2 py-2 text-[10px] text-gray-500 shadow-[0_-4px_18px_rgba(0,0,0,0.08)] md:hidden">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? 'font-semibold text-emerald-700' : ''}`}>
          <Home className="h-5 w-5" />
          Home
        </NavLink>
        <NavLink to="/properties" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? 'font-semibold text-emerald-700' : ''}`}>
          <Search className="h-5 w-5" />
          Search
        </NavLink>
        <NavLink to="/sell" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? 'font-semibold text-emerald-700' : ''}`}>
          <Upload className="h-5 w-5" />
          Sell
        </NavLink>
      </nav>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {/* Brand */}
            <div>
              <Logo />
              <p className="mt-4 text-sm text-gray-400">
                Your trusted partner for premium land and property investments across South India.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
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
              <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
              <ul className="space-y-3 text-sm">
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
              <h3 className="mb-4 text-sm font-semibold text-white">Newsletter</h3>
              <p className="mb-3 text-sm text-gray-400">
                Subscribe for property alerts and market insights.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:mt-12">
            © {new Date().getFullYear()} Aathif Property. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
