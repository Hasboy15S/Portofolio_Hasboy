import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Perjalanan', href: '#experience' },
  { label: 'Pendidikan', href: '#education' },
  { label: 'Karya',   href: '#portfolio' },
  { label: 'Kontak',  href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  const menuRef = useRef()
  const btnRef  = useRef()

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY
      const sh = document.documentElement.scrollHeight - window.innerHeight
      setProgress(sh > 0 ? Math.min(100, (st / sh) * 100) : 0)
      setScrolled(st > 40)

      let current = NAV_LINKS[0].href.replace('#', '')
      NAV_LINKS.forEach(({ href }) => {
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu kalau klik di luar drawer & tombol hamburger
  useEffect(() => {
    const handler = (e) => {
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
      {/* Progress bar scroll */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 bg-[#2563EB] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      <nav
        aria-label="Main navigation"
        className={`
          fixed z-40 transition-all duration-300 w-full
          ${scrolled
            ? 'top-0 left-0 right-0 border-b border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-md shadow-sm'
            : 'top-0 left-0 right-0 border-b border-transparent bg-transparent'}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">

          {/* Logo teks */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="text-2xl font-bold italic tracking-tight text-slate-900 dark:text-white no-underline select-none"
          >
            Hataku
          </a>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={`
                      text-[15px] font-semibold no-underline transition-colors duration-200
                      ${isActive ? 'text-[#2563EB] dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}
                    `}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold no-underline shadow-lg shadow-blue-600/20 active:scale-95 transition-all duration-300"
            >
              Get in touch
            </a>

            <button
              ref={btnRef}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur"
            >
              <span className={`block h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
              <span className={`block h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
              <span className={`block h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
            </button>
          </div>
        </div>

        {/* Drawer mobile */}
        <div
          ref={menuRef}
          className={`
            md:hidden overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-lg
            ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}
          `}
        >
          <ul className="flex flex-col p-4 gap-2 list-none">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={`
                      block px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-colors duration-200
                      ${isActive ? 'bg-blue-50 text-[#2563EB] dark:bg-blue-900/20 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'}
                    `}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="block text-center px-4 py-3 rounded-full bg-[#2563EB] text-white text-sm font-semibold no-underline"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}