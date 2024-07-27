import React from 'react'
import './Header.css'

import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="content" data-aos="fade-up" data-aos-duration="1000">
        <h2>Hungryy?</h2>
        <h2>Grab your food</h2>
        <p>Discover the magic of gourmet cuisine from farm-fresh produce to expertly crafted dishes, our commitment to quality shines through in every bite. Whether you're dining in or ordering out, let us elevate your meal with our signature touch.</p>
        <button>View Menu</button>
      </div>
      <img src={assets.delivery_boy} data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"/>
    </div>
  )
}

export default Header
