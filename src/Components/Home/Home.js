import React from "react";
import Banner from "./Banner";
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
        </div>
    );
};

export default Home;
