import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Offer = () => {
    return (
        <div className="partner_section_bg py-5">
            <div className="container py-lg-4">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="offer_text text-lg-start text-center">
                            <h1>Up to 40% Off</h1>
                            <p>
                                We collect and analyze information about your
                                general usage of the website, <br /> products,
                                services, and courses.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="button_area text-lg-end text-center">
                            <button className="btn btn-danger bg-gradient px-4 py-3 rounded-0">
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
    );
};

export default Offer;
