import "./productcard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const { name, price, id, image } = product;
  const [available, setAvailable] = useState(false)
  const {  cartList,addToCart, removeFromCart} = useCart();
  useEffect(() => {
    const productIsInCart = cartList.find(cartItem=>cartItem.id === id);
    if (productIsInCart) {
      setAvailable(true);
    }
    else {
      setAvailable(false);
    }
  },[cartList,id])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {available?(<button className="remove" onClick={()  => removeFromCart(product)}>Remove</button>):(<button onClick={() => addToCart(product)}>Add To Cart</button> )}
      </div>
    </div>
  )
}
