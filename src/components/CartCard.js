import logo from '../assests/card.jpg'
import './CartCard.css'
const CartCard = ({products}) => {
    const {name , price}=products;
    return (
        <div className='cartCard'>
            <img src={logo} alt="Logo"/>
            <p className='productName'>${name}</p>
            <p className='productPrice'>${price}</p>
            <button>Remove</button>
        </div>)
}

export default CartCard