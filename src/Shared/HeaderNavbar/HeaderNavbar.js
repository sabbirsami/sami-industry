import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavLogo from "../../Assets/images/logo.png";

const HeaderNavbar = () => {
    return (
        <div className="headerNavbar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img className="w-100" src={NavLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link className="nav_item" href="#action1">
                                Home
                            </Nav.Link>
                            <Nav.Link className="nav_item" href="#action2">
                                Link
                            </Nav.Link>

                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
