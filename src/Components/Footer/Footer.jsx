const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Karya',   href: '#portfolio' },
  { label: 'Kontak',  href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1220] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">
            HAS<span className="text-[#2563EB] dark:text-blue-400">BOY</span>
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Junior Web Developer &amp; Robotics Enthusiast · Purwokerto, Indonesia
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 list-none p-0 m-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Hasboy15S"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#2563EB] dark:hover:bg-blue-500 hover:border-[#2563EB] dark:hover:border-blue-500 transition-all duration-300 no-underline font-bold text-sm bg-slate-50 dark:bg-white/5"
          >
            GH
          </a>
          <a
            href="https://www.instagram.com/hasbiboys8"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#2563EB] dark:hover:bg-blue-500 hover:border-[#2563EB] dark:hover:border-blue-500 transition-all duration-300 no-underline font-bold text-sm bg-slate-50 dark:bg-white/5"
          >
            IG
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/5">
        <p className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 text-center md:text-left text-xs text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Muhammad Hasbi Takumi · Dibangun dengan React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}