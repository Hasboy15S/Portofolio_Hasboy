import React from 'react'
import'./Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><h1>HAS</h1><h2>BOY</h2></div>
        <ul className="navmenu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Portofolio</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="navconect">
            <a href="">Connect with me?</a>
        </div>
    </div>
  )
}

export default Navbar