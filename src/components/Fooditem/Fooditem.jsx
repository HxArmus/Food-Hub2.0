import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,price,description,image}) => {
  return (
    <div className='Food-item'>
        <div className="Food-item-img-container">
        <img className="Food-item-img"src={image} alt="" />
        </div>
         <div className='Food-item-info'>
            <div className="Food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='Food-item-desc'>{description}</p>
            <p className="Food-item-price">${price}</p>
         </div>
       


    </div>
  )
}

export default Fooditem