import React from "react";
import partner1 from "../../Assets/images/partners/partner1.webp";
import partner2 from "../../Assets/images/partners/partner2.webp";
import partner3 from "../../Assets/images/partners/partner3.webp";
import partner4 from "../../Assets/images/partners/partner4.webp";
import partner5 from "../../Assets/images/partners/partner5.webp";

const Partnership = () => {
    return (
        <div className="partner_section_bg">
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-sm-row flex-sm-row-reverse justify-content-center align-items-center py-4">
                        <div className="p-5">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="p-5">
                            <img src={partner2} alt="" />
                        </div>
                        <div className="p-5">
                            <img src={partner3} alt="" />
                        </div>
                        <div className="p-5">
                            <img src={partner4} alt="" />
                        </div>
                        <div className="p-5">
                            <img src={partner5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnership;
