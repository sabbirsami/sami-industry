import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
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

    const navigate = useNavigate();
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
