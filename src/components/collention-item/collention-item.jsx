import React from "react";
import "./collection-item.styles.scss";

export default function CollentionItem({ id, name, image, price }) {

    return <>
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${image})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    </>
}