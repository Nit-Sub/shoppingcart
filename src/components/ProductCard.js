import React from 'react'
import headphone from "../assests/card.jpg"
import './productcard.css'
const ProductCard = () => {
  return (
   <dic className='product'>
    <img src={headphone}/>
    <p>Title</p>
    <div className='action'>
        <span className='price'>
            price
        </span>
        <button className='button'>
            Add To Cart
        </button>
    </div>
   </dic>
  )
}

export default ProductCard