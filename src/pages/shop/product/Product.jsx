import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ShopContext } from '../../../context/shopcontext';


const Product = (props) => {
    const { id, title, description, price, thumbnail } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartAmount = cartItems[id]

    return (
        <div className="product_container">
            <div className="product_image"><img src={thumbnail} alt='product image' /></div>
            <div className="product_title">{title}</div>
            <div className="product_price">€ {price}</div>
            <div className="product_description">{description}</div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>{cartAmount > 0 ? `${cartAmount} In cart` : ""}<AiOutlineShoppingCart size={24} /> </button>

        </div>
    )
}

export default Product