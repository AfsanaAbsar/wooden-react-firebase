import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">WOODEN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Link to="/home">HOME</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/products">PRODUCTS</Link>
                            <Link to="/orders">ORDERS</Link>
                            <Link to="/login">LOG IN</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;