import React from "react";
import "./input.styles.scss";

export default function Input({ handleChange, label, ...otherProps }) {

    console.log({ ...otherProps })

    return <>
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {/* {
                label ?
                    (<labe
                        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
                    >
                        {label}
                    </labe>) : null
            } */}
            <labe className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</labe>
        </div>
    </>
}