import React from 'react'
import headphone from "../assests/card.jpg"
import './productcard.css'
const ProductCard = ({product}) => {
    console.log(product)
  return (
   <dic className='product'>
    <img src={headphone} alt="Product"/>
    <p>{product.name}</p>
    <div className='action'>
        <span className='price'>
           $ {product.price}
        </span>
        <button className='button'>
            Add To Cart
        </button>
    </div>
   </dic>
  )
}

export default ProductCard