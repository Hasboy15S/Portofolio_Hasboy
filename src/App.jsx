import { useState, useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Navbar        from './Components/Navbar/Navbar'
import Hero          from './Components/Hero/Hero'
import About         from './Components/About/About'
import Experience    from './Components/Experience/Experience'
import Education     from './Components/Education/Education'
import Portfolio     from './Components/Portfolio/Portfolio'
import Contact       from './Components/Contact/Contact'
import Footer        from './Components/Footer/Footer'
import BackToTop     from './Components/BackToTop/BackToTop'
import SmoothScroll  from './Components/SmoothScroll/SmoothScroll'
import './index.css'

export default function App() {
  const heroRef = useRef(null)
  const animationRef = useRef(null)
  const [heroHeight, setHeroHeight] = useState(800)

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start start", "end start"]
  })

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight)
      }
    }
    // Update on mount and resize
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <>
      {/* Lenis silky smooth scroll — renders nothing visually */}
      <SmoothScroll />

      <div className="bg-transparent text-slate-900 dark:text-white min-h-screen relative transition-colors duration-300">
        <Navbar />
        
        <main className="relative z-10">
          {/* Hero Layer (Normal flow, peels off when scrolled) */}
          <div ref={heroRef} className="relative z-20 bg-white dark:bg-[#0B1220]">
            <Hero />
          </div>

          {/* Absolute Peel Track for About */}
          <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
            {/* Spacer: precisely matches Hero height so About sticks behind it */}
            <div style={{ height: heroHeight }} />
            
            {/* Spacer: Animation Phase (20vh extra stickiness for the split reveal) */}
            <div ref={animationRef} className="w-full h-[20vh]" />
            
            {/* Spacer: matches About height to give the track the correct total length */}
            <div className="opacity-0">
              <About />
            </div>
            
            {/* The Sticky Element */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="sticky top-0 pointer-events-auto bg-slate-50 dark:bg-[#111827] overflow-hidden">
                <About id="about-bg" scrollProgress={scrollYProgress} />
              </div>
            </div>
          </div>

          {/* Real Spacer for document flow (allows user to scroll past About AND Animation phase) */}
          <div className="relative z-0 opacity-0 pointer-events-none mt-8">
            <div className="w-full h-[20vh]" />
            <About id="about" />
          </div>

          {/* Sisa konten (Mengikuti About secara normal di bawahnya) */}
          <div className="relative z-30 bg-white dark:bg-[#0B1220]">
            <Experience />
            <Education />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        </main>

        {/* Floating UI — always on top */}
        <BackToTop />
      </div>
    </>
  )
}