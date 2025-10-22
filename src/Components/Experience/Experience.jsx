import React from 'react'
import ScrollFloat from '../Effect/ScrollFloat';
import './Experience.css'
import Pramuka from '../../assets/ORGANIZATION.png'
import Ai from '../../assets/Ai.png'
import { motion } from "framer-motion";
function Experience() {
  return (
    <div id='experience' className='experiences'>
      <motion.div
                  animate={{
                      y: [0,-10,0]
                  }}
                  transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                  }}
                  >
                  <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.02}
          >            
          Experience
         </ScrollFloat>    
                  </motion.div>
      <div className="experience">
         <motion.div
          initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
          whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
          exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
          transition={{ duration: 0.7, ease: "easeInOut" }} // 🔹 durasi + timing animasi
          viewport={{ once: true, amount: 0.2 }}// 🔹 animasi bisa bolak-balik (reverse)
          >
            <div className="experience-item">
              <img src={Pramuka} alt="" />
              <div className="teks">
                <h1>Leadership</h1>
              <p>I have organizational experience in the Scouts, where I actively participated in various activities, teamwork, and leadership training. This helped me develop responsibility, discipline, and strong collaboration skills.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
          whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
          exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
          transition={{ duration: 0.7, ease: "easeInOut" }} // 🔹 durasi + timing animasi
          viewport={{ once: true, amount: 0.2 }}// 🔹 animasi bisa bolak-balik (reverse)
          >
            <div className="experience-item">
              <img src={Pramuka} alt="" />
              <div className="teks">
                <h1>Leadership</h1>
              <p>I have organizational experience in the Scouts, where I actively participated in various activities, teamwork, and leadership training. This helped me develop responsibility, discipline, and strong collaboration skills.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
          whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
          exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
          transition={{ duration: 0.7, ease: "easeInOut" }} // 🔹 durasi + timing animasi
          viewport={{ once: true, amount: 0.2 }}// 🔹 animasi bisa bolak-balik (reverse)
          >
            <div className="experience-item">
              <img src={Pramuka} alt="" />
              <div className="teks">
                <h1>Leadership</h1>
              <p>I have organizational experience in the Scouts, where I actively participated in various activities, teamwork, and leadership training. This helped me develop responsibility, discipline, and strong collaboration skills.</p>
              </div>
            </div>
          </motion.div>
      
    
          
       </div>  
    </div>
  )
}

export default Experience