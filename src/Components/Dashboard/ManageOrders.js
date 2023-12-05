import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageOrders = () => {
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
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch("https://sami-industry-server.vercel.app/orders", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    console.log(orders);

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleDelete = (id) => {
        fetch(`https://sami-industry-server.vercel.app/orders/${id}`, {
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
                handleClose();
            });
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
                <h2 className="pb-3">Manage Review</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Paid / Unpaid</th>
                            <th>Want to Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order?.userEmail}</td>
                                <td className="p-0">
                                    {order.paid ? (
                                        <button
                                            className="alert-success btn w-100 rounded-0 m-0 
                                        "
                                        >
                                            <span className="text-success">
                                                Paid
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            className="alert-warning btn w-100 rounded-0 m-0 
                                        "
                                        >
                                            <span className="text-success">
                                                Unpaid
                                            </span>
                                        </button>
                                    )}
                                </td>
                                <td className="p-0">
                                    <button
                                        disabled={order.paid}
                                        onClick={() =>
                                            handleModalOpen(order._id)
                                        }
                                        className="btn btn-danger w-100 rounded-0 m-0"
                                    >
                                        Delete Order
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

export default ManageOrders;
