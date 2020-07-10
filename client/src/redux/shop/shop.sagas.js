import { takeEvery, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.type";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils.js";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.action.js";

export function* fetchCollecionsAsync() {
    yield console.log("I am fired");

    try {
        const collectionRef = firestore.collection("collections");
        console.log(collectionRef.get())
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }
};

export function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollecionsAsync
    );
};