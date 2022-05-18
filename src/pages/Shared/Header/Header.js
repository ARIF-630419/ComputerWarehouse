import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Computer Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manageItem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/MyItem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user ? <button className='btn btn-link text-white text-decoration-none ' onClick={handelSignOut}>Sign out</button > : <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;