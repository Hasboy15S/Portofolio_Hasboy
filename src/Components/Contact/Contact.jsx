import { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const CONTACT_INFO = [
  { Icon: Mail,   label: 'Email',   value: 'muhammadhasbi.t@gmail.com', href: 'mailto:muhammadhasbi.t@gmail.com' },
  { Icon: Phone,  label: 'Telepon', value: '089618305931',              href: 'tel:+6289618305931' },
  { Icon: MapPin, label: 'Lokasi',  value: 'Purwokerto, Indonesia' },
]

// Link sosial asli — placeholder LinkedIn dihapus
const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/Hasboy15S' },
  { label: 'Instagram', href: 'https://www.instagram.com/hasbiboys8' },
]

export default function Contact() {
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

  const cardCls = 'group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 no-underline'

  return (
    <section id="contact" className="scroll-mt-20 px-6 sm:px-12 lg:px-24 pb-24">
      {/* Dark block */}
      <div
        ref={sectionRef}
        className="hb-fade relative max-w-[1400px] mx-auto rounded-3xl bg-slate-900 dark:bg-black/40 text-white overflow-hidden px-8 py-20 sm:px-16 sm:py-24 border border-slate-800 dark:border-white/10 shadow-2xl"
      >
        {/* Aksen biru halus di pojok */}
        <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

        {/* Watermark teks outline */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-end justify-end opacity-[0.03] select-none">
          <span
            className="font-black tracking-tighter leading-none text-[8rem] sm:text-[14rem]"
            style={{ WebkitTextStroke: '2px #FFFFFF', color: 'transparent' }}
          >
            KONTAK
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* ── Kiri: headline ajakan + tombol email ──────────── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-blue-500 rounded-full"></span>
              <p className="text-sm font-bold tracking-[3px] uppercase text-blue-400">Hubungi Saya</p>
            </div>
            
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] uppercase">
              Mari <br/>
              <span className="text-blue-500">Berkolaborasi</span>.
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed max-w-lg text-lg">
              Terbuka untuk kesempatan kerja, proyek freelance, atau sekadar berdiskusi santai.
              Saya akan membalas pesan Anda secepatnya.
            </p>

            <a
              href="mailto:muhammadhasbi.t@gmail.com"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white text-[15px] font-bold hover:bg-blue-500 transition-colors duration-300 no-underline shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Kirim Pesan
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* ── Kanan: info kontak + sosial ───────────────────── */}
          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
                    <p className="text-base font-semibold truncate mt-1 text-slate-200">{value}</p>
                  </div>
                </>
              )
              return href ? (
                <a key={label} href={href} className={cardCls}>
                  {content}
                </a>
              ) : (
                <div key={label} className={cardCls}>
                  {content}
                </div>
              )
            })}

            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[15px] font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 no-underline"
                >
                  {label}
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}