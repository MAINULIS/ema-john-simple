import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h3>This is order section</h3>
            </div>
            <div className='cart-container'>
            <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;