import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";

const ManageProduct = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/product").then((res) => res.json())
    );
    return (
        <div>
            <div className="p-3">
                <h2 className="pb-3">Manage Product</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Want to Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td className="p-0">
                                    <button className="btn btn-danger w-100 rounded-0 m-0">
                                        Delete Product
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProduct;
