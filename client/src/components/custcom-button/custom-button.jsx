import React from "react";
import "./custom-button.styles.scss";


export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherPorps }) {
    return <>
        <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherPorps}>
            {children}
        </button>
    </>
}