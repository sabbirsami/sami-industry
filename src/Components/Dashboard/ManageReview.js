import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageReview = () => {
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
        data: reviews,
        isLoading,
        refetch,
    } = useQuery("products", () =>
        fetch("http://localhost:5000/review").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/review/${id}`, {
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
                            <th>Name</th>
                            <th>Review</th>
                            <th>Want to Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review._id}>
                                <td>{index + 1}</td>
                                <td>{review.name}</td>
                                <td>{review.dic}</td>
                                <td className="p-0">
                                    <button
                                        onClick={() =>
                                            handleModalOpen(review._id)
                                        }
                                        className="btn btn-danger w-100 rounded-0 m-0"
                                    >
                                        Delete Review
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

export default ManageReview;
