import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer/Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        
            <Navbar bg="dark" variant="dark" sticky="top" collapeOnSelect expand="lg">
                
                <Container>
                    
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    {user?.email ?
                       <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                         <Nav.Link as={Link} to="/registration">Registration</Nav.Link>

                          
                         
                          
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
               
            </Navbar>

            

        </>
    );
};

export default Header;