import { useState, useEffect, useRef } from 'react'

// Ganti src dengan import gambar asli kamu:
// import Tictac from '../../assets/Tictac.png'
// import Astrix from '../../assets/Astrix.png'
// import Hasbooy from '../../assets/HASBOYTECH.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Tictac Game',
    desc: 'Interactive tic-tac-toe with vanilla JS. Clean UI, win detection, and score tracking.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    cat: 'game',
    icon: '🎮',
    link: '#',
    // img: Tictac,
  },
  {
    id: 2,
    title: 'Astrix',
    desc: 'React-based project with modern animations and interactive UI components.',
    tags: ['React', 'CSS', 'Framer Motion'],
    cat: 'web',
    icon: '⭐',
    link: '#',
    // img: Astrix,
  },
  {
    id: 3,
    title: 'HASBOYTECH',
    desc: 'Personal portfolio with custom cursor, scroll effects, and dark theme.',
    tags: ['React', 'Figma', 'GSAP'],
    cat: 'design',
    icon: '💼',
    link: '#',
    // img: Hasbooy,
  },
  {
    id: 4,
    title: 'IoT Prototype',
    desc: 'Arduino-based hardware project with sensor integration and a C# desktop interface.',
    tags: ['Arduino', 'C#', 'Hardware'],
    cat: 'hardware',
    icon: '🤖',
    link: '#',
  },
  {
    id: 5,
    title: 'School Dashboard',
    desc: 'PHP + MySQL web app for managing school data with role-based access control.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    cat: 'web',
    icon: '🏫',
    link: '#',
  },
]

const FILTERS = [
  { key: 'all',      label: 'All' },
  { key: 'web',      label: 'Web' },
  { key: 'game',     label: 'Game' },
  { key: 'design',   label: 'Design' },
  { key: 'hardware', label: 'Hardware' },
]

function ProjectCard({ title, desc, tags, icon, link, delay }) {
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
      className="hb-fade group bg-white dark:bg-[#16161f] rounded-2xl border border-black/[0.06] dark:border-white/[0.06] overflow-hidden hover:border-violet-200 dark:hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="h-32 sm:h-36 bg-gray-50 dark:bg-white/[0.02] border-b border-black/5 dark:border-white/5 flex items-center justify-center text-4xl relative overflow-hidden">
        {icon}
        <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors duration-200" />
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500 font-medium">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{desc}</p>
        <a
          href={link}
          className="inline-flex items-center gap-1 text-xs text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 mt-3 no-underline transition-colors duration-150"
        >
          View project <span>→</span>
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
      className="px-4 sm:px-6 py-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-8">
        <p className="text-xs font-medium tracking-[2px] uppercase text-violet-500 mb-3">Work</p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
          Portfolio
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          A selection of projects that showcase my skills and passion for building.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-150
              ${active === key
                ? 'bg-violet-500 border-violet-500 text-white'
                : 'bg-transparent border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400'}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} {...p} delay={i * 80} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/Hasboy15S"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 no-underline transition-colors duration-150"
        >
          See all projects on GitHub →
        </a>
      </div>
    </section>
  )
}
