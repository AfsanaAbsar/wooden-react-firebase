import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {

        signOut(auth);

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg='light' >
                <Container>
                    <Navbar.Brand as={Link} to="/home">WOODEN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/products">PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>

                            {
                                user ? <Nav.Link onClick={handleSignOut}>LOG OUT</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;