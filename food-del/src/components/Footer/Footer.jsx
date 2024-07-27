import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets.js'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-div">
        <div className="footer-div-left">
            <div className='footer-logo' >my<span>Cuisine</span></div>
            
            <p>No. 55 Sy No 8 to 14 I & J Block - Ground</p>
            <p>Floor Embassy Tech Village | Outer Ring</p>
            <p>Road Devarbisanahalli Varthur</p>
            <p>Bengaluru - 560130</p>
        </div>
        <div className="footer-div-center">
            <p>OUR FOODVERSE NOW AT:</p>
            <div>
                <ul>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Durgapur</li>
                    <li>Kolkata</li>
                    <li>Pune</li>
                </ul>
            </div>
        </div>
        <div className="footer-div-right">
            <p>SOCIALS</p>
            <div className='social-icons'>
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
            <p>© 2024 myCuisine Limited</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
