import {createContext, useState} from 'react';
// import { Food_list } from '../assets/assets';

export const CartContext = createContext(null);

export default function CartContextProvider(props) {
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({
        1:1,
        2:4,
    });
    const [errorMsg, setErrorMsg] = useState({
        detail : "",
        status : "",
        login : false 
    });
    
    function addToCart(id) {
        // const filter = cartItems.filter(item => item.id === id);
        !cartItems[id] ?  
        setCartItems(prevCartItems => (
            {...prevCartItems , 
                [id] : 1,
            }
        )) :
        setCartItems((prevCartItems) => {
            // return prevCartItems.map((item) => {
            //     return item.id === id ? { id : cartItems[id]+1} : item
            // })
            return {...prevCartItems, [id] : prevCartItems[id] +1, }
        })
    }

    function removeFromCart(id) {
        setCartItems(prevCartItems => {
            const newCartItems = { ...prevCartItems };
            if (newCartItems[id] > 1) {
                newCartItems[id] -= 1;
            } else {
                delete newCartItems[id];
            }
            return newCartItems;
        });

    }

    
    return (
        <CartContext.Provider value={{food_list, setFoodList,cartItems, setCartItems,addToCart,removeFromCart,errorMsg, setErrorMsg}}>
            {props.children}
        </CartContext.Provider>
    )
}