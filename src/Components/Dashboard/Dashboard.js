import React from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink";

const Dashboard = () => {
    return (
        <div className="pt-5 mt-4">
            {["sm"].map((expand) => (
                <Navbar
                    key={expand}
                    bg=""
                    expand={expand}
                    className="mb-3 mt-1  py-3"
                >
                    <Container fluid className="remove_align_item">
                        <div className="col-lg-2 d-lg-block d-none">
                            <Navbar.Brand
                                className="py-5 fs-1 fw-semi-bold "
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
                                <Offcanvas.Body>
                                    <Nav className="d-block">
                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard"
                                        >
                                            My Profile
                                        </CustomLink>

                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard/addReview"
                                        >
                                            Add Review
                                        </CustomLink>
                                        <CustomLink
                                            className="d-block mt-2"
                                            to="/dashboard/myOrders"
                                        >
                                            My Order
                                        </CustomLink>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </div>
                        <div className="col-lg-10 col-12">
                            <Navbar.Toggle
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
