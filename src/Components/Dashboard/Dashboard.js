import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLink from "../../Shared/DashboardLink";
import { signOut } from "firebase/auth";
import arrowRight from "../../Assets/images/arrow-right-from-bracket-solid.png";
import PageTitle from "../../Shared/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAlignLeft,
    faCommentAlt,
    faHome,
    faIndent,
    faList,
    faListAlt,
    faUserCircle,
    faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div className="">
            <PageTitle title="Dashboard -"></PageTitle>
            {["sm"].map((expand) => (
                <Navbar key={expand} bg="" className=" p-0" expand={expand}>
                    <Container
                        fluid
                        className="remove_align_item px-lg-0"
                        style={{ height: "100vh" }}
                    >
                        <div
                            style={{ height: "100vh" }}
                            className="col-lg-2 dashboard-bg text-light bg-gradient d-lg-block d-none pt-4 position-relative"
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
                                <Offcanvas.Body className="d-block pt-lg-4">
                                    <Nav className="d-block">
                                        <DashboardLink to="/">
                                            <FontAwesomeIcon
                                                icon={faHome}
                                                className="pe-2"
                                            ></FontAwesomeIcon>{" "}
                                            Home
                                        </DashboardLink>
                                        <DashboardLink
                                            className="d-block mt-2"
                                            to="/dashboard"
                                        >
                                            <FontAwesomeIcon
                                                icon={faUserCircle}
                                                className="pe-2"
                                            />{" "}
                                            My Profile
                                        </DashboardLink>
                                        {/* {admin ? (
                                            ""
                                        ) : ( */}
                                        <DashboardLink
                                            className="d-block mt-2"
                                            to="/dashboard/myOrders"
                                        >
                                            <FontAwesomeIcon
                                                icon={faList}
                                                className="pe-2"
                                            />{" "}
                                            My Order
                                        </DashboardLink>
                                        {/* )} */}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageProducts"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faAlignLeft}
                                                    className="pe-2"
                                                />{" "}
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
                                            <FontAwesomeIcon
                                                icon={faCommentAlt}
                                                className="pe-2"
                                            />{" "}
                                            Add Review
                                        </DashboardLink>
                                        {/* )} */}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/addNewProduct"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faIndent}
                                                    className="pe-2"
                                                />{" "}
                                                Add Product
                                            </DashboardLink>
                                        )}

                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageReview"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faListAlt}
                                                    className="pe-2"
                                                />{" "}
                                                Manage Review
                                            </DashboardLink>
                                        )}
                                        {admin && (
                                            <DashboardLink
                                                className="d-block mt-2"
                                                to="/dashboard/manageUser"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUserFriends}
                                                    className="pe-2"
                                                />{" "}
                                                Manage Users
                                            </DashboardLink>
                                        )}
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            <div className="dashboard_end position-absolute top-100 start-0 pb-5 ps-5 translate-middle">
                                <p className="pb-5 ps-5 ms-5 ">
                                    <Link
                                        className="nav-link text-light"
                                        onClick={logOut}
                                        to="/login"
                                    >
                                        Log Out{" "}
                                        <img
                                            className="w-25 ps-2"
                                            src={arrowRight}
                                            alt=""
                                        />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-10 pt-lg-5 col-12">
                            <Navbar.Toggle
                                className="outline-none pt-3 d-lg-none ms-auto text-end d-block border-0 text-white rounded-0"
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
