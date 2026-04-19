import React from 'react'
import ScrollFloat from '../Effect/ScrollFloat'
import './Experience.css'
import { motion } from 'framer-motion'
 
// =============================================
// ✏️  UBAH DATA DI SINI
// - title    : judul pengalaman
// - tag      : label kecil di atas judul (opsional, hapus baris jika tidak perlu)
// - description : paragraf penjelasan
// - image    : import gambar di atas, lalu masukkan variabelnya di sini
// - reverse  : true = gambar di kanan, false = gambar di kiri
// =============================================
 
import Pramuka from '../../assets/ORGANIZATION.png'
import Ai from '../../assets/Ai.png'
 
const experiences = [
  {
    id: 1,
    tag: 'Organization',
    title: 'Leadership',
    description:
      'I have organizational experience in the Scouts, where I actively participated in various activities, teamwork, and leadership training. This helped me develop responsibility, discipline, and strong collaboration skills.',
    image: Pramuka,
    reverse: false,
  },
  {
    id: 2,
    tag: 'Technology',
    title: 'Artificial Intelligence',
    description:
      'I explored AI tools and machine learning concepts through self-learning and projects. This sparked my passion for data-driven problem solving and building intelligent applications.',
    image: Ai,
    reverse: true,
  },
  // ➕ Tambah item baru di sini dengan format yang sama
]
 
// =============================================
// Jangan ubah bagian bawah ini
// =============================================
 
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}
 
function Experience() {
  return (
    <section id="experience" className="experiences">
      {/* Animated section title */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.02}
        >
          Experience
        </ScrollFloat>
      </motion.div>
 
      {/* Experience cards */}
      <div className="experience">
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`experience-item${item.reverse ? ' experience-item--reverse' : ''}`}>
              <img
                className="experience-item__image"
                src={item.image}
                alt={item.title}
              />
              <div className="teks">
                {item.tag && <span className="teks__tag">{item.tag}</span>}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience