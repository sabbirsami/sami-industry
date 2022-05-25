import React, { useState } from "react";

import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AddReview = () => {
    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const { register, reset, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const { displayName, email, photoURL } = user;

    const onSubmit = async (data) => {
        fetch("https://samindustry.herokuapp.com/review", {
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
                                                        readOnly
                                                        value={displayName}
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
                                                        value={email}
                                                        readOnly
                                                        required
                                                        className="rounded-0"
                                                        type="email"
                                                        placeholder="Enter email"
                                                    />
                                                </Form.Group>
                                                <div>
                                                    {[...Array(5)].map(
                                                        (star, index) => {
                                                            const ratingValue =
                                                                index + 1;
                                                            return (
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="rating"
                                                                        value={
                                                                            ratingValue
                                                                        }
                                                                        {...register(
                                                                            "ratingValue",
                                                                            {
                                                                                required: true,
                                                                            }
                                                                        )}
                                                                        onClick={() =>
                                                                            setRating(
                                                                                ratingValue
                                                                            )
                                                                        }
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        className="star"
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color={
                                                                            ratingValue <=
                                                                            (hoverRating ||
                                                                                rating)
                                                                                ? "#ffc107"
                                                                                : "#e4e5e9"
                                                                        }
                                                                        onMouseOver={() =>
                                                                            setHoverRating(
                                                                                ratingValue
                                                                            )
                                                                        }
                                                                        onMouseOut={() =>
                                                                            setHoverRating(
                                                                                null
                                                                            )
                                                                        }
                                                                    />
                                                                </label>
                                                            );
                                                        }
                                                    )}
                                                </div>

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

export default AddReview;
