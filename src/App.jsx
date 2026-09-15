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
  return (
    <>
      {/* Lenis silky smooth scroll — renders nothing visually */}
      <SmoothScroll />

      <div className="bg-white dark:bg-[#0B1220] text-slate-900 dark:text-white min-h-screen overflow-x-hidden relative transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Portfolio />
          <Contact />
        </main>
        <Footer />

        {/* Floating UI — always on top */}
        <BackToTop />
      </div>
    </>
  )
}