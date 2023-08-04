
import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    // const cart = props.cart; //option-1
    // const {cart} = props; //option-2

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
      const tax = totalPrice*7/100;
      const gradTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
             <h5>Order summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shopping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${gradTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;