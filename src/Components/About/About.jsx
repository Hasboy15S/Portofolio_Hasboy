import React from 'react'
import './About.css'
import Profil2 from '../../assets/Profil2.jpg';
import ScrollFloat from '../Effect/ScrollFloat';
import ScrollReveal from '../Effect/ScrollReveal';
import { motion } from "framer-motion";
import AM from '../../assets/AM.png';
import ARDUINO from '../../assets/ARDUINO.png';
import CSHAP from '../../assets/CSHAP.png';
import CSS from '../../assets/CSS.png';
import FIGMA from '../../assets/FIGMA.png';
import HTML from '../../assets/HTML.png';
import JAVASCRIPT from '../../assets/JAVASCRIPT.png';
import PHP from '../../assets/PHP.png';
import REACT from '../../assets/REACT.png';
import PixelCard from '../Effect/PixelCard';

function About() {
    return (
        <div className='tes'>
            <div className='title'>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
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
                        AboutMe?
                    </ScrollFloat>
                </motion.div>
            </div>

            <div className='about' id='about'>
                <div className="about-section">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="about-leftt"
                    >
                        <PixelCard variant="yellow">
                            <img src={Profil2} alt="Profile" className='img' />
                        </PixelCard>
                    </motion.div>

                    <div className="about-right">
                        <div className="about-para">
                            <div className="imgabt">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <img src={Profil2} alt="Profile" />
                                </motion.div>
                            </div>

                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={10}
                                blurStrength={50}
                            >
                                I'm a motivated student with strong organizational and public speaking skills,
                                and a passion for taking on challenges. Experienced in the Scouting organization,
                                where I developed problem-solving abilities and effective communication with diverse
                                stakeholders. Possess foundational skills in video editing and graphic design. Highly
                                eager to expand my knowledge, contribute to team success, and gain valuable professional
                                experience.
                            </ScrollReveal>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="about-skil"
                        >
                            <h1>My-Skills?</h1>
                            <div className="about-skills">
                                <div className="about-skill cursor-target"><img src={AM} alt="Adobe Audition" /></div>
                                <div className="about-skill cursor-target"><img src={ARDUINO} alt="Arduino" /></div>
                                <div className="about-skill cursor-target"><img src={CSHAP} alt="C Sharp" /></div>
                                <div className="about-skill cursor-target"><img src={CSS} alt="CSS" /></div>
                                <div className="about-skill cursor-target"><img src={FIGMA} alt="Figma" /></div>
                                <div className="about-skill cursor-target"><img src={HTML} alt="HTML" /></div>
                                <div className="about-skill cursor-target"><img src={JAVASCRIPT} alt="JavaScript" /></div>
                                <div className="about-skill cursor-target"><img src={PHP} alt="PHP" /></div>
                                <div className="about-skill cursor-target"><img src={REACT} alt="React" /></div>
                            </div>
                        </motion.div>
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
            </div>
        </div>
    )
}

export default About