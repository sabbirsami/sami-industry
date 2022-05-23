import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const Order = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const { productId } = useParams();
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const { price, img, name, about, quantity, minimumOrderQuantity } = product;

    const onSubmit = (data) => {};
    return (
        <div className="pt-5 mt-5">
            <div className="container">
                <h1 className="text-center">Order Page</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="px-4">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            {...register("name", {
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
                                        <Form.Label>Quantity</Form.Label>
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
                                    variant="primary"
                                    type="submit"
                                >
                                    Submit
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
