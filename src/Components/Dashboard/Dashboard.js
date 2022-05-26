import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import CustomLink from "../../Shared/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLink from "../../Shared/DashboardLink";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="pt-5">
            {["sm"].map((expand) => (
                <Navbar
                    key={expand}
                    bg=""
                    className="pt-4 pb-0"
                    expand={expand}
                >
                    <Container
                        fluid
                        className="remove_align_item px-lg-0"
                        style={{ height: "100vh" }}
                    >
                        <div
                            style={{ height: "100vh" }}
                            className="col-lg-2 dashboard-bg text-light bg-gradient d-lg-block d-none pt-4"
                        >
                            <Navbar.Brand
                                className="py-5 fs-5 m-0 fw-semi-bold text-light p-4 "
                                href="#"
                            >
                                Dashboard
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
                                        <DashboardLink
                                            className="d-block mt-2"
                                            to="/dashboard"
                                        >
                                            My Profile
                                        </DashboardLink>
                                        {/* {admin ? (
                                            ""
                                        ) : ( */}
                                        <DashboardLink
                                            className="d-block mt-2"
                                            to="/dashboard/myOrders"
                                        >
                                            My Order
                                        </DashboardLink>
                                        {/* )} */}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageProducts"
                                            >
                                                Manage Products
                                            </DashboardLink>
                                        )}
                                        {/* {admin ? (
                                            ""
                                        ) : ( */}
                                        <DashboardLink
                                            className="d-block mt-2"
                                            to="/dashboard/addReview"
                                        >
                                            Add Review
                                        </DashboardLink>
                                        {/* )} */}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/addNewProduct"
                                            >
                                                Add Product
                                            </DashboardLink>
                                        )}

                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageReview"
                                            >
                                                Manage Review
                                            </DashboardLink>
                                        )}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageUser"
                                            >
                                                Manage Users
                                            </DashboardLink>
                                        )}
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </div>
                        <div className="col-lg-10 col-12">
                            <Navbar.Toggle
                                className="outline-none border-0 text-white rounded-0"
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
