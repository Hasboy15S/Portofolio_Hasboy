import React from 'react'
import './Hero.css'
import Profil from '../../assets/Profil.png'
import SplitText from "../Effect/SplitText";
import AnimatedContent from '../Effect/AnimatedContent'
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
function Hero() {
  return (
    <div id='home' className='home'>
        <div className='Hero'>
            <AnimatedContent
            distance={70}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            delay={0.3}
            >
            <div className='img1'><img src={Profil} alt="" /></div>
            </AnimatedContent>
            <div className='txt'>
                
                <div className="text">
                  <div className='img2'><img src={Profil} alt="" /></div>
                    <SplitText
                    text="Hello, MyName Is Hasbi!"
                    className="name"
                    delay={100}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="none"
                    onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <h2>Im a <span>Junior Web Developer</span></h2>
                    <p>I am a student with a strong understanding of full-stack development, capable of working on both front-end and back-end technologies.</p>
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Hero