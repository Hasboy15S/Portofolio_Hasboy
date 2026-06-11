import { useEffect, useRef } from 'react'
import orgImage from '../../assets/ORGANIZATION.png' 
import certImage from '../../assets/Ai.png'

const EXPERIENCES = [
  {
    id: 1,
    tag: 'Organization · Scouting',
    title: 'Leadership & Teamwork',
    description:
      'Actively participated in various activities, teamwork, and leadership training. Developed responsibility, discipline, and strong collaboration skills. Represented the team in multiple competitions.',
    year: '2021 – present',
    icon: '🏕️',
  },
  {
    id: 2,
    tag: 'Technology · AI',
    title: 'AI & Robotics Exploration',
    description:
      'Explored AI tools and control systems through self-learning and hands-on hardware projects. Sparked a passion for building intelligent, autonomous applications.',
    year: '2023 – present',
    icon: '🤖',
  },
  {
    id: 3,
    tag: 'Creative · Media',
    title: 'Video Editing & Design',
    description:
      'Foundational skills in video editing using Adobe tools and graphic design using Figma. Applied these skills in school projects to communicate ideas visually.',
    year: '2022 – present',
    icon: '🎨',
  },
]

function ExpCard({ tag, title, description, year, icon, delay }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('hb-visible'), delay)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="hb-fade">
      <div className="group relative pl-8 sm:pl-12">
        {/* Timeline dot */}
        <div className="absolute left-[-4px] top-4 w-3.5 h-3.5 rounded-full bg-cyan-500 border-[3px] border-white dark:border-[#0f0f0f] z-10 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_#06b6d4]" />
        
        {/* Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] backdrop-blur-sm shadow-sm hover:shadow-cyan-500/10 hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 relative z-10">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-cyan-500 mb-1.5">{tag}</p>
              <div className="flex items-center gap-2.5">
                <span className="text-xl p-1.5 bg-gray-50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5">{icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors duration-300">{title}</h3>
              </div>
            </div>
            
            <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 px-2.5 py-1 rounded-md shrink-0 border border-cyan-200 dark:border-cyan-500/20">
              {year}
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
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

  return (
    <section
      id="experience"
      className="px-6 sm:px-10 lg:px-16 py-20 max-w-[1440px] w-full mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
          <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500">Background</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Experience & <span className="text-cyan-500">Journey</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-10 lg:gap-16 items-center">
        
        {/* Kolom Kiri: Kartu Pengalaman Minimalis */}
        <div className="relative">
          <div className="absolute left-[1.5px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent" />
          <div className="flex flex-col gap-5">
            {EXPERIENCES.map((exp, i) => (
              <ExpCard key={exp.id} {...exp} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: 2 Image Container (Atas & Bawah) */}
        <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
          
          {/* FOTO 1 (Atas) - Organisasi */}
          <div className="relative w-full group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl transition-all duration-500 group-hover:bg-cyan-500/30" />
            <div className="relative rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-xl bg-gray-100 dark:bg-[#151515] aspect-video flex items-center justify-center">
              
              {/* Ganti dengan import: src={orgImage} */}
              <img 
                src={orgImage} 
                alt="Highlight Organisasi" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">Organization</p>
                <p className="text-white text-xs sm:text-sm font-semibold">Scouting & LKS Activity</p>
              </div>
            </div>
          </div>

          {/* FOTO 2 (Bawah) - Sertifikat */}
          <div className="relative w-full group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl transition-all duration-500 group-hover:bg-cyan-500/30" />
            <div className="relative rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-xl bg-gray-100 dark:bg-[#151515] aspect-video flex items-center justify-center">
              
              {/* Ganti dengan import: src={certImage} */}
              <img 
                src={certImage} 
                alt="Highlight Certificate" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">Achievement</p>
                <p className="text-white text-xs sm:text-sm font-semibold">Certificates & Awards</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  )
}