import { useState, useEffect } from 'react'
import BlurText from '../ReactBits/BlurText' 
import DecryptedText from '../ReactBits/DecryptedText'
import { motion } from 'motion/react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  // HAPUS fase 'fadeout', kita cuma butuh 3 fase sekarang
  const [phase, setPhase] = useState('loading') 

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => {
        const nextProgress = progress + Math.floor(Math.random() * 8) + 2
        setProgress(nextProgress > 100 ? 100 : nextProgress)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => setPhase('welcome'), 400)
    }
  }, [progress])

  useEffect(() => {
    if (phase === 'welcome') {
      const timer = setTimeout(() => setPhase('name'), 3000)
      return () => clearTimeout(timer)
    }
    if (phase === 'name') {
      // Langsung panggil onComplete! Transisi fadeout akan diurus AnimatePresence di App.jsx
      const timer = setTimeout(() => onComplete(), 3500)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    // UBAH <div> INI JADI <motion.div>
    <motion.div
      exit={{ opacity: 0 }} // KUNCI FADEOUT OTOMATIS
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-[#07070a] z-[9999] flex flex-col items-center justify-center select-none"
    >
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <span className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ textShadow: '0 0 15px rgba(6,182,212,0.5)' }}>
            {progress}%
          </span>
          <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
            <div className="absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-100 ease-out" style={{ width: `${progress}%`, boxShadow: '0 0 10px #06b6d4' }} />
          </div>
        </div>
      )}

      {phase === 'welcome' && (
        <div className="text-center" style={{ textShadow: '0 0 15px #06b6d4, 0 0 30px #06b6d4' }}>
          <BlurText 
            text="Welcome." delay={200} animateBy="letters" direction="top"
            className="text-5xl sm:text-7xl font-black text-white tracking-widest uppercase italic"
          />
        </div>
      )}

      {/* FASE 3: GLITCH TEXT UNTUK NAMA */}
      {phase === 'name' && (
        <div className="text-center px-6 flex flex-col items-center animate-fade-in w-full">
          <p className="text-xs sm:text-sm uppercase tracking-[5px] text-cyan-400 font-bold mb-4 opacity-80">
            Portfolio Of
          </p>
          
          {/* PERBAIKAN UTAMA: 
            Kita pakai div biasa untuk menengahkan (flex justify-center).
          */}
          <div className="flex justify-center w-full">
            <motion.h1
              layoutId="main-name"
              // Hapus 'w-full' dan 'text-center' dari motion.h1 agar ukurannya pas sebesar teks.
              // Class ukuran font SAMA PERSIS dengan di Hero.jsx
              className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-2"
            >
              <DecryptedText
                text="Muhammad Hasbi Takumi."
                animateOn="view"
                sequential={true}
                speed={40}
                maxIterations={25}
                characters="!@#$%^&*()_+=-"
                
                // Ukuran font sudah diurus oleh motion.h1 di atas, di sini cukup transisi saja
                className="transition-all duration-300"
                
                // Font lebih kecil saat masih acak
                encryptedClassName="text-2xl sm:text-3xl text-cyan-700 opacity-60 transition-all duration-300"
                
                revealDirection="center"
                parentClassName="flex justify-center items-center"
              />
            </motion.h1>
          </div>
          
        </div>
      )}
    </motion.div>
  )
}