import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:5000/products").then((data) => {
            const newData = data.data;
            setProducts(newData);
            setProductLoading(false);
        });
    }, []);
    return [products, setProducts, productLoading];
};
export default useProducts;
