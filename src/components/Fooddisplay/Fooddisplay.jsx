import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../../context/Storecontext.jsx'
import Fooditem from '../Fooditem/Fooditem.jsx'

const Fooddisplay = ({category}) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='Food-display ' id='Food-display'>
      <h2>Top Dishes near you</h2>
      <div className="Food-display-list">
        {food_list.map((item,index)=>{
          if(category==='all'||category===item.category){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
