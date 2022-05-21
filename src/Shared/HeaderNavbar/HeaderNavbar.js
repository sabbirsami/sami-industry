import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLogo from "../../Assets/images/logo.png";
import CustomLink from "../CustomLink";

const HeaderNavbar = () => {
    return (
        <div className="headerNavbar">
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container className="py-2">
                    <Navbar.Brand href="#">
                        <img className="w-100" src={NavLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                            <CustomLink to="/myProfile" href="#action1">
                                My Profile
                            </CustomLink>
                            <CustomLink to="/login" href="#action2">
                                Login
                            </CustomLink>
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
