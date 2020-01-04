import React from "react";
import '../CSS/button.css';
import '../CSS/split.css';
// import {Link} from 'react-router-dom';
// import { Container} from 'react-bootstrap'
import { FormControl, Navbar, Nav, Form, } from 'react-bootstrap'
import logo from '../Asset/logo-arkademy.svg';



function E_NAVBAR(){

    return (

        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="#home">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#link">Your Name</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>   

    )



}

export default E_NAVBAR;