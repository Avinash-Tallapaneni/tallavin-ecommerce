import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext'

const CartItem = (props) => {
    const { id, title, price, thumbnail } = props.data;
    const { cartItems, addToCart, removeToCart, getProductQuantity, getTotalAmount } = useContext(ShopContext)
    return (
        <div className='cart_items'>
            <img src={thumbnail} alt="" />

            <div className="cart_details">
                <div className="title">
                    <p> {title}</p>
                </div>
                <div className="price">
                    <p> € {price}</p>
                </div>
                <div className="cart_item_quantity">
                    <button onClick={() => removeToCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={event => getProductQuantity(Number(event.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem