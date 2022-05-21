import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../Shared/style.css";

const Banner = () => {
    return (
        <div className="banner_section_bg">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="my-5 p-5">
                            <div className="banner_content bg-light my-5">
                                <p className="text-danger">
                                    Quality work. Trustable service. Dedicated
                                    team
                                </p>
                                <h1 className="fs-7">
                                    We provide your Industrial solution
                                </h1>
                                <button className="banner_button btn btn-danger bg-gradient px-4 py-3 rounded-0">
                                    Our Services{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        style={{
                                            color: "white",
                                            paddingLeft: "10px",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
