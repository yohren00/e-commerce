import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custcom-button/custom-button.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";

export default function CollectionItem({ item }) {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    const dispatchAddItems = item => {
        dispatch(addItem(item))
    };

    return <>
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => dispatchAddItems(item)} inverted>加入購物車</CustomButton>
        </div>
    </>
}