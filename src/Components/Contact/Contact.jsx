import React from 'react'
import './Contact.css'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

// =============================================
// ✏️  UBAH DATA DI SINI
// =============================================
const CONTACT_INFO = [
  { icon: mail,     text: 'muhammadhasbi.t@gmail.com' },
  { icon: call,     text: '+62-896-1830-5931' },
  { icon: location, text: 'Banyumas, Indonesia' },
]
// =============================================

const Contact = () => {
  return (
    <div id="contact" className="contact">

      {/* Title */}
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">

        {/* ── Left: info ── */}
        <div className="contact-left">
          <h1>Contact Me!</h1>
          <p>
            If you are interested in my skills and experience, feel free to
            contact me. I am open to discussions, collaborations, and relevant
            opportunities.
          </p>

          {CONTACT_INFO.map((item, index) => (
            <div className="contact-detaills" key={index}>
              <div className="contact-detail">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: form ── */}
        <div className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message here..."
          />

          <button className="contact-submit">Submit Now ↗</button>
        </div>

      </div>
    </div>
  )
}

export default Contact