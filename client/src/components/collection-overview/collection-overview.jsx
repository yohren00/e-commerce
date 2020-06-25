import React from "react";
import { useSelector } from "react-redux";

import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.jsx";
import { selectCollctionArray } from "../../redux/shop/shop.selectors.js";


const CollectionOverview = ({ ...props }) => {
    const shopCollections = useSelector(state => selectCollctionArray(state));
    return <>
        <div className="collections-overview">
            <div>
                {
                    shopCollections.map(({ id, ...collectionProps }) => (
                        <CollectionPreview key={id} {...collectionProps} {...props} />
                    ))
                }
            </div>
        </div>
    </>
};

export default CollectionOverview;