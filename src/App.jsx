import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar      from './Components/Navbar/Navbar'
import Hero        from './Components/Hero/Hero'
import About       from './Components/About/About'
import Experience  from './Components/Experience/Experience'
import Portfolio   from './Components/Portfolio/Portfolio'
import Contact     from './Components/Contact/Contact'
import Footer      from './Components/Footer/Footer'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
import './index.css'
import { AnimatePresence, motion } from 'framer-motion' 
import GhostCursor from './components/GhostCursor'

export default function App() {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <ThemeProvider>
      <div className="bg-[#0f0f12] text-white min-h-screen overflow-x-hidden relative">

        {/* AnimatePresence mengawasi elemen yang keluar (exit) */}
        <AnimatePresence>
          {showLoader && (
            <LoadingScreen key="loader" onComplete={() => setShowLoader(false)} />
          )}
        </AnimatePresence>

        {/* Website utama TETAP di-render sejak awal! 
          Hanya saja kita sembunyikan dengan opacity: 0 sampai LoadingScreen selesai.
          Ini PENTING agar Hero sudah ada di DOM dan siap "menangkap" teks yang terbang.
        */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showLoader ? 0 : 1 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-0"
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer /> 
        </motion.div>
        
      </div>
    </ThemeProvider>
  )
}