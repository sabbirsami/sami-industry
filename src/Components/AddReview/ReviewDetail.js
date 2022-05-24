import React from "react";
import quote from "../../Assets/images/chat-left-quote-fill.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ReviewDetail = ({ review }) => {
    return (
        <div className="bg-light">
            <SwiperSlide>
                <div className="p-5">
                    <div className="reviews p-lg-5">
                        <img className="change-icon-color" src={quote} alt="" />
                        <h1 className="pt-3">{review.name}</h1>
                        <p>{review.dic}</p>
                        <div>
                            {/* {review?.ratingValue.map(
                                                            (star) => (
                                                                <label>
                                                                    <FontAwesomeIcon
                                                                        className="star"
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color={
                                                                            review.ratingValue
                                                                                ? "#ffc107"
                                                                                : "#e4e5e9"
                                                                        }
                                                                    />
                                                                </label>
                                                            )
                                                        )} */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </div>
    );
};

export default ReviewDetail;
