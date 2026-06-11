import { useEffect, useRef } from 'react'

// Ganti dengan import gambar kamu nanti:
// import Profil2 from '../../assets/Profil2.jpg'
// import reactIcon from '../../assets/REACT.png'
// import arduinoIcon from '../../assets/ARDUINO.png'
// dll...

const SKILLS = [
  'React', 'JavaScript', 'HTML & CSS', 'PHP',
  'C#', 'Arduino', 'Figma', 'Adobe Audition',
]

const INFO = [
  { label: 'Email',    value: 'muhammadhasbi.t@gmail.com' },
  { label: 'Phone',    value: '089618305931' },
  { label: 'Location', value: 'Purwokerto, Indonesia' },
]

export default function About() {
  const sectionRef = useRef()

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="hb-fade px-4 sm:px-6 py-20 max-w-[1350px] w-full mx-auto"
    >
      {/* Label + heading */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span>
        <p className="text-sm font-bold tracking-[3px] uppercase text-cyan-500">About me</p>
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
        Who is Hasbi? <span className="animate-bounce inline-block">🤔</span>
      </h2>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

        {/* Photo Container */}
        <div className="relative mx-auto lg:mx-0 w-56 sm:w-64 lg:w-full group">
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-3xl transition-all duration-500 group-hover:bg-cyan-500/40" />
          
          <div className="relative aspect-square rounded-3xl bg-gray-100 dark:bg-[#151515] border border-black/10 dark:border-white/10 overflow-hidden flex items-center justify-center text-8xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Swap emoji ini dengan foto aslimu: */}
            {/* <img src={Profil2} alt="Hasbi" className="w-full h-full object-cover" /> */}
            👨‍💻
          </div>

          {/* Badge Location - Desain diperbarui */}
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0f0f0f] border border-black/10 dark:border-cyan-500/30 rounded-2xl px-4 py-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
            <span>📍</span> Purwokerto, ID
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col h-full justify-center">
          <div className="p-6 rounded-3xl bg-white/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-sm">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-thin">
              I'm a motivated student with strong organizational and public speaking skills,
              and a passion for taking on challenges. Experienced in the Scouting organization,
              where I developed problem-solving abilities and effective communication with diverse
              stakeholders. 
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-thin mt-4">
              Possess foundational skills in video editing and graphic design. Highly eager to
              expand my knowledge, contribute to team success, and gain valuable professional experience. 
            </p>
          </div>

          {/* Skills / Tech Stack */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <p className="text-sm font-bold tracking-[2px] uppercase text-cyan-500">Tech Stack</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <div
                  key={skill}
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-cyan-500/20 hover:-translate-y-1"
                >
                  {/* --- TEMPAT MEMASUKKAN ICON ASSET KAMU --- */}
                  {/* Hapus div bulatan di bawah ini, lalu uncomment tag img di bawahnya jika ingin pakai icon */}
                  
                  <span className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
                  
                  {/* <img src={`/assets/${skill.toUpperCase()}.png`} alt={skill} className="w-5 h-5 object-contain" /> */}
                  
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {INFO.map(({ label, value }) => (
              <div
                key={label}
                className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-cyan-500/50 transition-colors duration-300 group"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-500 mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 break-all group-hover:text-cyan-400 transition-colors">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement strip - Desain diperbarui jadi lebih nge-jreng */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
        {/* Hiasan background abstrak */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full" />
        
        {[
          { num: '5+', label: 'Years Experience', icon: '⏳' },
          { num: '5+', label: 'Project Experience', icon: '💻' },
          { num: '3+', label: 'Org. Experience', icon: '🤝' },
        ].map(({ num, label, icon }) => (
          <div key={label} className="text-center relative z-10">
            <div className="text-2xl mb-2">{icon}</div>
            <p className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              {num}
            </p>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}