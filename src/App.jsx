import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Particles from './Particles';
import TargetCursor from './TargetCursor';
import './App.css'
const App = () => {
  return (
    <>
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <Navbar/>
    <Hero/>
    <About/>
    </div>
    
    </>
  )
}

export default App