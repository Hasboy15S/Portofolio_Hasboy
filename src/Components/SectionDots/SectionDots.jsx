import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'portfolio',  label: 'Portfolio' },
  { id: 'contact',    label: 'Contact' },
]

/**
 * SectionDots — indikator posisi scroll di kanan layar.
 * Muncul setelah melewati Hero. Dot aktif = section saat ini.
 */
export default function SectionDots() {
  const [active, setActive]   = useState('home')
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setVisible(scrollY > 100)

      let current = SECTIONS[0].id
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'
      }`}
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <div key={id} className="relative flex items-center justify-end group">
            {/* Tooltip label — muncul saat hover */}
            <span
              className={`
                absolute right-full mr-3 whitespace-nowrap
                text-[11px] font-bold tracking-wide
                px-2.5 py-1 rounded-lg
                bg-gray-900/90 dark:bg-black/80 text-cyan-400
                border border-cyan-500/30
                backdrop-blur-sm
                transition-all duration-200
                pointer-events-none
                ${hovered === id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
              `}
            >
              {label}
            </span>

            {/* Dot */}
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Go to ${label}`}
              className={`
                relative rounded-full transition-all duration-300
                ${isActive
                  ? 'w-2.5 h-7 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  : 'w-2 h-2 bg-gray-400/40 dark:bg-white/20 hover:bg-cyan-400/60 hover:scale-125'
                }
              `}
            />
          </div>
        )
      })}
    </div>
  )
}
