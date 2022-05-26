import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const imageUploadKey = "4890ef86cb137afcf283d9e2b184076a";
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const image = result.data.url;
                    const product = {
                        name: data.name,
                        price: data.price,
                        email: data.email,
                        about: data.about,
                        quantity: data.quantity,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        img: image,
                    };
                    fetch("https://samindustry.herokuapp.com/product", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((response) => response.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Successfully added");
                                reset();
                            }
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                }
            });
    };

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="m-lg-5">
                        <h1 className="text-center">Add New Product</h1>
                        <div className="py-3">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {/* PRODUCT NAME  */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        {...register("name", {
                                            required: true,
                                        })}
                                        className="rounded-0"
                                        type="text"
                                        placeholder="Enter name"
                                    />
                                </Form.Group>

                                {/* PRICE  */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        {...register("price", {
                                            required: true,
                                        })}
                                        className="rounded-0"
                                        type="number"
                                        placeholder="Enter name"
                                    />
                                </Form.Group>

                                {/* EMAIL */}
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        {...register("email", {
                                            required: true,
                                        })}
                                        required
                                        className="rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Minimum Order Quantity
                                    </Form.Label>
                                    <Form.Control
                                        {...register("minimumOrderQuantity", {
                                            required: true,
                                            min: {
                                                value: 1000,
                                                message:
                                                    "Minimum order quantity - 1000",
                                            },
                                            max: {
                                                value: 100000,
                                                message:
                                                    "Max Quantity - 100000",
                                            },
                                        })}
                                        className="rounded-0"
                                        type="number"
                                        placeholder="Minimum order quantity"
                                    />
                                </Form.Group>
                                <small>
                                    {errors.quantity?.type === "min" && (
                                        <span className=" text-danger">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                    {errors.quantity?.type === "max" && (
                                        <span className=" text-danger">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </small>
                                <Form.Group className="mb-3">
                                    <Form.Label>Max Quantity</Form.Label>
                                    <Form.Control
                                        {...register("quantity", {
                                            required: true,
                                            min: {
                                                value: 1000,
                                                message:
                                                    "Minimum order quantity - 1000",
                                            },
                                            max: {
                                                value: 100000,
                                                message:
                                                    "Max Quantity - 100000",
                                            },
                                        })}
                                        className="rounded-0"
                                        type="number"
                                        placeholder="Enter name"
                                    />
                                    {errors?.quantity?.type === "pattern" && (
                                        <small className="text-danger">
                                            {errors?.quantity.message}
                                        </small>
                                    )}
                                </Form.Group>
                                <small>
                                    {errors.quantity?.type === "min" && (
                                        <span className=" text-danger">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                    {errors.quantity?.type === "max" && (
                                        <span className=" text-danger">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </small>
                                {/* IMAGE        */}
                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.Control
                                        className="rounded-0"
                                        {...register("image", {
                                            required: true,
                                        })}
                                        type="file"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3 "
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        {...register("about", {
                                            required: true,
                                        })}
                                        className="rounded-0"
                                        as="textarea"
                                        rows={4}
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-danger rounded-0 w-100 py-2"
                                >
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
