import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4'

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-8">
      <a
        href="#"
        className="text-sm font-medium text-[#010101] transition-colors hover:text-[#010101]/70 lg:text-white/80 lg:hover:text-white"
      >
        Categories
      </a>
      <a
        href="#"
        className="text-sm font-medium text-[#010101] transition-colors hover:text-[#010101]/70 lg:text-white/80 lg:hover:text-white"
      >
        About Us
      </a>
      <a
        href="#"
        className="relative rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#010101] shadow-lg shadow-black/10 transition-opacity hover:opacity-90"
      >
        Post Property
        <span className="absolute -right-3 -top-2.5 animate-banner-float rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-md">
          Free
        </span>
      </a>
    </nav>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#010101] lg:fill-white"
      >
        <path d="M 128 128 C 128 198.692 70.692 256 0 256 C 0 185.308 57.308 128 128 128 Z M 128 128 C 198.692 128 256 185.308 256 256 C 185.308 256 128 198.692 128 128 Z M 0 0 C 70.692 0 128 57.308 128 128 C 57.308 128 0 70.692 0 0 Z M 256 0 C 256 70.692 198.692 128 128 128 C 128 57.308 185.308 0 256 0 Z" />
      </svg>
      <span className="text-lg font-semibold text-[#010101] lg:text-white">
        properties
      </span>
    </div>
  )
}

function PropertySearch({ visible }) {
  const [activeTab, setActiveTab] = useState('buy')

  return (
    <div
      className={`w-full max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
      }`}
    >
      <div className="rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 p-[2px] shadow-2xl shadow-green-500/30">
        <div className="flex items-center gap-1.5 rounded-full bg-white p-1.5 sm:gap-2 sm:p-2">
          <div className="flex shrink-0 items-center gap-0.5 rounded-full bg-gray-100 p-0.5 sm:gap-1 sm:p-1">
            <button
              onClick={() => setActiveTab('buy')}
              className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                activeTab === 'buy'
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-50'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                activeTab === 'sell'
                  ? 'bg-green-600 text-white'
                  : 'text-green-700 hover:bg-green-50'
              }`}
            >
              Sell Property
            </button>
          </div>
          <input
            type="text"
            placeholder="Search by city, locality or project"
            className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-xs text-gray-900 placeholder-gray-400 outline-none sm:px-3 sm:py-2 sm:text-sm"
          />
          <button
            aria-label="Search"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white transition-opacity hover:opacity-90 sm:h-10 sm:w-10"
          >
            <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) video.playbackRate = 1.5

    const timer = setTimeout(() => {
      setIntroDone(true)
      videoRef.current?.pause()
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        onEnded={() => setIntroDone(true)}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
          <Logo />
          <DesktopNav />
        </header>

        {/* Search bar — top middle */}
        <div className="flex justify-center px-5 pt-6 sm:pt-8 lg:px-12">
          <PropertySearch visible={introDone} />
        </div>
      </div>
    </section>
  )
}