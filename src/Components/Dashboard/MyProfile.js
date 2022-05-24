import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import blankProfile from "../../Assets/images/Blank_Profile.jpg";
import CustomLink from "../../Shared/CustomLink";

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { displayName, email, photoURL } = user;

    return (
        <div>
            <div className="container">
                <div className="py-3">
                    <h1 className="text-center">My Profile</h1>
                    <div className="divider mx-auto bg-danger mb-4"></div>
                    <div className="row ">
                        <div className=" col-lg-3">
                            <div className="user_photo p-4 ms-lg-auto">
                                <img
                                    src={photoURL || blankProfile}
                                    className="card-img-top w-100 rounded-0"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="card-body me-lg-auto">
                                <h5 className="card-title">{}</h5>
                                <div className="name_field position-relative">
                                    <p className="m-0">
                                        <b>
                                            <small>Name:</small>
                                        </b>
                                    </p>
                                    <h2 className="fw-light">{displayName}</h2>
                                    <button className="btn btn-outline-secondary text-dark rounded-0 position-absolute top-0 end-0">
                                        <CustomLink
                                            className="d-block"
                                            to="/dashboard/editProfile"
                                        >
                                            Edit Profile
                                        </CustomLink>
                                    </button>
                                </div>
                                <div className="email_field">
                                    <p className="m-0">
                                        <b>
                                            <small>Email:</small>
                                        </b>
                                    </p>
                                    <p>{email}</p>
                                </div>
                                <div className="address_field">
                                    <p className="m-0">
                                        <b>
                                            <small>Address: {}</small>
                                        </b>
                                    </p>
                                    <p>{}</p>
                                </div>
                                <div className="phoneNumber_field">
                                    <p className="m-0">
                                        <b>
                                            <small>Phone Number: {}</small>
                                        </b>
                                    </p>
                                    <p>{}</p>
                                </div>
                                <p className="card-text">
                                    <small>{}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
