import React from 'react'
import './Contact.css'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
const Contact = () => {
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Contact Me!</h1>
                <p>If you are interested in my skills and experience, feel free to contact me. I am open to discussions, collaborations, and relevant opportunities</p>
                <div className="contact-detaills">
                    <div className="contact-detail">
                        <img src={mail} alt="" /><p>muhammadhasbi.t@gmail.com</p>
                    </div>
                </div>
                <div className="contact-detaills">
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>089618305931</p>
                    </div>
                </div>
                <div className="contact-detaills">
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>muhammadhasbi.t@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Yoour Name</label>
                <input type="text" placeholder='Enter Your Name' name="name" />
                <label htmlFor="">Yoour Email</label>
                <input type="email" placeholder='Enter Your Email' name="email" />
                <label htmlFor="">Write Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message' id=""></textarea>
                <button className='contact-submit'>Submit Now?</button>
            </div>
        </div>
    </div>
  )
}

export default Contact