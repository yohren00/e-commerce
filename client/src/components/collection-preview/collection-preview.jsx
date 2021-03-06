import React from "react";
import { Link } from "react-router-dom";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.jsx";

export default function CollectionPreview({ title, items, match }) {
    return <>

        <div className="collection-preview">
            <Link to={`${match.path}/${title.toLowerCase()}`}>
                <h1 className="title">{title.toUpperCase()}</h1>
            </Link>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    </>
}