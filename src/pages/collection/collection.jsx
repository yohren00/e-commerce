import React from "react";
import { useSelector } from "react-redux";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.jsx";
import { selectCollction } from "../../redux/shop/shop.selectors.js";

const Collection = ({ match }) => {
    const collection = useSelector((state) => selectCollction(match.params.collectionId)(state));
    const { title, items } = collection;
    return <>
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    </>
};

export default Collection;