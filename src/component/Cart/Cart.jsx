
import React from 'react';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // console.log(cart)
    // const cart = props.cart; //option-1
    // const {cart} = props; //option-2

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const gradTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shopping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${gradTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
               <span>Clear Cart</span> 
               <FontAwesomeIcon className='btn-clear' icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default Cart;