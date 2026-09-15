import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * SmoothScroll — Lenis untuk scrolling halus.
 * Dilewati ketika user meminta reduced-motion (performa & aksesibilitas).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })

    let animId
    function raf(time) {
      lenis.raf(time)
      animId = requestAnimationFrame(raf)
    }
    animId = requestAnimationFrame(raf)

    // Patch anchor scrollTo agar Lenis tetap yang kontrol
    const origScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function (options) {
      if (options && options.behavior === 'smooth') {
        lenis.scrollTo(this, { offset: -72, duration: 1.2 })
      } else {
        origScrollIntoView.call(this, options)
      }
    }

    return () => {
      cancelAnimationFrame(animId)
      lenis.destroy()
      Element.prototype.scrollIntoView = origScrollIntoView
    }
  }, [])

  return null
}