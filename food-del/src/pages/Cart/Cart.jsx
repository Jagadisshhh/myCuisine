import React,{useContext} from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';

import { CartContext } from '../../Context/CartContex';

function deleteItem(id,setCartItems) {
  setCartItems((prevCartItems) => {
    delete prevCartItems[id];
    return {...prevCartItems};
  })
}

function CartItem({_id,name,price,image,cartItems,setCartItems}) {
  return (
      <>
        <div className="cart-item">
          <div className="img-div">
            <img src={image} alt="" />
            <p>{name} </p>
          </div>
          <div className="content">
              
              <p>₹{price} </p>
              <p>x{cartItems[_id]} </p>
              <p>₹{price*cartItems[_id]} </p>
              <p onClick={() => deleteItem(_id,setCartItems)}>X</p>
          </div>
        </div>
        <hr />  
      </>
  )
}

// function subTotal(food_list,cartItems) {
//   food_list.map((item) => {
    
//   })
// }

const Cart = () => {
  const {food_list,cartItems,setCartItems} = useContext(CartContext);
  // const [subTotal, setSubTotal] = useState("0");

  let sum = 0;

  const cart = food_list.map((item,index) => {
    if(cartItems[item._id] > 0) {
      // setSubTotal(prevTotal => prevTotal + (cartItems[item._id] * item.price))
      sum = sum + (cartItems[item._id] * item.price)
    }
    return (cartItems[item._id] > 0 && <CartItem key={index} {...item} cartItems={cartItems} setCartItems={setCartItems} />)
  })

  return (
    <div className='cart mx-auto my-4'>
      <div className='cart-section'>
        <h1 className='text-center mb-3' >Item Cart</h1>
        {cart}
      </div>
      <div className="order-section">
        <h2 className='text-center mb-2'>Order Summary</h2>
        <hr />
        <div className="order-details">
          <div>
            <p>Total Items:  </p>
            <span>{Object.keys(cartItems).length}</span>
          </div>
          <div>
            <p>SubTotal: </p>
            <span>₹{sum}</span>
          </div>
          {sum === 0 ? <></> :
          <div>
            <p>Delivery Fee:</p>
            <span>₹30</span>
          </div>}
          <hr />
          <div><p>Total: </p>
          {sum === 0 ? <span>₹0</span> : <span>₹{sum+30}</span>}
          </div>
          {/* <button className='py-2'>CHECKOUT</button> */}
          <Button className='login-btn py-2'>CHECKOUT</Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
