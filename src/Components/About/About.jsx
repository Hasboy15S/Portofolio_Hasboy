import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import Profil2 from '../../assets/Profil2.jpg'
import { MapPin } from 'lucide-react'

const INTERESTS = [
  'React',
  'JavaScript',
  'PHP',
  'C#',
  'Arduino',
  'IoT',
  'Robotics',
  'Figma',
  'UI/UX',
  'Machine Learning',
]

export default function About({ id = "about", scrollProgress }) {
  const sectionRef = useRef()
  const fallbackProgress = useMotionValue(1)
  const progress = scrollProgress || fallbackProgress

  const [isMobile, setIsMobile] = useState(false)
  const textWrapperRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const [textOffset, setTextOffset] = useState(200)
  const [imageOffset, setImageOffset] = useState(-400)

  useEffect(() => {
    const calculateOffsets = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (mobile) return // Skip complex math on mobile since we use Y-axis split

      const screenCenter = window.innerWidth / 2

      if (textWrapperRef.current) {
        const tRect = textWrapperRef.current.getBoundingClientRect()
        const tCenter = tRect.left + tRect.width / 2
        setTextOffset(screenCenter - tCenter)
      }

      if (imageWrapperRef.current) {
        const iRect = imageWrapperRef.current.getBoundingClientRect()
        const iCenter = iRect.left + iRect.width / 2
        setImageOffset(screenCenter - iCenter)
      }
    }

    calculateOffsets()
    // Add a slight delay for initial render to ensure fonts/layout are ready
    setTimeout(calculateOffsets, 100)
    window.addEventListener('resize', calculateOffsets)
    return () => window.removeEventListener('resize', calculateOffsets)
  }, [])

  // Animation values based on responsive breakpoint and precise measured offsets
  const textX = useTransform(progress, [0, 1], [isMobile ? 0 : textOffset, 0])
  const textY = useTransform(progress, [0, 1], [isMobile ? 100 : 0, 0])
  const textOpacity = useTransform(progress, [0, 0.4, 1], [0, 0, 1]) // Fade in slowly
  
  const imageX = useTransform(progress, [0, 1], [isMobile ? 0 : imageOffset, 0])
  const imageY = useTransform(progress, [0, 1], [isMobile ? -150 : 0, 0])
  const imageRotate = useTransform(progress, [0, 1], [0, 2]) // Fotonya baru miring dikit pas geser
  const badgeOpacity = useTransform(progress, [0.4, 1], [0, 1]) // Badge purwokerto baru muncul pas geser

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add('hb-visible'),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className="scroll-mt-20 bg-slate-50 dark:bg-[#111827] border-y border-slate-200 dark:border-white/5 relative min-h-screen flex items-center justify-center">
      {/* ── Grid Background ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div
        ref={sectionRef}
        className="hb-fade max-w-[1400px] w-full mx-auto px-6 lg:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-14 lg:gap-24 items-center relative z-10"
      >
        {/* ── Kiri: teks singkat + tag chip ────────────────────── */}
        <div ref={textWrapperRef}>
          <motion.div 
            style={{ x: textX, y: textY, opacity: textOpacity }}
          >
            <p className="text-sm font-bold tracking-[3px] uppercase text-[#2563EB] dark:text-blue-400">Tentang</p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] uppercase">
              Halo, saya <br className="hidden sm:block" />
              <span className="italic text-slate-800 dark:text-slate-200">Hasbi</span>.
            </h2>

            <p className="mt-8 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Mahasiswa SMK Telkom Purwokerto jurusan Rekayasa Perangkat Lunak yang senang
              mengubah ide menjadi produk yang benar-benar berfungsi — dari aplikasi web
              sampai prototipe hardware.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Saya belajar paling cepat dengan cara membangun dan mengirim. Fokus saya sekarang
              di React dan frontend yang rapi; di waktu luang saya utak-atik Arduino.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {INTERESTS.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-[#2563EB] dark:hover:border-blue-500 hover:text-[#2563EB] dark:hover:text-blue-400 transition-all duration-300 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Kanan: foto card + chip lokasi ───────────────────── */}
        <div ref={imageWrapperRef} className="relative mx-auto md:mx-0 w-72 sm:w-80 lg:w-96">
          <motion.div 
            className="w-full h-full relative"
            style={{ x: imageX, y: imageY }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 shadow-2xl"
              style={{ rotate: imageRotate }}
            >
              <img src={Profil2} alt="Hasbi" className="w-full aspect-[4/5] object-cover" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 lg:-left-10 z-20"
              style={{ opacity: badgeOpacity }}
            >
              <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl border border-slate-800 dark:border-white/20">
                <MapPin className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-sm font-bold tracking-wide">Purwokerto, ID</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}