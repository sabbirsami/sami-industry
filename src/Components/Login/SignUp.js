import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="m-5">
                    <div className="p-lg-5">
                        <div className="m-lg-5">
                            <h1 className="text-center">Sign Up</h1>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        className="rounded-0"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        className="rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        className="rounded-0"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-danger rounded-0 w-100 py-2"
                                >
                                    Sign Up
                                </button>
                            </Form>
                            <p className="text-center pt-3">
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                            <div className="divide d-flex align-items-center pb-3">
                                <div></div>
                                <p className="pt-3">OR</p>
                                <div></div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-outline-danger rounded-0 w-100 py-2"
                            >
                                <span className="pe-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-google"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg>
                                </span>{" "}
                                Sign Up with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
