import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "./Product";
import DownArrow from "../../Assets/images/right-arrow.png";

const ProductsHome = () => {
    const [products, setProducts] = useProducts([]);

    return (
        <div className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="pt-5 pb-4">
                        <div className="product_content pt-5">
                            <p className="text-danger text-center fs-5">
                                OUR PRODUCTS
                            </p>
                            <h1 className="text-center pb-5  w-50 w-sm-0 px-5 mx-auto">
                                We provide all of your industrial solution
                            </h1>
                        </div>
                    </div>
                    {products.slice(0, 6).map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                    <div className="text-center">
                        <button class="btn mx-auto btn-outline-white border-0 rounded-0">
                            <Link to="/products" className="nav-link">
                                Show All Product{" "}
                                <p className="p-0 m-0 w-75 mx-auto">
                                    {" "}
                                    <img
                                        className="w-25"
                                        src={DownArrow}
                                        alt=""
                                    />
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsHome;
