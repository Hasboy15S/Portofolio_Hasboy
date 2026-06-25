import { useEffect, useRef } from 'react'

// Ganti dengan import gambar kamu nanti:
import Profil2 from '../../assets/Profil2.jpg'
// import reactIcon from '../../assets/REACT.png'
// import arduinoIcon from '../../assets/ARDUINO.png'
// dll...

const SKILLS = [
  'React', 'JavaScript', 'HTML & CSS', 'PHP',
  'C#', 'Arduino', 'Figma', 'Adobe Audition',
]

const ACHIEVEMENTS = [
  { num: '5+', label: 'Years Experience' },
  { num: '5+', label: 'Project Experience' },
  { num: '3+', label: 'Org. Experience' },
]

// --- Ikon SVG kecil bertema petir/electric, ganti semua emoji ---
function BoltIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.6" r="2.4" fill="currentColor" />
    </svg>
  )
}

function HourglassIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CodeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m9 7-5 5 5 5M15 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HandshakeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 12 8 7l4 3 4-3 5 5M7 11l3 3 3-3M3 12l4 4M21 12l-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ACH_ICONS = [HourglassIcon, CodeIcon, HandshakeIcon]

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
      className="hb-fade px-4 sm:px-6 py-20 max-w-[1350px] w-full mx-auto relative"
    >
      {/* --- Animasi petir/electric, scoped di section ini --- */}
      <style>{`
        @keyframes hb-bolt-flicker {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px rgba(34,211,238,0.9)); }
          5% { opacity: 0.3; filter: drop-shadow(0 0 0px rgba(34,211,238,0)); }
          10% { opacity: 1; filter: drop-shadow(0 0 10px rgba(34,211,238,1)); }
          12% { opacity: 0.4; }
          14% { opacity: 1; filter: drop-shadow(0 0 6px rgba(34,211,238,0.9)); }
          70% { opacity: 1; }
          72% { opacity: 0.5; }
          74% { opacity: 1; }
        }
        @keyframes hb-spark-travel {
          to { --hb-angle: 360deg; }
        }
        @property --hb-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .hb-bolt-flicker {
          animation: hb-bolt-flicker 4.5s infinite;
        }
        .hb-spark-ring {
          position: relative;
          border-radius: 1.5rem;
        }
        .hb-spark-ring::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(
            from var(--hb-angle),
            transparent 0deg,
            transparent 260deg,
            #22d3ee 300deg,
            #67e8f9 320deg,
            transparent 340deg,
            transparent 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: hb-spark-travel 3.2s linear infinite;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .hb-bolt-flicker, .hb-spark-ring::before { animation: none; }
        }
          /* --- Achievement strip animations --- */
        @keyframes hb-ach-rise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hb-fill-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes hb-dot-flow {
          0%   { top: 0%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .hb-ach-item {
          opacity: 0;
          transform: translateY(16px);
        }
        .hb-visible .hb-ach-item {
          animation: hb-ach-rise 0.6s ease-out forwards;
        }
        .hb-visible .hb-ach-item:nth-child(2) { animation-delay: 0.12s; }
        .hb-visible .hb-ach-item:nth-child(3) { animation-delay: 0.24s; }
        .hb-ach-bar {
          width: 0%;
        }
        .hb-visible .hb-ach-bar {
          animation: hb-fill-bar 1s ease-out forwards;
          animation-delay: 0.5s;
        }
        .hb-divider-dot {
          animation: hb-dot-flow 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hb-ach-item, .hb-ach-bar, .hb-divider-dot { animation: none !important; opacity: 1 !important; transform: none !important; width: 100% !important; }
        }
      `}</style>

      {/* Label + heading */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span>
        <p className="text-sm font-bold tracking-[3px] uppercase text-cyan-500">About me</p>
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
        Who is Hasbi?
        <BoltIcon className="hb-bolt-flicker w-7 h-7 sm:w-9 sm:h-9 text-cyan-400" />
      </h2>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

        {/* Photo Container */}
        <div className="relative mx-auto lg:mx-0 w-56 sm:w-64 lg:w-full group">
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-3xl transition-all duration-500 group-hover:bg-cyan-500/40" />

          {/* Spark ring berjalan keliling foto, seperti arus listrik */}
          <div className="relative hb-spark-ring">
            <div className="relative aspect-square rounded-3xl bg-gray-100 dark:bg-[#151515] border border-black/10 dark:border-white/10 overflow-hidden flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img src={Profil2} alt="Hasbi" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Badge Location */}
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0f0f0f] border border-black/10 dark:border-cyan-500/30 rounded-2xl px-4 py-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
            <PinIcon className="w-3.5 h-3.5" /> Purwokerto, ID
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
              <BoltIcon className="w-4 h-4 text-cyan-500" />
              <p className="text-sm font-bold tracking-[2px] uppercase text-cyan-500">Tech Stack</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <div
                  key={skill}
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-cyan-500/20 hover:-translate-y-1"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievement strip */}
      <div className="mt-16 relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-md overflow-hidden">
        {/* Hiasan background abstrak */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3">
          {ACHIEVEMENTS.map(({ num, label }, i) => {
            const Icon = ACH_ICONS[i]
            return (
              <div key={label} className="relative flex items-stretch">
                {/* Garis pembatas + spark mengalir, cuma di antara item (bukan di item pertama) */}
                {i > 0 && (
                  <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent">
                    <span className="hb-divider-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]" />
                  </div>
                )}

                <div className="hb-ach-item group flex-1 text-center px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-cyan-500/5 hover:-translate-y-1">
                  {/* Badge ikon dengan glow ring */}
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                    <Icon className="w-5 h-5 text-cyan-500 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <p className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {num}
                  </p>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2">
                    {label}
                  </p>

                  {/* Bar tipis yang ngisi pas section muncul */}
                  <div className="mt-3 h-[2px] mx-auto w-16 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="hb-ach-bar h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}