import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
    return (
        <div>
            <div class="header-area bg-gradient">
                <div class="header-top  black-bg d-none d-md-block">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-6 col-lg-6">
                                <div class="header-contact">
                                    <a>
                                        <i class="fa fa-phone"></i> +880 256 356
                                        256
                                    </a>
                                    <a>support@sami.industry.com</a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-6 col-lg-6">
                                <div class="header-top-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/blogs">
                                                    News & media
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="review.html">Review</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
