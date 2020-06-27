import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useDispatch } from "react-redux";

import { clearCartAllItem } from "../../redux/cart/cart.actions.js";


const StripeButton = ({ price }) => {

    const dispatch = useDispatch();
    const dispatchclearCartAllItem = () => {
        dispatch(clearCartAllItem())
    };

    const priceFroStripe = price * 100;

    const publishableKey = "pk_test_51GvysJD7BQfhdw00gPqi1FudlbK535VLTeZXim5XOTEtOsyxil8AVvVDB9DxuxSILWV3Y3MxlTHzfQezSBpb8l8m005dwXJ87f";

    const onToken = token => {
        axios({
            url: "http://localhost:5000/payment",
            method: "post",
            data: {
                amount: priceFroStripe,
                token
            }
        }).then(response => {
            console.log(response)
            alert("成功付款");
            dispatchclearCartAllItem();
        }).catch(error => {
            console.log("付款失敗：", error.response);
            alert(
                "付款失敗，請確認信用卡資訊是否有誤"
            )
        })
    };

    return <>
        <StripeCheckout
            label="結帳"
            name="測試用"
            billingAddress
            shippingAddress
            image=""
            description={`金額是 $${price}`}
            amount={priceFroStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    </>
};

export default StripeButton;