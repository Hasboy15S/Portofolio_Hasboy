import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

// ✏️ Isi dengan data dari EmailJS kamu
const EMAILJS_SERVICE_ID  = 'service_v658typ'
const EMAILJS_TEMPLATE_ID = 'template_165l8ij'
const EMAILJS_PUBLIC_KEY  = 'aMRBkdVB64w5jPB4d'

const CONTACT_INFO = [
  { icon: mail,     text: 'muhammadhasbi.t@gmail.com' },
  { icon: call,     text: '089618305931' },
  { icon: location, text: 'Bandung, Indonesia' },
]

const Contact = () => {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact Me!</h1>
          <p>If you are interested in my skills and experience, feel free to contact me.</p>
          {CONTACT_INFO.map((item, index) => (
            <div className="contact-detaills" key={index}>
              <div className="contact-detail">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text" id="name" name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email" id="email" name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message" name="message" rows="6"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
          />

          <button
            className="contact-submit"
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' :
             status === 'success' ? 'Sent! ✓' :
             status === 'error'   ? 'Failed, try again' :
             'Submit Now ↗'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact