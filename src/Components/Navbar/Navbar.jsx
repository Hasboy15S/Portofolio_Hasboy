import React from 'react'
import'./Navbar.css'
import MENU from '../../assets/MENU.png'
import CLOSE from '../../assets/CLOSE.png'
import {useState, useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar(){
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-400px";
  }
  return (
    <div className='navbar'>
        <div className='logo'><h1>HAS</h1><h2>BOY</h2></div>
        <img src={MENU} alt="" onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className="navmenu">
            <img src={CLOSE} alt="" className='nav-mob-close' onClick={closeMenu} />
            <li><AnchorLink className='anchor-link' offset={0} href='#home'><a href="" className='cursor-target'>Home</a></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><a href="" className='cursor-target'>About</a></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><a href="" className='cursor-target'>Experience</a></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#portofolio'><a href="" className='cursor-target'>Portofolio</a></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><a href="" className='cursor-target'>Contact</a></AnchorLink></li>
        </ul>
        <div className="navconect">
            <a href="">Connect with me?</a>
        </div>
    </div>
  )
}

export default Navbar