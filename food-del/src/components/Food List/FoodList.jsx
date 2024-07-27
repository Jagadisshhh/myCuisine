import React,{useContext} from 'react'
import './FoodList.css'
import Card from '../Dish Card/Card'
import { CartContext } from '../../Context/CartContex'

const FoodList = (props) => {
    const {food_list} = useContext(CartContext)
    const filteredItems = food_list.filter(item => item.category === props.filter);

    return (
        <div className='food-list'>
            <h1>Dishes you can't resist!</h1>
            <div className="cards">
                {props.filter === "All" ? food_list.map((item) => {
                    return (
                        <Card key={item._id} id={item._id} price={item.price} description={item.description} name={item.name} image={item.image} />
                    )
                }) : 
                filteredItems.map((item) => {
                    return (
                        <Card key={item._id} id={item._id} price={item.price} description={item.description} name={item.name} image={item.image} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default FoodList
