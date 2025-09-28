import React from 'react'
import'./Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><h1>HAS</h1><h2>BOY</h2></div>
        <ul className="navmenu">
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