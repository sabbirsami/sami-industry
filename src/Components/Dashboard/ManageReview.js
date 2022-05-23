import React from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageReview = () => {
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
        console.log(id);
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
            });
    };
    return (
        <div>
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
                                <td>$ {review.dic}</td>
                                <td className="p-0">
                                    <button
                                        onClick={() => handleDelete(review._id)}
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
