import React from 'react'
import './Navbar.css'
import dark_logo from '../assets/dark-puma-logo.png'
import light_logo from '../assets/light-puma-logo.jpg'
import search_bar_light from '../assets/search-bar-light.png'
import search_bar_dark from '../assets/Search-Bar.png'
import light_theme from '../assets/light-theme-logo.png'
import dark_theme from '../assets/dark-theme-logo.png'


const Navbar = ({theme,setTheme}) => {

    const toggle = () =>{

        theme == 'light' ? setTheme('dark') : setTheme('light'); 

    }

  return (
    <div className='navbar'>
        
        <img className="logo" src={theme == 'light' ? light_logo : dark_logo} alt="" />
    
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Register</li>
        </ul>

        <div className="search-input">
            <input type='text' placeholder='search space'></input>
            <img src={theme == 'light' ? search_bar_light : search_bar_dark} alt="" />
        </div>

        
        <img onClick={() => {toggle()}} src={theme == 'light' ? light_theme :dark_theme} alt="" className='toggle-icon'/>

    </div>

)
}

export default Navbar