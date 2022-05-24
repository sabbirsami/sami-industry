import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
    const { paymentId } = useParams();
    return (
        <div>
            <h2>Payment Id: {paymentId}</h2>
        </div>
    );
};

export default Payment;
