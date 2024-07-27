import React, {useContext, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import Navv from './components/Navbar/Nav'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Ordering/Order'
import Footer from './components/Footer/Footer'
import { CartContext } from './Context/CartContex'
import Login from './components/Login/Login'


function App() {
  const {food_list,setFoodList,errorMsg,setErrorMsg} = useContext(CartContext);
  const [modalShow, setModalShow] = React.useState(false);
  
  useEffect(() => {
    fetch('http://localhost:8000/api/get-list/')
    .then(response => response.json())
    .then(data => {
        if(data.status === "Succesfull") {
          setFoodList(data.List)
        }
        else {
            console.error(data.status, "JAGADISH MSG")
        }
    })
    .catch(e => console.error("Cannot fetch the list - JAGADISH MSG", e))
  },[])
  console.log(food_list)

  return (
    <div className="App">
        <Login setModalShow={setModalShow}
          show={modalShow}
          onHide={() => setModalShow(() => {
            setErrorMsg(prevState => {
              return {
                ...prevState, 
                detail : "",
                login: false
              }
            })
            return false;
          })}
        />
        <Navv setModalShow={setModalShow} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
