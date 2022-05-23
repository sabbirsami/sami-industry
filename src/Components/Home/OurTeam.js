import React from "react";
import team1 from "../../Assets/images/team/xteam-1.jpg";
import team2 from "../../Assets/images/team/xteam-2.jpg";
import team3 from "../../Assets/images/team/xteam-3.jpg";
import team4 from "../../Assets/images/team/xteam-4.jpg";

const OurTeam = () => {
    return (
        <div className="partner_section_bg pb-5">
            <div className="container pb-5">
                <div className="row py-lg-5">
                    <div className="team_doc text-center py-5">
                        <h1>
                            Our{" "}
                            <span className="bg-dark py-0 px-2 text-light">
                                Professional
                            </span>
                            Team
                        </h1>
                        <p>
                            Separated they live in. A small river named Duden
                            flows by their place and <br /> supplies it with the
                            necessary regelialia. It is a paradisematic country
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="members text-center shadow">
                            <div className="member_image">
                                <img className="w-100" src={team1} alt="" />
                            </div>
                            <div className="text py-3">
                                <h4 className="">Daren Wilson</h4>
                                <p className="text-danger">HEAD ENGINEER</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="members text-center shadow">
                            <div className="member_image">
                                <img className="w-100" src={team3} alt="" />
                            </div>
                            <div className="text py-3">
                                <h4 className="">Eva Gustavo</h4>
                                <p className="text-danger">ASS. ENGINEER</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="members text-center shadow">
                            <div className="member_image">
                                <img className="w-100" src={team2} alt="" />
                            </div>
                            <div className="text py-3">
                                <h4 className="">Warren Parker</h4>
                                <p className="text-danger">ENGINEER</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="members text-center shadow">
                            <div className="member_image">
                                <img className="w-100" src={team4} alt="" />
                            </div>
                            <div className="text py-3">
                                <h4 className="">Mike Henderson</h4>
                                <p className="text-danger">ARCHITECT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
