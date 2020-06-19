import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems, selectorCartItemsTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/ckeckout-item/checkout-item.jsx";

import "./checkout.styles.scss";

const CheckoutPage = () => {
    // const cartItems = useSelector(state => selectCartItems(state));
    const total = useSelector(state => selectorCartItemsTotal(state));

    return <>
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>商品</span>
                </div>
                <div className="header-block">
                    <span>描述</span>
                </div>
                <div className="header-block">
                    <span>數量</span>
                </div>
                <div className="header-block">
                    <span>價格</span>
                </div>
                <div className="header-block">
                    <span>操作</span>
                </div>
            </div>
            {/* {
                cartItems.map(cartItem =>  cartItem.name)
            } */}
            <CheckoutItem />
            <div className="total">
                <span>總計: $ {total}</span>
            </div>
        </div>
    </>
};

export default CheckoutPage;