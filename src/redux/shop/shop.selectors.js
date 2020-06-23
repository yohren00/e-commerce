import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollctionArray = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollction = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

