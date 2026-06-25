import { useEffect, useRef } from 'react'
import profilImg from '../../assets/Profil.png'
import { motion } from 'motion/react';
const STATS = [
  { num: '5+', label: 'Projects' },
  { num: '9',  label: 'Technologies' },
  { num: '3+', label: 'Org. Roles' },
]

// Posisi awal ikon-ikon diatur agar fokus di area pinggir kiri dan kanan
const FLOATING_ICONS = [
  { id: 1, icon: '💻', top: '18%', left: '4%' },   // Kiri Atas
  { id: 2, icon: '🤖', top: '65%', left: '6%' },   // Kiri Bawah
  { id: 3, icon: '🚀', top: '15%', left: '90%' },  // Kanan Atas
  { id: 4, icon: '⚡', top: '45%', left: '94%' },  // Kanan Tengah
  { id: 5, icon: '🌐', top: '80%', left: '88%' },  // Kanan Bawah
  { id: 6, icon: '⚙️', top: '85%', left: '10%' },  // Kiri Bawah (Dekat Stats)
]

export default function Hero() {
  const sectionRef = useRef()
  const iconsRef = useRef([])

  // Efek scroll & Interseksi
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add('hb-visible'),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Efek Kursor Dodge / Repel
  useEffect(() => {
    const handleMouseMove = (e) => {
      iconsRef.current.forEach((icon) => {
        if (!icon) return
        
        const rect = icon.getBoundingClientRect()
        const iconCenterX = rect.left + rect.width / 2
        const iconCenterY = rect.top + rect.height / 2
        
        const distX = e.clientX - iconCenterX
        const distY = e.clientY - iconCenterY
        const distance = Math.sqrt(distX * distX + distY * distY)
        
        const repelRadius = 130 // Jangkauan tolakannya sedikit diperbesar
        
        if (distance < repelRadius) {
          const angle = Math.atan2(distY, distX)
          const pushForce = repelRadius - distance
          
          const moveX = Math.cos(angle) * -pushForce
          const moveY = Math.sin(angle) * -pushForce
          
          icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.2)`
        } else {
          icon.style.transform = `translate(0px, 0px) scale(1)`
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      // Lebar ditambah (max-w-[1440px]) dan padding diatur agar lebih menyebar
      className="hb-fade min-h-screen flex items-center pt-[60px] px-6 sm:px-10 lg:px-16 max-w-[1440px] w-full mx-auto relative overflow-hidden"
    >
      {/* --- FLOATING ICONS BACKGROUND --- */}
      {FLOATING_ICONS.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (iconsRef.current[index] = el)}
          className="absolute text-3xl md:text-4xl pointer-events-none transition-transform duration-300 ease-out z-0 opacity-40 dark:opacity-20"
          style={{ top: item.top, left: item.left }}
        >
          {item.icon}
        </div>
      ))}

      {/* Gap antar teks dan foto diatur agar rapi (lg:gap-16) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8 lg:gap-16 relative z-10">
        
        {/* BAGIAN KIRI: Teks & Tombol */}
        <div className="flex-1 flex flex-col justify-center items-start w-full mt-10 md:mt-0">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#06b6d4]" />
            Open to opportunities
          </div>
          {/* Ukuran Nama Dikecilkan: dari lg:text-7xl menjadi lg:text-6xl */}
          <motion.h1 
  layoutId="main-name"
  className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-2"
  transition={{ type: "spring", stiffness: 40, damping: 15, duration: 1.2 }}
>
  Muhammad Hasbi Takumi.
</motion.h1>

          <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            Junior web developer & robotics enthusiast. Passionate about crafting clean, interactive
            experiences with modern technologies.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => scrollTo('#portfolio')}
              className="px-7 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold tracking-wide rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 active:scale-95"
            >
              View my work ↓
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-bold tracking-wide border border-black/10 dark:border-white/10 rounded-xl transition-all duration-300 active:scale-95"
            >
              Contact me
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-black/5 dark:border-white/5 w-full">
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{num}</div>
                <div className="text-[12px] font-bold text-cyan-600 dark:text-cyan-400 mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN KANAN: Foto Profil */}
        <div className="flex flex-1 justify-center md:justify-end w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full sm:rounded-[3rem] border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl bg-gray-100 dark:bg-[#151515] group rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
            <img
          src={profilImg} // Gunakan variabel yang di-import
          alt="Profile Muhammad Hasbi Takumi"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}