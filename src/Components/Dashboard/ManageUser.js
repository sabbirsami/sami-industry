import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const ManageUser = () => {
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
        data: users,
        isLoading,
        refetch,
    } = useQuery("products", () =>
        fetch(`https://samindustry.herokuapp.com/user`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    const makeAdmin = (email) => {
        fetch(`https://samindustry.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error(`Failed to make an admin`, {
                        duration: 3000,
                    });
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success(`Make Admin Successfully `, {
                        duration: 3000,
                    });
                    refetch();
                }
            });
    };
    const handleDelete = (id) => {
        fetch(`https://samindustry.herokuapp.com/user/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(`Successfully deleted`, {
                    duration: 3000,
                });
                refetch();
                handleClose();
            });
    };
    return (
        <div className="">
            {/* MODAL  */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header
                        className="border-0"
                        closeButton
                    ></Modal.Header>
                    <Modal.Body className="text-center">
                        Are you sure? you want to{" "}
                        <span className="text-danger">Remove User</span>
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
            <div className="p-lg-3">
                <h2 className="pb-3 table-responsive">Manage User</h2>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td className="p-0">
                                    {user.role ? (
                                        <button className="btn w-100 alert-success text-success disabled rounded-0">
                                            Admin
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                makeAdmin(user.email)
                                            }
                                            className="btn btn-success w-100 rounded-0 m-0"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td className="p-0">
                                    <button
                                        onClick={() =>
                                            handleModalOpen(user._id)
                                        }
                                        className="btn btn-danger w-100 rounded-0 m-0"
                                    >
                                        Remove
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

export default ManageUser;
