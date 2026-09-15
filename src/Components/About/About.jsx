import { useEffect, useRef } from 'react'
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

export default function About() {
  const sectionRef = useRef()

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
    <section id="about" className="scroll-mt-20 bg-slate-50 dark:bg-[#111827] border-y border-slate-200 dark:border-white/5 relative">
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
        className="hb-fade max-w-[1400px] mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-14 lg:gap-24 items-center relative z-10"
      >
        {/* ── Kiri: teks singkat + tag chip ────────────────────── */}
        <div>
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
        </div>

        {/* ── Kanan: foto card + chip lokasi ───────────────────── */}
        <div className="relative mx-auto md:mx-0 w-72 sm:w-80 lg:w-96">
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img src={Profil2} alt="Hasbi" className="w-full aspect-[4/5] object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 lg:-left-10 z-20">
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl border border-slate-800 dark:border-white/20">
              <MapPin className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-bold tracking-wide">Purwokerto, ID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}