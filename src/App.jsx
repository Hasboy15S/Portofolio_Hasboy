// 1. TAMBAHKAN IMPORT INI
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

export default function App() {
  // State untuk mengontrol loading screen
  const [showLoader, setShowLoader] = useState(true)

  return (
    // 2. BUNGKUS DENGAN THEMEPROVIDER
    <ThemeProvider>
      <div className="bg-[#0f0f12] text-white min-h-screen relative overflow-x-hidden">
        
        {/* --- LOADING SCREEN --- */}
        {showLoader && (
          <LoadingScreen onComplete={() => setShowLoader(false)} />
        )}

        {/* Seluruh isi website dibungkus transisi fade-in */}
        <div className={`transition-opacity duration-1000 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          {/* Jangan lupa panggil Footer kalau sudah dibuat */}
          <Footer /> 
        </div>

      </div>
    </ThemeProvider>
  )
}