import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import quote from "../../Assets/images/quote-right-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="review_section_bg text-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="py-lg-5">
                            <div className="pt-3">
                                <div className="review_content py-5 text-lg-start text-center">
                                    <h1>
                                        Take a look our <br /> Client{" "}
                                        <span className="bg-light py-0 px-1 text-dark">
                                            Reviews
                                        </span>
                                    </h1>
                                    <p>
                                        Waters make fish every without firmament
                                        saw had. <br /> Morning air subdue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 text-white">
                        <div className="p-4">
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper text-white"
                            >
                                <div className="bg-light">
                                    {reviews.map((review) => (
                                        <SwiperSlide key={review._id}>
                                            <div className="p-5">
                                                <div className="reviews p-lg-5 ">
                                                    <img
                                                        className="change-icon-color text-light d-lg-block ms-auto pe-lg-5"
                                                        src={quote}
                                                        alt=""
                                                    />
                                                    <h1 className="pt-3">
                                                        {review.name}
                                                    </h1>
                                                    <p>{review.dic}</p>
                                                    <div>
                                                        <label>
                                                            <span className="bg-light px-3 py-2 rounded-pill">
                                                                <span className="text-dark pe-1">
                                                                    {
                                                                        review.ratingValue
                                                                    }
                                                                </span>
                                                                <FontAwesomeIcon
                                                                    className="star"
                                                                    icon={
                                                                        faStar
                                                                    }
                                                                    color={
                                                                        review.ratingValue
                                                                            ? "#ffc107"
                                                                            : "#ffc107"
                                                                    }
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
