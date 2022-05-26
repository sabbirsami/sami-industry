import React from "react";
import { Form } from "react-bootstrap";
import facebookIcon from "../../Assets/images/facebook-f-brands.svg";
import insta from "../../Assets/images/instagram-brands.svg";
import linkedin from "../../Assets/images/linkedin-in-brands.svg";
const Contact = () => {
    return (
        <div className="partner_section_bg py-5">
            <div className="py-lg-5">
                <div className="container">
                    <div className="text-center pb-5">
                        <h2>Contact Us</h2>
                        <p className="text-muted">
                            Any Question or remarks? Just write us a message!
                        </p>
                    </div>
                    <div className="contact_section p-2 shadow rounded-4 bg-white">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact_info rounded-4 text-light fw-light p-5">
                                    <div className="info_top py-4">
                                        <h4>Contact Information</h4>
                                        <p className="fw-light">
                                            Fill up the form and out Team will
                                            get back to you within 20 hours
                                        </p>
                                    </div>
                                    <div className="info_middle py-4">
                                        <p className="py-2">+0123 456 8910</p>
                                        <p className="py-2">
                                            support@sami.industry.com
                                        </p>
                                        <p className="py-2">
                                            102 Street 2714 Don{" "}
                                        </p>
                                    </div>
                                    <div className="info_bottom py-4 d-flex align-items-center">
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow bg-light p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={linkedin}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow bg-light p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={insta}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow position-relative bg-light p-4  rounded-pill">
                                                <img
                                                    className="w-25 position-absolute top-50 start-50 translate-middle"
                                                    src={facebookIcon}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form_section">
                                    <Form>
                                        <div className="p-5">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label className="">
                                                            First Name
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="border-bottom py-3 border-0"
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label className="">
                                                            First Name
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="border-bottom py-3 border-0"
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label className="">
                                                            Mail
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="border-bottom py-3 border-0"
                                                            type="text"
                                                            placeholder="name@example.com"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label className="">
                                                            Phone
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="border-bottom py-3 border-0"
                                                            type="text"
                                                            placeholder="+00xxxxxxx"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label className="">
                                                    Message
                                                </Form.Label>
                                                <Form.Control
                                                    className="border-bottom py-3 border-0"
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Write your message"
                                                />
                                            </Form.Group>
                                            <div className="submit_button text-end">
                                                <button className="btn btn-danger border-0 py-4 px-5 mt-3 dashboard-bg ">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
