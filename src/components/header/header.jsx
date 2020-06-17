import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx";

function Header() {

    const currentUser = useSelector(state => state.user.currentUser);
    const hidden = useSelector(state => state.cart.hidden);
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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    </>
};

export default Header;

// function Header({ currentUser }) {

//     console.log(currentUser)
//     return <>
//         <div className="header">
//             <Link className="logo-container" to="/">
//                 <Logo></Logo>
//             </Link>
//             <div className="options">
//                 <Link className="option" to="/shop">SHOP</Link>
//                 <Link className="option">CONTACT</Link>
//                 <Link className="option">CART</Link>
//                 {
//                     currentUser ?
//                         <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
//                         :
//                         <Link className="option" to="/signin">SIGN IN</Link>
//                 }
//             </div>
//         </div>
//     </>
// };

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// export default connect(mapStateToProps)(Header);