import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import profile from "../Assets/images/profile.jpg";
import html5 from "../Assets/images/icon-skill/html5-brands.svg";
import css from "../Assets/images/icon-skill/css3-brands.svg";
import js from "../Assets/images/icon-skill/js-brands.svg";
import nodejs from "../Assets/images/icon-skill/node-js-brands.svg";
import react from "../Assets/images/icon-skill/react-brands.svg";
import PageTitle from "../Shared/PageTitle";
import HeaderNavbar from "../Shared/HeaderNavbar/HeaderNavbar";
import Footer from "../Shared/Footer";

const MyPortfolio = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="pt-5 mt-4">
                <PageTitle title="My Portfolio -"></PageTitle>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="portfolio_img">
                                <img className="w-100" src={profile} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-lg-5">
                                <div className="ps-lg-4">
                                    <div className="portfolio_divider"></div>
                                    <div className="portfolio_content py-4">
                                        <div className="name">
                                            <h1 className="fw-light">
                                                Sabbir Mohammad Sami
                                            </h1>
                                            <p>
                                                <b>WEB DEVELOPER </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="portfolio_divider"></div>
                                    <div className="portfolio_content py-4">
                                        <div className="little_dic">
                                            <p>
                                                <span>
                                                    Study at :{" "}
                                                    <b>
                                                        Kabi Nazrul Govt.
                                                        College
                                                    </b>
                                                </span>
                                                <br />
                                                <span>
                                                    Cadet lance corporal :
                                                    <b>
                                                        Bangladesh national
                                                        cadet corps
                                                    </b>
                                                </span>
                                            </p>
                                            <p>
                                                I want to be a Web Developer. I
                                                work hard to reach my goal and I
                                                am fully focused on it because
                                                If you want to be a successful
                                                programmer you will have to be
                                                focused. So I decided to say
                                                focus on my goal. And I will do
                                                it.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="portfolio_divider"></div>
                                    <div className="portfolio_content py-4">
                                        <div className="skill">
                                            <p>
                                                Technologies or skills I have as
                                                a web developer :
                                            </p>
                                        </div>
                                    </div>

                                    <div className="portfolio_content d-flex">
                                        <div className="skill_icon pe-1">
                                            <div className="single_skill_icon shadow p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={html5}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={css}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={js}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={nodejs}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="skill_icon px-1">
                                            <div className="single_skill_icon shadow p-4 position-relative rounded-pill">
                                                <img
                                                    className="w-50 position-absolute top-50 start-50 translate-middle"
                                                    src={react}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio_divider mt-5"></div>
                                    <div className="py-4">
                                        <p>
                                            <Link
                                                className="text-danger link"
                                                to="/project"
                                            >
                                                Some project I already done.
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyPortfolio;
