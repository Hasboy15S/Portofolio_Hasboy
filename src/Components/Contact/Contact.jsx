import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// ✏️ Isi dengan kredensial EmailJS kamu
const EMAILJS_SERVICE_ID  = 'service_v658typ'
const EMAILJS_TEMPLATE_ID = 'template_165l8ij'
const EMAILJS_PUBLIC_KEY  = 'aMRBkdVB64w5jPB4d'

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email',    value: 'muhammadhasbi.t@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '089618305931' },
  { icon: '📍', label: 'Location', value: 'Bandung, Indonesia' },
]

const SOCIALS = [
  { label: 'GH', title: 'GitHub',    href: 'https://github.com/Hasboy15S' },
  { label: 'in', title: 'LinkedIn',  href: '#' },
  { label: 'IG', title: 'Instagram', href: '#' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
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
    idle:    { text: 'Send Message ↗', cls: 'bg-violet-500 hover:bg-violet-600' },
    loading: { text: 'Sending…',       cls: 'bg-violet-400 cursor-not-allowed' },
    success: { text: 'Sent! ✓',        cls: 'bg-green-500 cursor-default' },
    error:   { text: 'Failed — try again', cls: 'bg-red-500 hover:bg-red-600' },
    invalid: { text: 'Please fill all fields', cls: 'bg-amber-500 cursor-default' },
  }

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div ref={headRef} className="hb-fade mb-10">
        <p className="text-xs font-medium tracking-[2px] uppercase text-violet-500 mb-3">Get in touch</p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Interested in working together? Let's have a conversation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">

        {/* Left — info */}
        <div>
          <div className="flex flex-col gap-3">
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[#16161f] border border-black/[0.06] dark:border-white/[0.06]"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-base shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">{label}</p>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2 mt-5">
            {SOCIALS.map(({ label, title, href }) => (
              <a
                key={title}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-500 flex items-center justify-center text-xs font-medium no-underline transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Your Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-violet-400 dark:focus:border-violet-500 transition-colors duration-150"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Your Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-violet-400 dark:focus:border-violet-500 transition-colors duration-150"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-violet-400 dark:focus:border-violet-500 transition-colors duration-150 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'loading' || status === 'success' || status === 'invalid'}
            className={`w-full py-2.5 rounded-lg text-sm font-medium text-white transition-colors duration-150 ${btnConfig[status].cls}`}
          >
            {btnConfig[status].text}
          </button>
        </div>
      </div>
    </section>
  )
}
