import React, { useContext } from 'react';
import './cart.css'
import { products } from '../../products';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';

import CartItem from './cartItem'


const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const handleCheckoutClick = () => {
    return alert("Payment transaction was sucessful!! Thank you for your purchase!");
  };

  return (
    <div className="cart">
      <p>Items added to the Cart</p>

      <div className="cart_item_added">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <CartItem data={product} />
            )
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total Price: € {totalAmount}</p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
          <button onClick={handleCheckoutClick}>Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <p>Cart is Empty </p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart