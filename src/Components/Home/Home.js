import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OurTeam from "./OurTeam";
import Partnership from "./Partnership";
import ProductsHome from "./ProductsHome";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partnership></Partnership>
            <ProductsHome></ProductsHome>
            <Review></Review>
            <OurTeam></OurTeam>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;
