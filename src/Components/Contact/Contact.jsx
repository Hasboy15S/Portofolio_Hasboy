import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// ✏️ Isi dengan kredensial EmailJS kamu
const EMAILJS_SERVICE_ID  = 'service_v658typ'
const EMAILJS_TEMPLATE_ID = 'template_165l8ij'
const EMAILJS_PUBLIC_KEY  = 'aMRBkdVB64w5jPB4d'

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email',    value: 'muhammadhasbi.t@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '089618305931' },
  { icon: '📍', label: 'Location', value: 'Purwokerto, Indonesia' },
]

const SOCIALS = [
  { label: 'GH', title: 'GitHub',    href: 'https://github.com/Hasboy15S' },
  { label: 'in', title: 'LinkedIn',  href: '#' },
  { label: 'IG', title: 'Instagram', href: '#' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error | invalid
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('invalid')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }
    setStatus('loading')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const btnConfig = {
    idle:    { text: 'Send Message ↗', cls: 'bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/30' },
    loading: { text: 'Sending…',       cls: 'bg-cyan-400 cursor-not-allowed opacity-70' },
    success: { text: 'Sent! ✓',        cls: 'bg-green-500 cursor-default shadow-lg shadow-green-500/30' },
    error:   { text: 'Failed — try again', cls: 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' },
    invalid: { text: 'Please fill all fields', cls: 'bg-amber-500 cursor-default shadow-lg shadow-amber-500/30' },
  }

  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-16 py-20 max-w-[1440px] w-full mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
          <p className="text-xs font-bold tracking-[2px] uppercase text-cyan-500">Get in touch</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contact <span className="text-cyan-500">Me</span>
        </h2>
        <p className="mt-3 text-base font-medium text-gray-500 dark:text-gray-400">
          Interested in working together? Let's have a conversation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">

        {/* Left — info */}
        <div>
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] backdrop-blur-sm hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-transparent group-hover:border-cyan-200 dark:group-hover:border-cyan-500/20 flex items-center justify-center text-xl shrink-0 transition-colors duration-300">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mb-1">{label}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-cyan-400 transition-colors duration-300">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Connect with me</p>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 flex items-center justify-center text-xs font-bold no-underline transition-all duration-300 hover:-translate-y-1"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex flex-col gap-5 bg-white/40 dark:bg-white/[0.01] border border-black/[0.04] dark:border-white/[0.04] p-6 sm:p-8 rounded-3xl backdrop-blur-sm">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Your Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121218] border border-black/10 dark:border-white/10 text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-cyan-400 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Your Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121218] border border-black/10 dark:border-white/10 text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-cyan-400 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#121218] border border-black/10 dark:border-white/10 text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-cyan-400 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'loading' || status === 'success' || status === 'invalid'}
            className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-300 active:scale-95 ${btnConfig[status].cls}`}
          >
            {btnConfig[status].text}
          </button>
        </div>
      </div>
    </section>
  )
}