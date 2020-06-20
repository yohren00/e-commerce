import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeButton = ({ price }) => {
    const priceFroStripe = price * 100;
    const publishableKey = "pk_test_51GvysJD7BQfhdw00gPqi1FudlbK535VLTeZXim5XOTEtOsyxil8AVvVDB9DxuxSILWV3Y3MxlTHzfQezSBpb8l8m005dwXJ87f";

    const onToken = token => {
        console.log(token);
        alert("付款成功")
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