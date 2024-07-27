import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Explore Menu/Menu'
import FoodList from '../../components/Food List/FoodList'
// import Card from '../../components/Dish Card/Card'

const Home = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Header />
      <Menu setFilter = {setFilter} />
      <FoodList filter={filter} />
      {/* <Card /> */}
    </div>
  )
}

export default Home
