import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div className="Footer-content">
        
        {/* Left section */}
        <div className="Footer-content-left">
          <img src={assets.logo} alt="Food Hub Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, placeat? Unde et quo natus temporibus assumenda dolorem 
            fugiat, corrupti commodi.
          </p>
          <div className="Footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center section */}
        <div className="Footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="Footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-313-123-3425</li>
            <li>contact@Food-Hub.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='Footer-Copyright'>
        © 2025 Food-Hub.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
