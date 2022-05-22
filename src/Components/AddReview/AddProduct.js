import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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
        reset();
    };

    return (
        <div className="add_review_section_bg">
            <div className="container">
                <div className="row">
                    <div className="my-lg-5">
                        <div className="py-lg-5">
                            <div className="py-5">
                                <div className="col-lg-5">
                                    <div className="m-lg-5">
                                        <h1 className="text-center">
                                            Add Review
                                        </h1>
                                        <div className="py-4">
                                            <Form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <Form.Group className="mb-3">
                                                    <Form.Label>
                                                        Your Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        {...register("name", {
                                                            required: true,
                                                        })}
                                                        className="rounded-0"
                                                        type="text"
                                                        placeholder="Enter name"
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>
                                                        Email address
                                                    </Form.Label>
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

                                                <Form.Group
                                                    className="mb-3 "
                                                    controlId="exampleForm.ControlTextarea1"
                                                >
                                                    <Form.Label>
                                                        Review
                                                    </Form.Label>
                                                    <Form.Control
                                                        {...register("dic", {
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
