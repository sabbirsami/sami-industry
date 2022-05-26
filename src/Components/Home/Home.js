import React from "react";
import PageTitle from "../../Shared/PageTitle";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Offer from "./Offer";
import OurTeam from "./OurTeam";
import Partnership from "./Partnership";
import ProductsHome from "./ProductsHome";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <PageTitle title=""></PageTitle>
            <Banner></Banner>
            <Partnership></Partnership>
            <ProductsHome></ProductsHome>
            <Review></Review>
            <OurTeam></OurTeam>
            <Offer></Offer>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;
