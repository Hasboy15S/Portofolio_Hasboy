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
        <div className="absolute left-[-5px] top-5 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-[4px] border-[#2563EB] z-10 transition-transform duration-300 group-hover:scale-125" />
        
        {/* Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 dark:hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 relative z-10">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#2563EB] dark:text-blue-400 mb-2">{tag}</p>
              <div className="flex items-center gap-3">
                <span className="text-xl p-2 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-100 dark:border-white/5">{icon}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
              </div>
            </div>
            
            <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-md shrink-0 border border-blue-100 dark:border-blue-500/20">
              {year}
            </span>
          </div>
          <p className="mt-4 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
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
      className="px-6 sm:px-10 lg:px-12 py-24 max-w-[1400px] w-full mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[3px] bg-[#2563EB] rounded-full"></span>
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#2563EB] dark:text-blue-400">Background</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
          Experience & <span className="text-[#2563EB] dark:text-blue-400">Journey</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-start">
        
        {/* Kolom Kiri: Kartu Pengalaman Minimalis */}
        <div className="relative">
          <div className="absolute left-[1.5px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-white/10" />
          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp, i) => (
              <ExpCard key={exp.id} {...exp} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: 2 Image Container (Atas & Bawah) */}
        <div className="flex flex-col gap-8 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto sticky top-28">
          
          {/* FOTO 1 (Atas) - Organisasi */}
          <div className="relative w-full group">
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl bg-slate-100 dark:bg-white/5 aspect-[4/3] flex items-center justify-center">
              <img 
                src={orgImage} 
                alt="Highlight Organisasi" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                <p className="text-blue-400 text-[11px] font-bold tracking-widest uppercase mb-1">Organization</p>
                <p className="text-white text-sm sm:text-base font-semibold">Scouting & LKS Activity</p>
              </div>
            </div>
          </div>

          {/* FOTO 2 (Bawah) - Sertifikat */}
          <div className="relative w-full group">
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl bg-slate-100 dark:bg-white/5 aspect-[4/3] flex items-center justify-center">
              <img 
                src={certImage} 
                alt="Highlight Certificate" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                <p className="text-blue-400 text-[11px] font-bold tracking-widest uppercase mb-1">Achievement</p>
                <p className="text-white text-sm sm:text-base font-semibold">Certificates & Awards</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  )
}