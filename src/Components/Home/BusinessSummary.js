import { faFlag, faThumbsUp, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSummary = () => {
    return (
        <div className="pb-3 businessSummary">
            <div className="container">
                <div className="py-lg-4 py-2">
                    <div className="product_content pt-5">
                        <h1 className="text-center w-lg-50 w-sm-0 mx-auto">
                            Millions Business Trust Us
                        </h1>
                        <p className="text-danger text-center fs-5">
                            USERS EXPECTATION
                        </p>
                    </div>
                    <div className="business_section py-4 ">
                        <div className="business_content py-4  ">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className=" d-flex justify-content-center align-items-center text-center">
                                        <FontAwesomeIcon
                                            icon={faFlag}
                                            style={{
                                                color: "#d63031",
                                                fontSize: "60px",
                                            }}
                                        />
                                        <div className="text ps-3">
                                            <h1 className=" m-0">32+</h1>
                                            <p className="m-0 p-0 text-danger">
                                                Countries
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className=" d-flex justify-content-center align-items-center text-center">
                                        <FontAwesomeIcon
                                            icon={faThumbsUp}
                                            style={{
                                                color: "#d63031",
                                                fontSize: "60px",
                                            }}
                                        />
                                        <div className="text ps-3">
                                            <h1 className=" m-0">32+</h1>
                                            <p className="m-0 p-0 text-danger">
                                                Feedbacks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className=" d-flex justify-content-center align-items-center text-center">
                                        <FontAwesomeIcon
                                            icon={faThumbsUp}
                                            style={{
                                                color: "#d63031",
                                                fontSize: "60px",
                                            }}
                                        />
                                        <div className="text ps-3">
                                            <h1 className=" m-0">32+</h1>
                                            <p className="m-0 p-0 text-danger">
                                                Feedbacks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className=" d-flex justify-content-center align-items-center text-center">
                                        <FontAwesomeIcon
                                            icon={faUsers}
                                            style={{
                                                color: "#d63031",
                                                fontSize: "60px",
                                            }}
                                        />
                                        <div className="text ps-3">
                                            <h1 className=" m-0">32+</h1>
                                            <p className="m-0 p-0 text-danger">
                                                Happy Clients
                                            </p>
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

export default BusinessSummary;
