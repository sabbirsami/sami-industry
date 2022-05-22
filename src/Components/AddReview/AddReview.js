import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddReview = () => {
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
                                            <Form>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>
                                                        Your Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        className="rounded-0"
                                                        type="email"
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

export default AddReview;
