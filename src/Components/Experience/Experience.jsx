import React from 'react'
import ScrollFloat from './ScrollFloat';
import './Experience.css'
import Pramuka from '../../assets/ORGANIZATION.png'
import Ai from '../../assets/Ai.png'
import { motion } from "framer-motion";
function Experience() {
  return (
    <div id='experience' className='experiences'>
      <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.02}
          >            
          Experience
         </ScrollFloat>  <div className="experience">
         <motion.div
          initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
          whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
          exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
          transition={{ duration: 0.8, ease: "easeInOut" }} // 🔹 durasi + timing animasi
          viewport={{ once: false, amount: 0.2 }}
          className="about-leftt" // 🔹 animasi bisa bolak-balik (reverse)
          >
        
        <div className="experience-item">
          <img src={Pramuka} alt="" />
          <div className="teks">
            <h1>Leadership</h1>
          <p>I have organizational experience in the Scouts, where I actively participated in various activities, teamwork, and leadership training. This helped me develop responsibility, discipline, and strong collaboration skills.</p>
          </div>
        </div>
        <div className="experience-item">
          <img src={Ai} alt="" style={{width:"500px",padding:"50px",margin:"0 90px"}}/>
          <div className="teks">
            <h1>Ai Certificate</h1>
          <p>Completed a preparation course for Microsoft Azure AI Fundamentals (AI-900), gaining foundational knowledge in artificial intelligence concepts and Azure services.</p>
          </div>
        </div>
          </motion.div>
       </div>  
    </div>
  )
}

export default Experience