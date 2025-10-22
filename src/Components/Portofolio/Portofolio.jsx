import React, { useEffect, useState } from 'react'
import './Portofolio.css'
import CardSwap, { Card } from '../Effect/CardSwap'
import Tictac from '../../assets/Tictac.png'
import Astrix from '../../assets/Astrix.png'
import Hasbooy from '../../assets/HASBOYTECH.png'
import ScrollFloat from '../Effect/ScrollFloat';

const Portofolio = () => {
  const [swap, setSwap] = useState("tampilan default");
  useEffect(() => {
    const updateSwap = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSwap( <CardSwap
            cardDistance={40}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={false}
            >
            <Card>
            <img src={Tictac} alt="" />
            </Card>
            <Card>
            <img src={Astrix} alt="" />
            </Card>
            <Card>
            <img src={Hasbooy} alt="" />
            </Card>
        </CardSwap>);
      } else {
        setSwap( <CardSwap
            cardDistance={0}
            verticalDistance={40}
            delay={3000}
            pauseOnHover={false}
            >
            <Card>
            <img src={Tictac} alt="" />
            </Card>
            <Card>
            <img src={Astrix} alt="" />
            </Card>
            <Card>
            <img src={Hasbooy} alt="" />
            </Card>
        </CardSwap>);
      }
    }
    updateSwap(); // jalankan sekali di awal
    window.addEventListener("resize", updateSwap);
    return () => window.removeEventListener("resize", updateSwap);
  }, []);
  return (
    <div id='portofolio' className='Portofolio' style={{ height: '700px', position: 'relative' }}>
      <div className="tekss">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.02}
          >            
          Portofolio
          
         </ScrollFloat>
         <p>This is my portfolio, which showcases my experiences, achievements, and works as a representation of my skills.</p>
         <a href="https://github.com/Hasboy15S">Github</a>
      </div>
        
        <div className="cardswapp">
           {swap}
        </div>
  
</div>
  )
}

export default Portofolio