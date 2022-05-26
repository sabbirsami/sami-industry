import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://samindustry.herokuapp.com/product").then((data) => {
            const newData = data.data;
            setProducts(newData);
        });
    }, []);
    return [products, setProducts];
};
export default useProducts;
