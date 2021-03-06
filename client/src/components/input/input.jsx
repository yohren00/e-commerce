import React from "react";
import "./input.styles.scss";

export default function Input({ handleChange, label, ...otherProps }) {

    return <>
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ?
                    (<label
                        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
                    >
                        {label}
                    </label>)
                    :
                    null
            }
            {/* <labe className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</labe> */}
        </div>
    </>
}