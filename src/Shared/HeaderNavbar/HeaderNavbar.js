import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import NavLogo from "../../Assets/images/logo.png";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink";
import Loading from "../Loading";

const HeaderNavbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    };
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="headerNavbar">
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container className="py-2">
                    <Navbar.Brand href="#">
                        <img className="w-100" src={NavLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="align-items-lg-center"
                    >
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <CustomLink to="/" href="#action1">
                                Home
                            </CustomLink>
                            <CustomLink to="/purchase" href="#action1">
                                Purchase
                            </CustomLink>
                            <CustomLink to="/myOrders" href="#action1">
                                My Orders
                            </CustomLink>
                            <CustomLink to="/addReview" href="#action1">
                                Add Review
                            </CustomLink>
                            <CustomLink to="/myProfile" href="#action1">
                                My Profile
                            </CustomLink>
                            {user ? (
                                <button
                                    onClick={logOut}
                                    className="btn btn-outline border-0"
                                    to="/login"
                                    href="#action2"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <CustomLink to="/login" href="#action2">
                                    Login
                                </CustomLink>
                            )}
                            <Link to="/dashboard">
                                <button className="btn btn-outline-dark rounded-0">
                                    Dashboard
                                </button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
