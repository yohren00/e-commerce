import React from "react";
import "./custom-button.styles.scss";


export default function CustomButton({ children, isGoogleSignIn, ...otherPorps }) {
    return <>
        <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherPorps}>
            {children}
        </button>
    </>
}