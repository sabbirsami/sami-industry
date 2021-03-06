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
                            <div className="question">
                                <h3>
                                    01. How will you improve the performance of
                                    a React Application?
                                </h3>
                                <p>
                                    A React application may be made more
                                    efficient in a variety of ways. As an
                                    example, wherever possible, keep state of
                                    components local. Memorizing React
                                    components to avoid unwanted re-renders is
                                    also a good strategy. In addition, dynamic
                                    imports in React allow for code-splitting
                                    (). React's virtualization of windows or
                                    lists. In React, photos may be loaded in a
                                    'lazy' manner. Making Use of Structural
                                    Consistency. As many chunk files as you'd
                                    want
                                </p>
                            </div>
                            <div className="question">
                                <h3>
                                    02. What are the different ways to manage a
                                    state in a React application??
                                </h3>
                                <p>
                                    The four major forms of state you need to
                                    keep track of in your React projects are
                                    Local state, Global state, Server state, and
                                    URL state. A component's local state refers
                                    to the data it keeps. Managing local state
                                    in React is often accomplished via the usage
                                    of the useState hook. Additionally, for both
                                    local and global states, useReducer is an
                                    option that may be implemented in any way.
                                    Under the hood, it is quite similar to
                                    useState, except that it takes a reducer
                                    instead of a starting state. You'd need a
                                    local state for things like showing or
                                    hiding a modal component and keeping track
                                    of input data for forms that have been
                                    disabled. Data that is shared across
                                    different components is referred to as a
                                    global state. When data has to be accessed
                                    and updated across many parts of our
                                    program, we need to use a global state.
                                    Authenticated user state is a frequent
                                    example of a global state. To get or update
                                    data from an external server, you must
                                    handle a variety of states, including
                                    loading and error state.
                                </p>
                            </div>
                            <div className="question">
                                <h3>
                                    03. How does prototypical inheritance work?
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
                            <div className="question">
                                <h3>
                                    04. Why you do not set the state directly in
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
                                    Using setState allows you to move a state
                                    from one component to another without having
                                    to change the original. SetState is required
                                    for integrating an item into the current
                                    state (). Components that are stateful or
                                    stateless cannot be known by their parents
                                    and children, and they should not be
                                    concerned about whether or not they are
                                    defined as functions or classes. Any React
                                    component may have a state attached to it. A
                                    user action or a system event may cause the
                                    state of a component to change. If the
                                    component's state changes, React re-renders
                                    it. Before changing the state's value, it is
                                    important to create an initial state setup.
                                    To make changes to the object's current
                                    state, we use the setState() method. You may
                                    be sure that the component's current state
                                    has been maintained by requesting a
                                    re-render. If an asynchronous call is
                                    performed to change an object's state, it
                                    may not be updated on the console at the
                                    right time.
                                </p>
                            </div>
                            <div className="question">
                                <h3>
                                    05. You have an array of products. Each
                                    product has a name, price, description, etc.
                                    How will you implement a search to find
                                    products by name?
                                </h3>
                                <p>
                                    In order to discover a product by its name
                                    in an array, we will use array.find(). To
                                    get a truthy value, the callbackFn function
                                    is called once for each index in the array.
                                    If so, find returns the element's value
                                    instantly. Unless this is the case, find
                                    returns an error. For every index in the
                                    array, callbackFn is called, not only those
                                    that have been given values. If you use the
                                    callbackFn function offered by find, you may
                                    change the array that it is called on.
                                    Before the initial callbackFn activation,
                                    the items found by find are pre-set. Using
                                    Javascript's arr.find() function, you may
                                    obtain the value of the first member in an
                                    array that meets your criteria. If any of
                                    the array's items meet the criterion, the
                                    first one to meet it will print. Empty array
                                    items are not supported by this method, and
                                    it does not alter the original one.
                                </p>
                            </div>
                            <div className="question">
                                <h3>
                                    06. What is a unit test? Why should write
                                    unit tests?
                                </h3>
                                <p>
                                    Using JavaScript Unit Testing, a web page or
                                    web application module may be tested using
                                    JavaScript code. After that, it's included
                                    into the HTML as an inline event handler and
                                    tested in the browser to ensure that all of
                                    the needed features are available. These
                                    unit tests are then grouped together in a
                                    test suite for easy access. Unit testing in
                                    JavaScript is made easier by a variety of
                                    frameworks. The Unit.js library, for
                                    example, is a Javascript assertion library
                                    that runs on Node.js and the browser. For
                                    React and React Native web apps, Jest is a
                                    JavaScript-based open-source testing
                                    framework. With the Jest framework, this
                                    complexity may be greatly minimized. If
                                    you're using Mocha, Jasmine, Karma or
                                    protractor (a testing framework for Angular
                                    projects), you'll be able to use it with any
                                    of these frameworks. Node.js and
                                    browser-based test framework Mocha. Serial
                                    test execution in this framework simplifies
                                    asynchronous testing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;
