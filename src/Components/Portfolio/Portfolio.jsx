import { useState, useEffect, useRef } from 'react'
import { CreditCard, Globe, GraduationCap, ArrowUpRight, Gamepad2, Paintbrush, Cpu, MonitorPlay } from 'lucide-react'

// ─── Proyek ─────
const PROJECTS = [
  {
    id: 1,
    title: 'Payment Soundbox',
    desc: 'Perangkat kasir mini berbasis ESP32 dengan NFC reader untuk pembayaran non-tunai, dilengkapi speaker notifikasi suara transaksi.',
    tags: ['ESP32', 'NFC', 'IoT'],
    cat: 'hardware',
    Icon: CreditCard,
    gradient: 'linear-gradient(135deg,#EAF3FC 0%,#D6F5F7 100%)',
    link: 'https://github.com/Hasboy15S',
    featured: true,
  },
  {
    id: 2,
    title: 'hataku.my.id',
    desc: 'Website personal yang saya bangun dan kelola sendiri dengan fokus pada performa, SEO, dan pengalaman pengguna yang bersih.',
    tags: ['Web', 'SEO', 'UX'],
    cat: 'web',
    Icon: Globe,
    gradient: 'linear-gradient(135deg,#F0F7FF 0%,#E2F1FE 100%)',
    link: 'https://hataku.my.id',
  },
  {
    id: 3,
    title: 'Riset Perbandingan Website Sekolah',
    desc: 'Riset komparatif struktur konten dan performa website sekolah sebagai bahan benchmark serta rekomendasi perbaikan.',
    tags: ['Riset', 'UX', 'Web'],
    cat: 'web',
    Icon: GraduationCap,
    gradient: 'linear-gradient(135deg,#F6F7FF 0%,#EDF0FF 100%)',
    link: 'https://github.com/Hasboy15S',
  },
  {
    id: 4,
    title: 'Tictac Game',
    desc: 'Interactive tic-tac-toe with vanilla JS. Clean UI, win detection, and score tracking.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    cat: 'game',
    Icon: Gamepad2,
    gradient: 'linear-gradient(135deg,#FFF0F5 0%,#FDE2E4 100%)',
    link: '#',
  },
  {
    id: 5,
    title: 'Astrix',
    desc: 'React-based project with modern animations and interactive UI components.',
    tags: ['React', 'CSS', 'Framer Motion'],
    cat: 'web',
    Icon: Globe, 
    gradient: 'linear-gradient(135deg,#F0FDF4 0%,#DCFCE7 100%)',
    link: '#',
  },
  {
    id: 6,
    title: 'HASBOYTECH',
    desc: 'Personal portfolio with custom cursor, scroll effects, and dark theme.',
    tags: ['React', 'Figma', 'GSAP'],
    cat: 'design',
    Icon: Paintbrush,
    gradient: 'linear-gradient(135deg,#F5F3FF 0%,#EDE9FE 100%)',
    link: '#',
  },
  {
    id: 7,
    title: 'IoT Prototype',
    desc: 'Arduino-based hardware project with sensor integration and a C# desktop interface.',
    tags: ['Arduino', 'C#', 'Hardware'],
    cat: 'hardware',
    Icon: Cpu,
    gradient: 'linear-gradient(135deg,#FEF3C7 0%,#FDE68A 100%)',
    link: '#',
  },
  {
    id: 8,
    title: 'School Dashboard',
    desc: 'PHP + MySQL web app for managing school data with role-based access control.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    cat: 'web',
    Icon: MonitorPlay,
    gradient: 'linear-gradient(135deg,#E0E7FF 0%,#C7D2FE 100%)',
    link: '#',
  }
]

// Filter dihitung dari kategori yang benar-benar ada di data.
const FILTERS = [
  { key: 'all',  label: 'Semua' },
  { key: 'web',  label: 'Web' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'game', label: 'Game' },
  { key: 'design', label: 'Design' },
]

function ProjectCard({ title, desc, tags, Icon, gradient, link, featured, delay, className = '' }) {
  const wrapRef = useRef()

  // Scroll reveal
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => el.classList.add('hb-visible'), delay)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <article ref={wrapRef} className={`hb-fade group ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full rounded-[2rem] bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 overflow-hidden no-underline transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_30px_60px_-30px_rgba(37,99,235,0.2)] hover:border-blue-400 dark:hover:border-blue-500/50"
      >
        {/* Cover bergradien (placeholder screnshot, ganti kalau sudah ada gambar asli) */}
        <div
          className={`relative flex items-center justify-center overflow-hidden ${featured ? 'h-56 sm:h-64 lg:h-72' : 'h-44 sm:h-52'}`}
          style={{ background: gradient }}
        >
          {/* Tambahan overlay agar gradien tidak terlalu terang di mode gelap */}
          <div className="absolute inset-0 bg-black/5 dark:bg-black/30 pointer-events-none" />
          
          {featured && (
            <span className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold tracking-widest z-10 shadow-lg">
              FEATURED
            </span>
          )}
          <Icon
            className={`text-slate-600/70 dark:text-slate-800/80 transition-transform duration-500 group-hover:scale-110 z-10 relative ${featured ? 'w-24 h-24' : 'w-16 h-16'}`}
            strokeWidth={1.2}
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-[#2563EB] dark:text-blue-400 text-[11px] font-bold tracking-wide">
                {t}
              </span>
            ))}
          </div>

          <h3 className={`font-black tracking-tight text-slate-900 dark:text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className="mt-3 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium flex-1">{desc}</p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] dark:text-blue-400">
            Lihat proyek
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </a>
    </article>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const headRef = useRef()

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add('hb-visible'),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === active)

  return (
    <section id="portfolio" className="scroll-mt-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-24 relative">
      {/* ── Grid Background (hanya untuk Portfolio) ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-30 dark:opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-14 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[3px] bg-[#2563EB] rounded-full"></span>
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#2563EB] dark:text-blue-400">Karya</p>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
          Proyek <span className="text-[#2563EB] dark:text-blue-400">pilihan</span>
        </h2>
        <p className="mt-5 text-lg font-medium text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Tiga proyek nyata yang saya bangun, kirim, dan terus kembangkan.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-12 relative z-10">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`
              px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-300 active:scale-95 shadow-sm
              ${active === key
                ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-blue-500/30'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-[#2563EB] dark:hover:border-blue-500 hover:text-[#2563EB] dark:hover:text-blue-400'}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid asimetris: 1 card besar + 2 card kecil */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {filtered.map((p, i) => (
          <ProjectCard
            key={p.id}
            {...p}
            delay={i * 100}
            className={p.featured ? 'md:col-span-2 lg:col-span-2' : ''}
          />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-20 text-center relative z-10">
        <a
          href="https://github.com/Hasboy15S"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-slate-200 dark:border-white/10 text-[15px] font-bold text-slate-800 dark:text-white hover:border-[#2563EB] dark:hover:border-blue-500 hover:bg-[#2563EB] hover:text-white transition-all duration-300 no-underline shadow-lg hover:shadow-blue-500/30 active:scale-95 group"
        >
          Lihat semua proyek di GitHub
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  )
}