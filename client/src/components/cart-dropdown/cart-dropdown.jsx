import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import "./cart-dropdown.styles.scss";

import CustomButton from "../custcom-button/custom-button.jsx";
import CartItem from "../cart-item/cart-item.jsx";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItems, selectorCartItemsTotal } from "../../redux/cart/cart.selectors";


// function CartDropdown() {

//     const cartItem = useSelector(state => state.cart.cartItems);

//     return <>
//         <div className="cart-dropdown">
//             <div className="cart-items">
//                 {
//                     cartItem.map(cartItem =>
//                         <CartItem key={cartItem.id} item={cartItem} />
//                     )
//                 }
//             </div>
//             <CustomButton>查看購物車</CustomButton>
//         </div>
//     </>
// };

// export default CartDropdown;

function CartDropdown({ history }) {

    const cartItem = useSelector(state => selectCartItems(state));
    const dispatch = useDispatch();
    const dispatchToggleCartHidden = () => {
        dispatch(toggleCartHidden())
    };

    return <>
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItem.length ?
                        <CartItem />
                        :
                        <span className="empty-message">購物車是空的</span>
                }

            </div>
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatchToggleCartHidden();
            }}>
                查看購物車
            </CustomButton>

        </div>
    </>
};

export default withRouter(CartDropdown);