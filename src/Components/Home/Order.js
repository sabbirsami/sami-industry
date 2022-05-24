import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const Order = () => {
    const [user, loading] = useAuthState(auth);

    const { productId } = useParams();
    const { register, reset, handleSubmit } = useForm();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    const { price, img, name, about, quantity, minimumOrderQuantity } = product;

    if (loading) {
        return <Loading></Loading>;
    }

    let errorMessage;

    const onSubmit = (data) => {
        const quantityUserWant = parseInt(data.quantity);
        if (quantityUserWant < 1000 && quantityUserWant > 100000) {
            errorMessage = (
                <small className="text-danger">
                    Please give a valid number
                </small>
            );
        } else {
            const price = parseInt(product.price * data.quantity);
            const order = {
                userName: data.userName,
                productName: product.name,
                totalPrice: price,
                userAddress: data.address,
                quantity: data.quantity,
                singlePrice: product.price,
                userEmail: data.email,
            };
            console.log(order);
            fetch("http://localhost:5000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result) {
                        toast.success("Successfully added");
                        reset();
                    }

                    console.log("Success:", result);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };
    return (
        <div className="pt-5 mt-5">
            <div className="container">
                <h1 className="text-center">Order Page</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="px-4">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            {...register("userName", {
                                                required: true,
                                            })}
                                            className="rounded-0"
                                            type="text"
                                            value={user.displayName}
                                            readOnly
                                            placeholder="Your name"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridEmail"
                                    >
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            {...register("email", {
                                                required: true,
                                            })}
                                            value={user?.email || ""}
                                            readOnly
                                            required
                                            className="rounded-0"
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        {...register("address", {
                                            required: true,
                                        })}
                                        type="text"
                                        placeholder="1234 Main St"
                                        className="rounded-0"
                                    />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} className="mb-3">
                                        <Form.Label>
                                            Quantity you want
                                        </Form.Label>
                                        <Form.Control
                                            {...register("quantity", {
                                                required: true,
                                                min: 1000,
                                                max: 100000,
                                            })}
                                            className="rounded-0"
                                            type="number"
                                            placeholder="Enter Quantity"
                                        />
                                        {errorMessage}
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridCity"
                                    >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            {...register("city", {
                                                required: true,
                                            })}
                                            type="text"
                                            className="rounded-0"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridZip"
                                    >
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control
                                            {...register("zip", {
                                                required: true,
                                            })}
                                            type="number"
                                            className="rounded-0"
                                        />
                                    </Form.Group>
                                </Row>

                                <Button
                                    className="btn btn-danger rounded-0 w-100 py-2"
                                    type="submit"
                                >
                                    Order
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="py-3">
                            <div class="card rounded-0">
                                <img
                                    src={img}
                                    class="card-img-top rounded-0"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <p>
                                        <span>
                                            <b>Price : ${price},</b>
                                        </span>
                                        <span className="ps-2">
                                            <b>
                                                Available Quantity : {quantity}
                                            </b>
                                        </span>
                                        <small className="d-block">
                                            Minimum order quantity:{" "}
                                            {minimumOrderQuantity}
                                        </small>
                                    </p>
                                    <p class="card-text">
                                        <small>{about}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
