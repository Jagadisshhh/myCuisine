import React from 'react'
import './Menu.css'
import {menu_list} from '../../assets/assets'

const Menu = (props) => {
  return (
    <div className='menu' id='menu'>
        <h1>Explore from our menu!</h1>
        <div className="menu-list">
            {menu_list.map((item) => (
                <div onClick={() => props.setFilter((prevFilter) => prevFilter === item.menu_name ?  "All": `${item.menu_name}`)} className='menu-item' key={item.menu_name}>
                     <img src={item.menu_image} alt="" />
                     <p className='menu-name'>{item.menu_name}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Menu
