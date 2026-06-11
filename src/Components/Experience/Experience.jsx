import { useEffect, useRef } from 'react'

// Untuk tambah/edit pengalaman, ubah array di bawah ini saja
const EXPERIENCES = [
  {
    id: 1,
    tag: 'Organization · Scouting',
    title: 'Leadership & Teamwork',
    description:
      'Actively participated in various activities, teamwork, and leadership training. Developed responsibility, discipline, and strong collaboration skills. Represented the team in multiple scouting competitions.',
    year: '2021 – present',
    icon: '🏕️',
  },
  {
    id: 2,
    tag: 'Technology · AI',
    title: 'Artificial Intelligence Exploration',
    description:
      'Explored AI tools and machine learning concepts through self-learning and hands-on projects. Sparked a passion for data-driven problem solving and building intelligent applications.',
    year: '2023 – present',
    icon: '🤖',
  },
  {
    id: 3,
    tag: 'Creative · Media',
    title: 'Video Editing & Graphic Design',
    description:
      'Foundational skills in video editing using Adobe tools and graphic design using Figma. Applied these skills in school projects and personal creative work to communicate ideas visually.',
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
      <div className="group relative pl-8 sm:pl-10">
        {/* Timeline dot */}
        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-white dark:ring-[#0a0a0f] z-10" />

        {/* Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#16161f] border border-black/[0.06] dark:border-white/[0.06] hover:border-violet-200 dark:hover:border-violet-500/30 transition-colors duration-200">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <p className="text-[10px] font-medium tracking-[1.5px] uppercase text-violet-500 mb-1">{tag}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl">{icon}</span>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">{title}</h3>
              </div>
            </div>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md shrink-0">
              {year}
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
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
      className="px-4 sm:px-6 py-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-10">
        <p className="text-xs font-medium tracking-[2px] uppercase text-violet-500 mb-3">Background</p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] sm:left-[5px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10" />

        <div className="flex flex-col gap-5">
          {EXPERIENCES.map((exp, i) => (
            <ExpCard key={exp.id} {...exp} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
