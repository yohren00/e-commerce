import React from "react";
import "./cart-item.styles.scss";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";


// function CartItem({ item: { imageUrl, price, name, quantity } }) {

//     return <>
//         <div className="cart-item">
//             <img src={imageUrl} alt="item" />
//             <div className="item-details">
//                 <span className="name">{name}</span>
//                 <span className="price">{quantity} x ${price}</span>
//             </div>
//         </div>
//     </>
// };

// export default CartItem;


function CartItem() {

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
                </div>
            )
        }
    </>
};

export default CartItem;