//eslint-disable-nextlin
import './ProductCard.css'

export const ProductCard = ({product,image}) => {
  const {name, price} = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}
