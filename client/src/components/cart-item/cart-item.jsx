import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import "./cart-item.styles.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { clearCartItem } from "../../redux/cart/cart.actions.js";



function CartItem() {

    const dispatch = useDispatch();
    const dispatchClearCartItem = CartItem => {
        dispatch(clearCartItem(CartItem))
    };

    const cartItem = useSelector(state => selectCartItems(state));

    return <>
        {
            cartItem.map(cartItem =>
                <div key={cartItem.id} className="cart-item">
                    <img src={cartItem.imageUrl} alt="item" />
                    <div className="item-details">
                        <span className="name">{cartItem.name}</span>
                        <span className="price">{cartItem.quantity} x ${cartItem.price}</span>
                    </div>
                    <div className="item-delect">
                        <span className="delect" onClick={() => dispatchClearCartItem(cartItem)}> &#10006;</span>
                    </div>
                </div>
            )
        }
    </>
};

export default CartItem;