import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext';

const Fooditem = ({id,name,price,description,image}) => {

 
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);



  return (
    <div className='Food-item'>
        <div className="Food-item-img-container">
        <img className="Food-item-img" src={image} alt="" />

        {
          !cartItems[id] ?
          <img className='add' src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)}/>:
          <div className="Food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt="" />


          </div>
        }
        
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