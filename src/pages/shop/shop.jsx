import React, { useState } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.jsx";

export default function Shop() {
    const [shopdata, setShopdata] = useState(ShopData);
    console.log(shopdata);

    return <>
        <div className="shop-page">
            {
                shopdata.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>

    </>
}