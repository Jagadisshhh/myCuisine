import React,{useContext, useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import SignUpBtn from '../SignUpBtn/SignUpBtn'
import { CartContext } from '../../Context/CartContex'

import {assets} from './../../assets/assets.js'

const Nav = ({setModalShow}) => {
  const [activate, setActivate] = useState("home")
  const {cartItems,errorMsg,setErrorMsg} = useContext(CartContext)

  function logout() {
    setErrorMsg(prevState => ({
      ...prevState, 
      login: false
    }))
  }

  return (
    <div className='navbar'>
        <div className="logo">
          <Link to="/" ><h1>my<span>Cuisine</span></h1></Link>
          
        </div>
        <div className="links">
          <ul>
            <Link to='/' onClick={() => setActivate("home")} className={activate === "home" ? "active" :  "" }><a>Home</a></Link>
            <a href="/#menu" onClick={() => setActivate("menu")} className={activate === "menu" ? "active" : "" }>Menu</a>
            {/* <a href="#" onClick={() => setActivate("app")} className={activate === "app" ? "active" : "" }><a>Mobile App</a></a> */}
            <a href="#footer" onClick={() => setActivate("contact")} className={activate === "contact" ? "active" : "" }><a>Contact Us</a></a>
          </ul>
        </div>
        <div className="right">
          <Link to="/cart" onClick={() => setActivate("")}><a><p>Cart{Object.keys(cartItems).length === 0 ? <></> : "🔴"} </p></a></Link>
          
          {/* <SignUpBtn setModalShow={setModalShow} text={"Sign In"} /> */}
          
          {errorMsg.login ? <img onClick={logout} className='logout-btn' src={assets.logout_icon} alt="" /> : <button onClick={() => setModalShow(true)} >Sign In</button>}
        </div>
    </div>
  )
}

export default Nav
