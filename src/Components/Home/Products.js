import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="pt-5">
                        <div className="product_content pt-5">
                            <p className="text-danger text-center fs-5">
                                OUR PRODUCTS
                            </p>
                            <h1 className="text-center w-50 w-sm-0 px-5 mx-auto">
                                We provide all of your industrial solution
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
