import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Project = () => {
    return (
        <div>
            <div className="pt-5 mt-5">
                <div className="container" style={{ height: "93vh" }}>
                    <div className="pt-5">
                        <p>
                            Project 01:{" "}
                            <a
                                href="https://farmi-organic.web.app/"
                                target={"_blank"}
                            >
                                Farmi Organic
                            </a>
                        </p>
                        <p>
                            Project 02:{" "}
                            <a
                                href="https://ss-photography-2022.web.app/"
                                target={"_blank"}
                            >
                                SS Photography
                            </a>
                        </p>
                        <p>
                            Project 03:{" "}
                            <a
                                href="https://dream-bag-shop.netlify.app/blogs"
                                target={"_blank"}
                            >
                                Dream Bag
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
