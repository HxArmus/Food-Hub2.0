import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo}  className='logo' alt="" />
        <ul className='navbar-menu'>
          <li className='navbar-item'>Home</li>
          <li className='navbar-item'>Menu</li>
          <li className='navbar-item'>Mobile-app</li>
          <li className='navbar-item'>Contact us</li>
        </ul>
        <img src={assets.search_icon} className='search-icon' alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>

        </div>
        <button>sign in</button>

    </div>
  )
}

export default Navbar