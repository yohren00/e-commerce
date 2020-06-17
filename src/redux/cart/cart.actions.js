import { CartActionTypes } from "./cart.type.js";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = itmes => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itmes
});