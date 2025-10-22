import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import TargetCursor from './TargetCursor';
import Experience from './Components/Experience/Experience';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';
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
    <Experience/>
    </div>
    </>
  )
}

export default App