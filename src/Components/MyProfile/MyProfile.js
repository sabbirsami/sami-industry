import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import blankProfile from "../../Assets/images/Blank_Profile.jpg";

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const { displayName, email, photoURL } = user;

    return (
        <div>
            <div className="container">
                <div className="py-3">
                    <h1 className="text-center">My Profile</h1>
                    <div className="divider mx-auto bg-danger mb-4"></div>
                    <div className="row ">
                        <div class=" col-lg-6">
                            <div className="user_photo p-4 ms-lg-auto">
                                <img
                                    src={photoURL || blankProfile}
                                    class="card-img-top w-100 rounded-0"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card-body me-lg-auto">
                                <h5 class="card-title">{}</h5>
                                <div className="name_field">
                                    <p className="m-0">
                                        <b>
                                            <small>Name:</small>
                                        </b>
                                    </p>
                                    <h1>{displayName}</h1>
                                </div>
                                <div className="email_field">
                                    <p className="m-0">
                                        <b>
                                            <small>Email:</small>
                                        </b>
                                    </p>
                                    <h4>{email}</h4>
                                </div>
                                <p class="card-text">
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
