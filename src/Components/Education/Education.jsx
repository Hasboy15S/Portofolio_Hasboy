import { useEffect, useRef } from 'react'

const EDUCATIONS = [
  {
    id: 1,
    level: 'Vocational High School',
    school: 'SMK Telkom Purwokerto',
    major: 'Software Engineering (RPL)',
    year: '2023 – present',
    icon: '🏫',
    highlight: 'Active',
    desc: 'Focusing on software development, web technologies, and computer networking. Actively involved in school organizations and competitions.',
  },
  {
    id: 2,
    level: 'Junior High School',
    school: 'SMP N 4 Purwokerto',
    major: 'General',
    year: '2020 – 2023',
    icon: '🎓',
    highlight: 'Graduated',
    desc: 'Completed junior high school with strong academic performance. Active in extracurricular activities including Scouts.',
  },
]

function EduCard({ level, school, major, year, icon, highlight, desc, delay }) {
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
    <div ref={ref} className="hb-fade group relative pl-8 sm:pl-12">
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-6 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-[4px] border-[#2563EB] z-10 transition-transform duration-300 group-hover:scale-125" />

      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 dark:hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#2563EB] dark:text-blue-400 mb-2">{level}</p>
            <div className="flex items-center gap-3">
              <span className="text-xl p-2 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-100 dark:border-white/5">{icon}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-300">{school}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{major}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-md border border-blue-100 dark:border-blue-500/20">
              {year}
            </span>
            <span className={`text-[11px] font-bold px-3 py-1.5 rounded-md ${highlight === 'Active' ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10'}`}>
              {highlight}
            </span>
          </div>
        </div>
        <p className="mt-4 text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  )
}

export default function Education() {
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
      id="education"
      className="px-6 sm:px-10 lg:px-12 py-24 max-w-[1400px] w-full mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[3px] bg-[#2563EB] rounded-full"></span>
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#2563EB] dark:text-blue-400">Academic</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
          Education & <span className="text-[#2563EB] dark:text-blue-400">Background</span>
        </h2>
        <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-400">
          My academic journey and formal education history.
        </p>
      </div>

      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-[1.5px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-white/10" />
        <div className="flex flex-col gap-6">
          {EDUCATIONS.map((edu, i) => (
            <EduCard key={edu.id} {...edu} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
