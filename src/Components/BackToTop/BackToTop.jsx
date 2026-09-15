import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Kembali ke atas"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-ink hover:bg-accent
        text-white
        shadow-xl
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-1 active:scale-90
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}