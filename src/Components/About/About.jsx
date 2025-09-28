import React from 'react'
import './About.css'
import Profil2 from '../../assets/Profil2.jpg'
import ScrollFloat from './ScrollFloat';
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";

function About() {
    return (
    <div className='about' id='abt'>
        <div className="about-title">
            <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.02}
            >
            About Me?
            </ScrollFloat>
        </div>
        <div className="about-section">
            <motion.div
        initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
        whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
        exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
        transition={{ duration: 0.8, ease: "easeInOut" }} // 🔹 durasi + timing animasi
        viewport={{ once: false, amount: 0.2 }}
        className="about-leftt" // 🔹 animasi bisa bolak-balik (reverse)
      >
        <img src={Profil2} alt=""/>
      </motion.div>
            <div className="about-right">
                <div className="about-para">
                    <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={10}
                    blurStrength={50}
                    >
                    Im a motivated student with strong organizational and public speaking skills,
                     and a passion for taking on challenges. Experienced in the Scouting organization,
                      where I developed problem-solving abilities and effective communication with diverse 
                      stakeholders. Possess foundational skills in video editing and graphic design. Highly 
                      eager to expand my knowledge, contribute to team success, and gain valuable professional 
                      experience.
                    </ScrollReveal>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "70%"}}/></div>  
                </div>

            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>5+</h1>
                <p>EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>5+</h1>
                <p>PROJECT EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>5+</h1>
                <p>ORGANIZATION EXPERIENCE</p>
            </div>
        </div>
         <motion.div
        initial={{ opacity: 0, y: 50 }}       // 🔹 posisi awal (belum terlihat)
        whileInView={{ opacity: 1, y: 0 }}    // 🔹 animasi saat masuk viewport
        exit={{ opacity: 0, y: 50 }}          // 🔹 animasi saat keluar viewport
        transition={{ duration: 0.8, ease: "easeInOut" }} // 🔹 durasi + timing animasi
        viewport={{ once: false, amount: 0.2 }} // 🔹 animasi bisa bolak-balik (reverse)
      >
        <h1>About Section</h1>
        <p>Dengan Framer Motion, animasi bisa auto reverse 🔄</p>
      </motion.div>
    </div>
  )
}

export default About