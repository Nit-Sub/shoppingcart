import React from 'react'
import './cart.css'
import CartCard from '../components/CartCard'
import { useTitle } from '../hook/useTitle'
const Cart = () => {
    const products = [
        {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
        {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
      ]
      useTitle("Cart")
    return (
        <main>
        <section className="cart">
          <h1>Cart Items: {products.length}</h1>
          {products.map((data)=><CartCard products={data} key={data.id}/>)}
           </section>
      </main>
  
    )
}

export default Cart