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
                            <i class="fa-solid fa-moon"></i>
                            <FontAwesomeIcon icon="fa-solid fa-moon" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
