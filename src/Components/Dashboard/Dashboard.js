import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import CustomLink from "../../Shared/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="pt-5 mt-3">
            {["sm"].map((expand) => (
                <Navbar key={expand} bg="" expand={expand} className="pt-3">
                    <Container fluid className="remove_align_item">
                        <div className="col-lg-2 d-lg-block d-none text-end">
                            <Navbar.Brand
                                className="py-5 fs-2 m-0 fw-semi-bold "
                                href="#"
                            >
                                DASHBOARD
                            </Navbar.Brand>
                            <hr />

                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        id={`offcanvasNavbarLabel-expand-${expand}`}
                                    >
                                        Dashboard
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="d-block">
                                    <Nav className="d-block">
                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard"
                                        >
                                            My Profile
                                        </CustomLink>

                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard/myOrders"
                                        >
                                            My Order
                                        </CustomLink>
                                        {/* {admin ? (
                                            ""
                                        ) : ( */}
                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard/addReview"
                                        >
                                            Add Review
                                        </CustomLink>
                                        {/* )} */}
                                        {admin && (
                                            <CustomLink
                                                className="d-block mt-2"
                                                to="/dashboard/addNewProduct"
                                            >
                                                Add New Product
                                            </CustomLink>
                                        )}
                                        {admin && (
                                            <CustomLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageProducts"
                                            >
                                                Manage Products
                                            </CustomLink>
                                        )}
                                        {admin && (
                                            <CustomLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageReview"
                                            >
                                                Manage Review
                                            </CustomLink>
                                        )}
                                        {admin && (
                                            <CustomLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageUser"
                                            >
                                                Manage Users
                                            </CustomLink>
                                        )}
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </div>
                        <div className="col-lg-10 col-12">
                            <Navbar.Toggle
                                className="outline-none border-0 bg-danger rounded-0"
                                aria-controls={`offcanvasNavbar-expand-${expand}`}
                            />
                            <Outlet></Outlet>
                        </div>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Dashboard;
