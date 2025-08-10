import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>EV-olution</div>
        <div className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Explore</li>
            <li className='nav-contact'>Contact</li>
        </div>

    </div>
  )
}

export default Navbar