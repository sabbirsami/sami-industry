import useProducts from "../../Hooks/useProducts";
import PageTitle from "../../Shared/PageTitle";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useProducts([]);
    return (
        <div className="pb-5">
            <PageTitle title="Products"></PageTitle>
            <div className="container">
                <div className="row">
                    <div className="pt-lg-5">
                        <div className="pt-5 pb-4">
                            <div className="product_content pt-5">
                                <p className="text-danger text-center fs-5">
                                    OUR PRODUCTS
                                </p>
                                <h1 className="text-center pb-5 col-lg-6 w-sm-0 px-lg-5 mx-auto">
                                    We provide all of your industrial solution
                                </h1>
                            </div>
                        </div>
                    </div>
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
