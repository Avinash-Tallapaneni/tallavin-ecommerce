import React, { createContext, useState } from 'react'
import { products } from '../products';
import Product from '../pages/shop/product/Product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    // for (const value in products) {
    //     console.log(value.id)
    // }

    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (prop) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (id) => {
        setCartItems((prev) => ({
            ...prev, [id]: prev[id] + 1
        }))
    }
    const removeToCart = (id) => {
        setCartItems((prev) => ({
            ...prev, [id]: prev[id] - 1
        }))
    }

    const getProductQuantity = (newValue, id) => {
        setCartItems(prev => ({ ...prev, [id]: newValue }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find(product => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    const contextValue = { cartItems, addToCart, removeToCart, getProductQuantity, getTotalAmount }
    return (
        <ShopContext.Provider value={contextValue}>{prop.children}</ShopContext.Provider>
    )
}
