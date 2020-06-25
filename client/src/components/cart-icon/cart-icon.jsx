import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";


function CartIcon() {

    const itemCount = useSelector(state =>
        selectCartItemsCount(state)
    );
    const dispatch = useDispatch();
    const dispatchToggleCartHidden = () => {
        dispatch(toggleCartHidden())
    };

    return <>
        < div className="cart-icon" onClick={dispatchToggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div >
    </>
}

export default CartIcon;