import { useState, useEffect, useRef } from 'react'

// Import gambar sudah diaktifkan kembali
import Tictac from '../../assets/Tictac.png'
import Astrix from '../../assets/Astrix.png'
import Hasbooy from '../../assets/HASBOYTECH.png'
import WEBAI from '../../assets/WEBAI.png'
import WEDDING from '../../assets/WEDDING.png'
import PERPUS from '../../assets/PERPUS.png'
import MELON from '../../assets/MELON.png'
import TAKZ from '../../assets/TAKUZ.png'
import NGOPI from '../../assets/ngopi.png'


const PROJECTS = [
  {
    id: 1,
    title: 'Tictac Game',
    desc: 'Interactive tic-tac-toe with vanilla JS. Clean UI, win detection, and score tracking.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    cat: 'game',
    icon: '🎮',
    link: 'https://vercel.com/hasboy15s-projects/game-mtk#',
    img: Tictac, 
  },
  {
    id: 2,
    title: 'Astrix',
    desc: 'React-based project with modern animations and interactive UI components.',
    tags: ['React', 'CSS', 'Framer Motion'],
    cat: 'web',
    icon: '⭐',
    link: 'https://github.com/Hasboy15S/Astrix_Portofolio_DPK',
    img: Astrix, 
  },
  {
    id: 3,
    title: 'Perpustakaan Digital',
    desc: 'A digital library platform utilizing external APIs to fetch, display, and manage digital book collections efficiently.',
    tags: ['React', 'API Integration', 'Web'],
    cat: 'web',
    icon: '📚', // Ikon diubah menyesuaikan tema buku
    link: 'https://perpusss-hazel.vercel.app/',
    img: PERPUS, 
  },
  {
    id: 4,
    title: 'HydroVision AI',
    desc: 'Autonomous hydroponic nutrition control system using YOLOv8 for plant health monitoring and PID control.',
    tags: ['YOLOv8', 'STM32', 'Hardware'],
    cat: 'hardware',
    icon: '🤖',
    link: 'http://melonhydro.my.id/#',
    img: MELON,
  },
  {
    id: 5,
    title: 'NgopuiDulz',
    desc: 'Coffee shop web app built with Kotlin and Retrofit, featuring Firebase backend for real-time order management and user authentication.',
    tags: ['Kotlin', 'Retrofit', 'Firebase'],
    cat: 'web',
    icon: '☕',
    link: 'https://github.com/Hasboy15S/NgopiDulzAPP',
    img: NGOPI, 
  },
  {
    id: 6,
    title: 'AI Prediction',
    desc: 'An AI-driven prediction web application built with a custom K-Nearest Neighbors (KNN) model trained on Google Colab.',
    tags: ['Flask', 'Python', 'Machine Learning'], // Tag disesuaikan agar lebih spesifik
    cat: 'web',
    icon: '🧠', // Ikon diubah menyesuaikan AI/Brain
    link: 'https://www.takuflow.my.id/',
    img: WEBAI, 
  },
  {
    id: 7,
    title: 'Takuzz Game',
    desc: 'An engaging 2D/3D game developed using the Unity Engine and C# scripting, featuring custom mechanics and assets.',
    tags: ['Unity', 'C#', 'Game Dev'],
    cat: 'game', // Kategori diubah jadi 'game' agar masuk ke filter yang tepat
    icon: '🕹️', // Ikon diubah menyesuaikan tema game
    link: 'https://github.com/Hasboy15S/Takuzzz',
    img: TAKZ, 
  },
  {
    id: 8,
    title: 'Wedding Invitation',
    desc: 'A digital wedding invitation system featuring unique QR code generation for seamless digital guest check-ins.',
    tags: ['Laravel 11', 'PHP', 'SQL'],
    cat: 'web',
    icon: '💍', // Ikon diubah menyesuaikan tema wedding
    link: 'https://github.com/Hasboy15S/PernikahanPAS',
    img: WEDDING, 
  },
]

const FILTERS = [
  { key: 'all',      label: 'All' },
  { key: 'web',      label: 'Web' },
  { key: 'game',     label: 'Game' },
  { key: 'design',   label: 'Design' },
  { key: 'hardware', label: 'Hardware' },
]

function ProjectCard({ title, desc, tags, img, link, icon, delay }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
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
    <div
      ref={ref}
      className="hb-fade group bg-white dark:bg-[#16161f] rounded-2xl border border-black/[0.06] dark:border-white/[0.06] overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="h-40 sm:h-48 bg-gray-50 dark:bg-[#101015] border-b border-black/5 dark:border-white/5 relative overflow-hidden flex items-center justify-center">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        )}
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(t => (
            <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed font-medium flex-1">{desc}</p>
        
        <a
          href={link}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 mt-4 no-underline transition-colors duration-150"
        >
          View project <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
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

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active)

  return (
    <section
      id="portfolio"
      className="px-6 sm:px-10 lg:px-16 py-20 max-w-[1440px] w-full mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
          <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500">Work</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          My <span className="text-cyan-500">Portfolio</span>
        </h2>
        <p className="mt-3 text-base font-medium text-gray-500 dark:text-gray-400">
          A selection of projects that showcase my skills and passion for building.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`
              px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300
              ${active === key
                ? 'bg-cyan-500 border-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-transparent border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400'}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} {...p} delay={i * 80} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-14">
        <a
          href="https://github.com/Hasboy15S"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:border-cyan-200 dark:hover:border-cyan-500/30 transition-all duration-300 group"
        >
          See all projects on GitHub 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  )
}