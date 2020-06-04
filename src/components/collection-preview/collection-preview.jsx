import React from "react";
import "./collection-preview.styles.scss";
import CollentionItem from "../collention-item/collention-item.jsx";

export default function CollentionPreview({ title, items }) {

    return <>
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...itemProps }) => (
                        <CollentionItem key={id} {...itemProps} />
                    ))}
            </div>
        </div>
    </>
}