import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageUser = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("products", () =>
        fetch(`http://localhost:5000/user`, {
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
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // toast.success(`Successfully deleted`, {
                //     duration: 3000,
                // });
            });
    };
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
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
            });
    };
    return (
        <div className="">
            <div className="p-lg-3">
                <h2 className="pb-3">Manage Product</h2>
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
                                        <button class="btn w-100 alert-success rounded-0">
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
                                        onClick={() => handleDelete(user._id)}
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
