import React from "react";
import PageTitle from "../Shared/PageTitle";

const Blogs = () => {
    return (
        <div className="pt-5 mt-5">
            <PageTitle title="Blogs"></PageTitle>
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
