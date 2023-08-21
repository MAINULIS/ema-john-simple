import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({product, handleDeleteFromCart}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-items'>
            <img src={img} alt="cart-product img" />
            <div className='review-details'>
                <p className='title'>{name}</p>
                <p>Price: <span className='amount'>${price}</span></p>
                <p>Order Quantity: <span className='amount'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleDeleteFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='btn-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItems;