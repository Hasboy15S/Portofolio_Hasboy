import React from 'react'
import'./Navbar.css'
import MENU from '../../assets/MENU.png'
import CLOSE from '../../assets/CLOSE.png'
import {useState} from 'react'
function Navbar(){
  return (
    <div className='navbar'>
        <div className='logo'><h1>HAS</h1><h2>BOY</h2></div>
        <img src={MENU} alt="" className='nav-mob-open' />
        <ul  className="navmenu">
            <img src={CLOSE} alt="" className='nav-mob-close' />
            <li><a href="" className='cursor-target'>Home</a></li>
            <li><a href="" className='cursor-target'>About</a></li>
            <li><a href="" className='cursor-target'>Experience</a></li>
            <li><a href="" className='cursor-target'>Portofolio</a></li>
            <li><a href="" className='cursor-target'>Contact</a></li>
        </ul>
        <div className="navconect">
            <a href="">Connect with me?</a>
        </div>
    </div>
  )
}

export default Navbar