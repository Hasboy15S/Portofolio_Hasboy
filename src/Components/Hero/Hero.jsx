import { useEffect, useRef } from 'react'
import profilImg from '../../assets/Profil.png'
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-white dark:bg-[#0B1220]"
    >
      {/* ── Grid Background ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* ── Bottom Blue Gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-blue-100/80 dark:from-blue-900/30 to-transparent pointer-events-none z-0" />

      {/* ── Center Watermark Text ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none overflow-hidden z-0 w-full">
        <h1 className="text-[12vw] font-black text-slate-100 dark:text-white/[0.03] whitespace-nowrap select-none tracking-tighter">
          WEB DEVELOPER
        </h1>
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 h-[calc(100vh-6rem)] min-h-[700px] flex flex-col justify-between py-10">
        
        {/* ── TOP ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start w-full gap-8">
          
          {/* Top Left */}
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black italic text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
              I'M <br/>
              <span className="text-slate-800 dark:text-slate-100">HASBI</span>
            </h2>
            <button 
              onClick={() => scrollTo('#contact')}
              className="mt-2 flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-semibold transition-all shadow-xl shadow-blue-600/30 active:scale-95 group"
            >
              Let's Discuss 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Top Right */}
          <div className="flex flex-col items-start lg:items-end gap-3 text-left lg:text-right max-w-[250px] pt-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Follow Me</h3>
            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: 'https://github.com/Hasboy' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-[#2563EB] hover:text-white transition-all border border-slate-200 dark:border-white/10 shadow-sm">
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-[15px] text-slate-600 dark:text-slate-400 mt-2 font-medium leading-snug">
              I design intuitive interface and develop user-centric web applications.
            </p>
          </div>

        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-end w-full gap-8 pb-4 lg:pb-0">
          
          {/* Bottom Left */}
          <div className="max-w-[340px]">
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Hello, I'm Muhammad Hasbi Takumi, a <span className="font-bold text-[#2563EB] dark:text-blue-400">Junior Web Developer</span> passionate about creating meaningful digital experiences.
            </p>
          </div>

          {/* Bottom Right */}
          <div className="text-left lg:text-right mb-4 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter uppercase">
              JUNIOR <br/>
              WEB <br/>
              DEVELOPER
            </h2>
          </div>

        </div>

      </div>

      {/* ── CENTER IMAGE ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[450px] lg:w-[600px] h-[60%] lg:h-[85%] z-10 flex justify-center items-end pointer-events-none">
         <img 
            src={profilImg} 
            alt="Muhammad Hasbi Takumi" 
            className="w-full h-full object-cover object-top rounded-t-[4rem] lg:rounded-t-[8rem]"
            style={{
               WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
               maskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
            }}
         />
      </div>

    </section>
  )
}