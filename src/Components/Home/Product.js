import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Shared/Loading";

const Product = ({ product }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);

    const {
        id,
        price,
        img,
        email,
        name,
        about,
        quantity,
        supplier,
        minimumOrderQuantity,
    } = product;

    const navigateToPurchase = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="col-lg-4">
            <div className="py-3">
                <div className="card rounded-0">
                    <img
                        src={img}
                        className="card-img-top rounded-0"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>
                            <span>
                                <b>Price : ${price},</b>
                            </span>
                            <span className="ps-2">
                                <b>Available Quantity : {quantity}</b>
                            </span>
                            <small className="d-block">
                                Minimum order quantity: {minimumOrderQuantity}
                            </small>
                        </p>
                        <p className="card-text">
                            <small>{about}</small>
                        </p>

                        {admin ? (
                            <button
                                disabled
                                onClick={() => navigateToPurchase(product._id)}
                                className="btn btn-outline-dark rounded-0"
                            >
                                Order Now{" "}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{
                                        color: "black",
                                        paddingLeft: "10px",
                                    }}
                                />
                            </button>
                        ) : (
                            <button
                                onClick={() => navigateToPurchase(product._id)}
                                className="btn btn-outline-dark rounded-0"
                            >
                                Order Now{" "}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{
                                        color: "black",
                                        paddingLeft: "10px",
                                    }}
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
