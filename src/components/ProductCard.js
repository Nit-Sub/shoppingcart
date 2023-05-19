import "./productcard.css";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const dispatch=useDispatch();
  const { name, price, id, image } = product;
  
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => dispatch(product)}>Add To Cart</button> 
      </div>
    </div>
  )
}
