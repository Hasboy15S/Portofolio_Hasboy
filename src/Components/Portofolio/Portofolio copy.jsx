import React from 'react'
import './Portofolio.css'
import CardSwap, { Card } from './CardSwap'
import Tictac from '../../assets/Tictac.png'
import Astrix from '../../assets/Astrix.png'
import Hasbooy from '../../assets/HASBOYTECH.png'
const Portofolio = () => {
  return (
    <div id='portofolio' className='Portofoio' style={{ height: '700px', position: 'relative' }}>
        <div className="cardswapp">
           <CardSwap
            cardDistance={20}
            verticalDistance={30}
            delay={500}
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
        </CardSwap> 
        </div>
  
</div>
  )
}

export default Portofolio