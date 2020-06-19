import { CartActionTypes } from "./cart.type.js";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = itmes => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itmes
});

export const clearCartItem = item => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});