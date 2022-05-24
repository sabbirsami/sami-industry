import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const EditProfile = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, reset, handleSubmit } = useForm();

    if (updating) {
        return <Loading></Loading>;
    }
    if (updateError) {
        console.log(updateError);
    }
    const onSubmit = async (data) => {
        await updateProfile({
            displayName: data.name,
        });
    };
    return (
        <div className="container">
            <div className="p-lg-5">
                <h2 className="text-center">Edit Profile</h2>
                <div className="p-lg-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    {...register("userName", {
                                        required: true,
                                    })}
                                    className="rounded-0"
                                    type="text"
                                    placeholder="Your name"
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group
                            className="mb-3"
                            controlId="formGridAddress1"
                        >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                {...register("phone", {
                                    required: true,
                                })}
                                type="number"
                                placeholder="xxxxxxx"
                                className="rounded-0"
                            />
                        </Form.Group>

                        <Button
                            className="btn btn-danger rounded-0 w-100 py-2"
                            type="submit"
                        >
                            Update Profile
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
