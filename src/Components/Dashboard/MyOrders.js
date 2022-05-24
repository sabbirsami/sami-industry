import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const MyOrders = () => {
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch("http://localhost:5000/order").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success(`Successfully deleted`, {
                    duration: 3000,
                });
                refetch();
            });
    };
    const handlePay = (id) => {
        console.log(id);
    };
    return (
        <div>
            <div className="p-3 table-responsive">
                <h2 className="pb-3">My Order</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>$ {order.totalPrice}</td>
                                <td className="p-0">
                                    <button
                                        onClick={() => handlePay(order._id)}
                                        className="btn btn-success w-100 rounded-0 m-0"
                                    >
                                        Pay
                                    </button>
                                </td>
                                <td className="p-0">
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-danger w-100 rounded-0 m-0"
                                    >
                                        Delete order
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

export default MyOrders;
