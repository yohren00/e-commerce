import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import "./checkout-item.styles.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { clearCartItem, removeItem, addItem } from "../../redux/cart/cart.actions.js";



const CheckoutItem = () => {
    const cartItems = useSelector(state => selectCartItems(state));

    const dispatch = useDispatch();
    const dispatchClearCartItem = CartItem => {
        dispatch(clearCartItem(CartItem))
    };
    const dispatchRemoveItem = CartItem => {
        dispatch(removeItem(CartItem))
    };
    const dispatchAddItem = CartItem => {
        dispatch(addItem(CartItem))
    };

    return <>
        {
            cartItems.map(cartItem => {
                const { id, imageUrl, name, quantity, price } = cartItem;
                return (
                    <div key={id} className="checkout-item">
                        <div className="image-container">
                            <img src={imageUrl} alt="item"></img>
                        </div>
                        <span className="name">{name}</span>
                        <span className="quantity">
                            <span className="left" onClick={() => dispatchRemoveItem(cartItem)}>&#10096;</span>
                            {quantity}
                            <span className="right" onClick={() => dispatchAddItem(cartItem)}>&#10097;</span>
                        </span>
                        <span className="price">{price}</span>
                        <div className="remove-button" onClick={() => dispatchClearCartItem()}>&#10006;</div>
                    </div>
                )
            })
        }
    </>
};

export default CheckoutItem;