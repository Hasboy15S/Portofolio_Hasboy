import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [active, setActive]     = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const menuRef = useRef()
  const btnRef = useRef() // 1. Tambahin ref baru buat tombolnya

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY
      const sh = document.documentElement.scrollHeight - window.innerHeight
      setProgress(sh > 0 ? (st / sh) * 100 : 0)
      setScrolled(st > 60)

      let current = NAV_LINKS[0].href.replace('#', '')
      NAV_LINKS.forEach(({ href }) => {
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 2. Update logika klik di luarnya
  useEffect(() => {
    const handler = (e) => {
      // Hanya tutup menu JIKA klik BUKAN di dalam menu DAN BUKAN di tombol hamburger
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-300"
        style={{ width: `${progress}%`, background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }} 
      />

      <nav
        className={`
          fixed z-40 transition-all duration-500 ease-in-out backdrop-blur-xl border-white/25
          ${scrolled
            ? `top-3 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 rounded-2xl border shadow-2xl ${
                dark 
                  ? 'border-white/20 bg-black/40 shadow-black/40' 
                  : 'border-cyan-200/60 bg-cyan-50/70 shadow-cyan-900/10'
              }`
            : `top-0 left-0 right-0 rounded-none border-b ${
                dark 
                  ? 'border-white/[0.06] bg-black/30' 
                  : 'border-cyan-200/60 bg-cyan-50/70'
              }`
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 h-[56px] flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-1.5 shrink-0">
            <img src="/logo.svg" alt="Logo" className="w-8 h-5 rounded-full" />
            <span className={`text-[17px] font-bold tracking-tight select-none ${dark ? 'text-white' : 'text-slate-800'}`}>
              HAS<span className="text-cyan-500">BOY</span>
            </span>
          </div>

          {/* Center links */}
          <ul className="hidden md:flex items-center list-none flex-1 justify-center gap-2">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={id} className="relative group">
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={`
                      relative px-4 py-2 text-[15px] font-semibold tracking-wide no-underline transition-all duration-300
                      ${isActive 
                        ? (dark ? 'text-white' : 'text-slate-900') 
                        : (dark ? 'text-white/40 hover:text-white/90' : 'text-slate-400 hover:text-slate-800')
                      }
                    `}
                  >
                    {label}
                    <span className={`
                      absolute -bottom-0 left-0 h-[3px] bg-cyan-500 rounded-full transition-all duration-300 ease-in-out
                      ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'}
                    `} 
                    style={{ boxShadow: isActive ? '0 0 8px #06b6d4' : 'none' }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className={`
                hidden sm:flex relative items-center w-[52px] h-7 rounded-full transition-all duration-300 mr-3 outline-none overflow-hidden
                ${dark ? 'bg-[#151515] border border-cyan-500/50 shadow-inner shadow-black' : 'bg-cyan-100 border border-cyan-200 shadow-inner'}
              `}
            >
              <span className={`absolute left-1.5 text-[11px] transition-opacity duration-300 ${dark ? 'opacity-0' : 'opacity-100'}`}>☀️</span>
              <span className={`absolute right-1.5 text-[11px] transition-opacity duration-300 ${dark ? 'opacity-100' : 'opacity-0'}`}>🌙</span>
              <span
                className={`
                  absolute w-5 h-5 rounded-full bg-white transition-transform duration-300 z-10
                  ${dark ? 'translate-x-[26px] shadow-[0_0_8px_#06b6d4]' : 'translate-x-1 shadow-md'}
                `}
              />
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-white text-[14px] font-bold tracking-wide no-underline transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Contact
            </a>

            {/* 3. Masukkan btnRef ke dalam tombol hamburger ini */}
            <button
              ref={btnRef} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px] ml-1 z-50 relative"
            >
              <span className={`block h-[2px] transition-all duration-300 ${dark ? 'bg-white/70' : 'bg-slate-800'} ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
              <span className={`block h-[2px] transition-all duration-300 ${dark ? 'bg-white/70' : 'bg-slate-800'} ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block h-[2px] transition-all duration-300 ${dark ? 'bg-white/70' : 'bg-slate-800'} ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          ref={menuRef}
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-xl
            ${scrolled ? 'rounded-b-2xl' : ''}
            ${dark 
              ? (scrolled ? 'bg-black/80' : 'bg-black/60') 
              : 'bg-cyan-50/90'
            }
            border-t ${dark ? 'border-white/[0.06]' : 'border-cyan-200/60'}
            ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <ul className="flex flex-col px-4 py-4 gap-1 list-none">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={`
                      relative block px-4 py-3 rounded-xl text-[15px] font-bold no-underline transition-all duration-300
                      ${isActive 
                        ? (dark ? 'text-white bg-cyan-500/10' : 'text-slate-900 bg-cyan-500/10') 
                        : (dark ? 'text-white/50' : 'text-slate-500')
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-cyan-500 rounded-r-full" />
                    )}
                    {label}
                  </a>
                </li>
              )
            })}
            
            <div className={`my-3 h-[1px] w-full ${dark ? 'bg-white/10' : 'bg-cyan-900/10'}`} />

            <li className="flex items-center justify-between px-2 pt-1 pb-2">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
                className={`
                  relative flex items-center w-[52px] h-7 rounded-full transition-all duration-300 outline-none overflow-hidden
                  ${dark ? 'bg-[#151515] border border-cyan-500/50 shadow-inner shadow-black' : 'bg-cyan-100 border border-cyan-200 shadow-inner'}
                `}
              >
                <span className={`absolute left-1.5 text-[11px] transition-opacity duration-300 ${dark ? 'opacity-0' : 'opacity-100'}`}>☀️</span>
                <span className={`absolute right-1.5 text-[11px] transition-opacity duration-300 ${dark ? 'opacity-100' : 'opacity-0'}`}>🌙</span>
                <span
                  className={`
                    absolute w-5 h-5 rounded-full bg-white transition-transform duration-300 z-10
                    ${dark ? 'translate-x-[26px] shadow-[0_0_8px_#06b6d4]' : 'translate-x-1 shadow-md'}
                  `}
                />
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="px-6 py-2 rounded-full bg-cyan-500 text-white text-[14px] font-bold no-underline active:scale-95 transition-transform"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}