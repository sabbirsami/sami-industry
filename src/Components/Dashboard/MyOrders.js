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
    const [deletingOrder, setDeletingOrder] = useState();
    const handleClose = () => setShow(false);
    const handleModalOpen = (id) => {
        setShow(true);
        setDeletingOrder(id);
    };
    const handleConfirm = (id) => {
        handleDelete(id);
    };

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(
                `https://samindustry.herokuapp.com/order?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
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
    }, [orders]);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://samindustry.herokuapp.com/order/${id}`, {
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
                handleClose();
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
                    <Modal.Header
                        className="border-0"
                        closeButton
                    ></Modal.Header>
                    <Modal.Body className="text-center">
                        Are you sure? you want to{" "}
                        <span className="text-danger">Cancel Order</span>
                    </Modal.Body>
                    <Modal.Footer className="border-0 text-center justify-content-center pb-5">
                        <Button
                            className="rounded-0 btn-outline-success alert-success py-2 px-5"
                            variant="secondary"
                            onClick={handleClose}
                        >
                            No
                        </Button>
                        <Button
                            className="rounded-0 btn-danger py-2 px-5"
                            variant="primary"
                            onClick={() => handleConfirm(deletingOrder)}
                        >
                            Yes
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
                            <th>Cancel / Pending</th>
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
                                    {order.totalPrice && order.paid && (
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
                                    {order.paid ? (
                                        <button
                                            onClick={() =>
                                                handleModalOpen(order._id)
                                            }
                                            className="btn alert-success w-100 rounded-0 m-0"
                                        >
                                            Pending..
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleModalOpen(order._id)
                                            }
                                            className="btn btn-danger w-100 rounded-0 m-0"
                                        >
                                            Cancel
                                        </button>
                                    )}
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
