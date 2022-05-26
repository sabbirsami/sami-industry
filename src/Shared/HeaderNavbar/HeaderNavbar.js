import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import NavLogo from "../../Assets/images/logo.png";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink";
import Loading from "../Loading";
import HeaderTop from "./HeaderTop";

const HeaderNavbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    // if (loading) {
    //     return <Loading></Loading>;
    // }
    return (
        <div className="headerNavbar">
            {/* <HeaderTop></HeaderTop> */}
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container className="py-2">
                    <NavLink to="/">
                        <Navbar.Brand>
                            <img className="w-100" src={NavLogo} alt="" />
                        </Navbar.Brand>
                    </NavLink>
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
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/products">Products</CustomLink>
                            <CustomLink to="/myPortfolio">
                                My Portfolio
                            </CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>

                            {user ? (
                                <button
                                    onClick={logOut}
                                    className="btn btn-outline border-0 text-start"
                                    to="/login"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <CustomLink to="/login" href="#action2">
                                    Login
                                </CustomLink>
                            )}
                            {user && (
                                <Link to="/dashboard">
                                    <button className="btn btn-outline-dark rounded-0">
                                        Dashboard
                                    </button>
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
