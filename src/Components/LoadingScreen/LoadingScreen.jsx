import { useState, useEffect } from 'react'
import BlurText from '../ReactBits/BlurText' 
import DecryptedText from '../ReactBits/DecryptedText'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // loading | welcome | name | fadeout

  // 1. Logika simulasi loading
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

  // 2. Pengaturan transisi antar layar
  useEffect(() => {
    if (phase === 'welcome') {
      const timer = setTimeout(() => setPhase('name'), 3000)
      return () => clearTimeout(timer)
    }
    if (phase === 'name') {
      // Set 3500ms: 2.5 detik untuk animasi decrypt + 1 detik untuk dibaca
      const timer = setTimeout(() => setPhase('fadeout'), 3500)
      return () => clearTimeout(timer)
    }
    if (phase === 'fadeout') {
      const timer = setTimeout(() => onComplete(), 800)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-[#07070a] z-[9999] flex flex-col items-center justify-center select-none transition-all duration-1000 ease-in-out ${
        phase === 'fadeout' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* FASE 1: PERSENTASE LOADING */}
      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <span 
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            style={{ textShadow: '0 0 15px rgba(6,182,212,0.5)' }}
          >
            {progress}%
          </span>
          <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
            <div 
              className="absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%`, boxShadow: '0 0 10px #06b6d4' }}
            />
          </div>
        </div>
      )}

      {/* FASE 2: WELCOME (Blur Text) */}
      {phase === 'welcome' && (
        <div className="text-center" style={{ textShadow: '0 0 15px #06b6d4, 0 0 30px #06b6d4' }}>
          <BlurText 
            text="Welcome." 
            delay={200} 
            animateBy="letters"
            direction="top"
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
          
          <div style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
            <DecryptedText
            text="Muhammad Hasbi Takumi"
            animateOn="view"
            sequential={true}
            speed={40}
            maxIterations={25}
            characters="!@#$%^&*()_+=-"
            
            // Font besar untuk teks yang sudah terbuka (Muhammad Hasbi Takumi)
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-none transition-all duration-300"
            
            // Font lebih kecil dan warna berbeda untuk teks yang masih teracak
            encryptedClassName="text-4xl sm:text-5xl md:text-7xl text-cyan-700 opacity-60 transition-all duration-300"
            revealDirection="center"
            parentClassName="flex justify-center items-end"
            />
          </div>
        </div>
      )}
    </div>
  )
}