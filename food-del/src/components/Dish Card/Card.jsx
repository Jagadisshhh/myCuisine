import React, {useContext} from 'react'
import './Card.css'

import { CartContext } from './../../Context/CartContex'

const Card = (props) => {
    // const [itemCount, setItemCount] = useState(0)

    const {cartItems, setCartItems,addToCart,removeFromCart} = useContext(CartContext);

    // function addToCart() {
    //     const filter = cartItems.filter(item => item.id === props.id);
    //     filter.length == 0 ?  
    //     setCartItems(prevCartItems => (
    //         [...prevCartItems , 
    //             {   
    //                 id : props.id,
    //                 name : props.name,
    //                 price : props.price,
    //                 count : itemCount,
    //             }
    //         ]
    //     )) :
    //     setCartItems((prevCartItems) => {
    //         return prevCartItems.map((item) => {
    //             return item.id === props.id ? {...item, count : itemCount} : item
    //         })
    //     })
    // }

    

  return (
    <div className='dish-card'>
        <div className="img">
            <img  className='item-img' src={`${props.image}`} alt="" />
            { 
                !cartItems[props.id] ? <div className='increment-div' onClick={() => addToCart(props.id)} >+</div> : 
                <div className='count-buttons' >
                    <button className='decrement' onClick={() => removeFromCart(props.id)}>-</button>
                    <span className="count">{cartItems[props.id]}</span>
                    <button className='increment' onClick={() => addToCart(props.id)}>+</button>
                    {/* <button className="add-to-cart" onClick={() => {addToCart(props.id,itemCount)}} >Add To Cart</button> */}
                </div>
            }
        </div>
        <div className="info">
            <h2 className="name">{props.name}</h2>
            <p className="desc">{props.description} </p>
            <p className="price">₹{props.price} </p>
        </div>
    </div>
  )
}

export default Card
