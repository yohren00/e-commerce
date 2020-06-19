import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.jsx";
import Collection from "../collection/collection.jsx";


const Shop = ({ match }) => {
    console.log(match)

    return <>
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    </>
};

export default Shop;


