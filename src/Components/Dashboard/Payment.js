import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";
const stripePromise = loadStripe(
    "pk_test_51L2vNMJH0mXagrhOdzLEhBYwbNjUZQy6o9TQRQP00TOEqz5YJutO7I2OjEflJDptHPmz9U3iLzgX9sBRtIlYTIB900kUiVeM24"
);

const Payment = () => {
    const { register, reset, handleSubmit } = useForm();
    const { paymentId } = useParams();
    const url = `http://localhost:5000/order/${paymentId}`;
    const { data: order, isLoading } = useQuery(["booking", paymentId], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    const {
        productName,
        totalPrice,
        userAddress,
        quantity,
        singlePrice,
        productImg,
    } = order;

    const onSubmit = (data) => {};
    return (
        <div>
            <div className="pt-5 mt-5">
                <div className="container">
                    <h1 className="text-center">Payment Page</h1>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mt-3">
                                <div className="p-5 shadow">
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm order={order} />
                                    </Elements>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="py-3">
                                <div className="card rounded-0">
                                    <img
                                        src={productImg}
                                        className="card-img-top rounded-0"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {productName}
                                        </h5>
                                        <p>
                                            <span className="d-block">
                                                Price : ${singlePrice}
                                            </span>
                                            <span className="d-block">
                                                Total Price : ${totalPrice},
                                            </span>
                                            <span className="d-block">
                                                Available Quantity : {quantity}
                                            </span>
                                            <span className="d-block">
                                                Address : {userAddress}
                                            </span>
                                            <small className="d-block">
                                                Minimum order quantity: {}
                                            </small>
                                        </p>
                                        <p className="card-text">
                                            <small>{}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
