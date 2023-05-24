import React from 'react'
import { products } from '../../products'
import Product from './product/Product';
import './product/product.css'

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop_header">
                <h3>Latest products on display</h3>
            </div>
            <div className="shop_products">
                {products.map((product) => <Product key={product.id} data={product} />)}
            </div>
        </div>
    )
}

export default Shop