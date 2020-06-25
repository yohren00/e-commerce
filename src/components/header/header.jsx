import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';

import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";


function Header() {

    const currentUser = useSelector(state => selectCurrentUser(state));
    const hidden = useSelector(state => selectCartHidden(state));

    return <>
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                {/* <Link className="option">CONTACT</Link> */}
                <Link className="option" to="/checkout">CART</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    </>
};

export default Header;
