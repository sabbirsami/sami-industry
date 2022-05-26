import React from "react";
import Footer from "../Shared/Footer";
import HeaderNavbar from "../Shared/HeaderNavbar/HeaderNavbar";
import PageTitle from "../Shared/PageTitle";

const Blogs = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="pt-5 mt-5">
                <PageTitle title="Blogs - "></PageTitle>
                <div className="container">
                    <div className="row">
                        <h2>Blogs</h2>
                        <div className="question_section py-5">
                            {/* <div className="question">
                                <h3>
                                    01. How will you improve the performance of
                                    a React Application?
                                </h3>
                                <p>...</p>
                            </div> */}
                            <div className="question">
                                <h3>
                                    02. How does prototypical inheritance work?
                                </h3>
                                <p>
                                    The Prototypal Inheritance is a feature of
                                    javascript. Which is use to add methods and
                                    properties in objects. By this method we can
                                    inherit the properties. Traditionally, in
                                    order to get and set the Prototype of an
                                    object, we use Object.getPrototypeOf and
                                    Object.
                                </p>
                            </div>
                            {/* <div className="question">
                                <h3>
                                    03. Why you do not set the state directly in
                                    React. For example, if you have{" "}
                                    <code>
                                        const [products, setProducts] =
                                        useState([])
                                    </code>
                                    . Why you do not{" "}
                                    <code>set products = [...]</code>
                                    instead, you use the{" "}
                                    <code>setProducts</code>?
                                </h3>
                                <p>
                                    The Prototypal Inheritance is a feature of
                                    javascript. Which is use to add methods and
                                    properties in objects. By this method we can
                                    inherit the properties. Traditionally, in
                                    order to get and set the Prototype of an
                                    object, we use Object.getPrototypeOf and
                                    Object.
                                </p>
                            </div> */}
                            {/* <div className="question">
                                <h3>
                                    04. What are the different ways to manage a
                                    state in a React application?
                                </h3>
                                <p>
                                    The Prototypal Inheritance is a feature of
                                    javascript. Which is use to add methods and
                                    properties in objects. By this method we can
                                    inherit the properties. Traditionally, in
                                    order to get and set the Prototype of an
                                    object, we use Object.getPrototypeOf and
                                    Object.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;
