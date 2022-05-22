import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

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
    return (
        <div className="col-lg-4">
            <div className="py-3">
                <div class="card rounded-0">
                    <img src={img} class="card-img-top rounded-0" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
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
                        <p class="card-text">
                            <small>{about}</small>
                        </p>
                        <Link
                            to="/purchase"
                            class="btn btn-outline-dark rounded-0"
                        >
                            Order Now{" "}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{
                                    color: "black",
                                    paddingLeft: "10px",
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
