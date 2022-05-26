import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Sami Industry</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;
