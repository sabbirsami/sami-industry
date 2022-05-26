import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavLogo from "../Assets/images/logo.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="footer_section bg-light text-dark">
            <ScrollToTop smooth top="1000" />
            <div className="py-5">
                <div className="container">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-lg-2">
                                <h5 className="py-2">Information</h5>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Our Company
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Data
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Pricing
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Contact Us
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Support
                                </p>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="py-2">Application</h5>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Download
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Car Manufacturing
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    How to Buy
                                </p>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="py-2">API</h5>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Documentation
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Credential
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        style={{
                                            color: "light",
                                            paddingLeft: "10px",
                                        }}
                                    />{" "}
                                    Developer info
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-end">
                                    <img
                                        style={{ width: "200px" }}
                                        className="p-3"
                                        src={NavLogo}
                                        alt=""
                                    />
                                    <p className="p-3">
                                        Copyright ©2022 All rights reserved |
                                        This template is made with by
                                        SamiIndustry.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
