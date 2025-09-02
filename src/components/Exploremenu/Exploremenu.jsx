import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category, setCategory}) => {
  return (
    <div  className='Exploremenu' id='Exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='Exploremenu-text'>Discover a variety of delicious dishes crafted with the freshest ingredients.</p>
        <div className='Exploremenu-list'>
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev=>prev===item.menu_name ? 'all' : item.menu_name)} className='Exploremenu-list-item' key={index}>
                <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.name} />

                <p>{item.menu_name}</p>

            </div>
            )
          })}

        </div>
        <hr />
    </div>
  )
}

export default Exploremenu