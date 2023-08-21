import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart)
    const handleDeleteFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleDeleteFromCart={handleDeleteFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-proceed' >
                            Proceed CheckOut
                            <FontAwesomeIcon className='proceed-icon' icon={faCreditCard} />
                            </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;