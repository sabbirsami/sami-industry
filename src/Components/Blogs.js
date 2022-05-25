import React from "react";
import DeleteModal from "../Shared/DeleteModal";

const Blogs = () => {
    return (
        <div className="pt-5 mt-5">
            <div className="container">
                <div className="row">
                    <h2>Blogs</h2>
                    <div className="question_section py-5">
                        <div className="question">
                            <h3>
                                How will you improve the performance of a React
                                Application?
                            </h3>
                        </div>
                        <DeleteModal></DeleteModal>
                        <div className="answer">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
