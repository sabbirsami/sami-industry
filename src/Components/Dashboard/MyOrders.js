import { Modal } from "react-bootstrap";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // handleShow();

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem("accessToken");
                        signOut(auth);
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => setOrders(data));
        }
    }, [user]);

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
                toast.success(`Cancel`, {
                    duration: 3000,
                });
            });
    };
    const handlePay = (id) => {
        console.log(id);
    };
    return (
        <div>
            {/* MODAL  */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Are you sure you want to cancel?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
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
                                    {!order.paid && (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button
                                                onClick={() =>
                                                    handlePay(order._id)
                                                }
                                                className="btn btn-success w-100 rounded-0 m-0"
                                            >
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                    {order.totalPrice && !order.paid && (
                                        <div>
                                            <p>
                                                <span className="text-success">
                                                    Paid
                                                </span>
                                            </p>
                                            <p>
                                                Transaction id:{" "}
                                                <span className="text-success">
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </td>
                                <td className="p-0">
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-danger w-100 rounded-0 m-0"
                                    >
                                        Cancel
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
