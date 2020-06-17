import React from "react";
import CustomButton from "../custcom-button/custom-button.jsx";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.jsx";
import { useSelector } from "react-redux";

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

function CartDropdown() {


    return <>
        <div className="cart-dropdown">
            <div className="cart-items">
                <CartItem />
            </div>
            <CustomButton>查看購物車</CustomButton>
        </div>
    </>
};

export default CartDropdown;