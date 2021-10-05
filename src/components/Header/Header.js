
import React from 'react';
import { Container, Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Star University</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <ul className='menu'>
                            <Link className="nav-link" to="/home"><li>Home</li></Link>
                            <Link className="nav-link" to="/about"><li>About</li></Link>
                            <Link className="nav-link" to="/services"><li>Services</li></Link>
                            <Link className="nav-link" to="/contact"><li>Contact</li></Link>
                        </ul>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;