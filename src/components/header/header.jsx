import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils.js";

export default function Header({ currentUser }) {
    return <>
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option">CONTACT</Link>
                <Link className="option">CART</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    </>
}