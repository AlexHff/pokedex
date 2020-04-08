import React, { Component } from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import logo from './../assets/logo.png';

class Navigator extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Navbar">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={logo}
                            width="auto"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search for a Pokemon" className="mr-sm-2" />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigator;
