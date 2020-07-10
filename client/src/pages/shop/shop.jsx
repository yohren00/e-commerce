import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.jsx";
import Collection from "../collection/collection.jsx";
import { fetchCollectionsStart } from "../../redux/shop/shop.action.js";
import WithSpinner from "../../components/with-spinner/with-spinner.jsx";
import { selectIsCollectionFetching, selectCollectionsLoaded } from "../../redux/shop/shop.selectors.js";



const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match }) => {

    useEffect(() => {
        componentDidMount()
    }, []);

    const isCollectionFetching = useSelector(state => selectIsCollectionFetching(state));
    const isCollectionsLoaded = useSelector(state => selectCollectionsLoaded(state));

    const dispatch = useDispatch();
    const dispatchUpdateCollections = () => (
        dispatch(fetchCollectionsStart()));


    const componentDidMount = () => {
        dispatchUpdateCollections();
    };


    return <>
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        </div>
    </>
};

export default Shop;


