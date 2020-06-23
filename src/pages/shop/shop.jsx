import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.jsx";
import Collection from "../collection/collection.jsx";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shop.action.js";
import WithSpinner from "../../components/with-spinner/with-spinner.jsx";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match }) => {
    useEffect(() => {
        componentDidMount()
    }, []);

    const [loading, setLoading] = useState(true);
    console.log("loading", loading)
    const dispatch = useDispatch();
    const dispatchUpdateCollections = collectionaMap => (
        dispatch(updateCollections(collectionaMap)));


    let unsubscribeFromAuth = null

    const componentDidMount = () => {
        const collectionRef = firestore.collection("collections");
        unsubscribeFromAuth = collectionRef.onSnapshot(async snapShot => {
            const collectionaMap = convertCollectionsSnapshotToMap(snapShot);
            console.log("collectionaMap", collectionaMap)
            dispatchUpdateCollections(collectionaMap);
            setLoading(false);
        })
    };


    return <>
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />} />
        </div>
    </>
};

export default Shop;


