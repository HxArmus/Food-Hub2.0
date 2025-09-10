import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer-content">
            <div className="Footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, placeat? Unde et quo natus temporibus assumenda dolorem fugiat, corrupti commodi</p>
                <div className="Footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>


            </div>
            <div className="Footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    <li></li>
                </ul>


                
            </div>
            <div className="Footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-313-123-3425</li>
                    <li>contact@Food-Hub.com</li>


                </ul>


                
            </div>
        </div>
<hr />
<p className='Footer-Copyright'> Copyright 2025  * Food-Hub.com - All Right Reserved</p>

    </div>
  )
}

export default Footer