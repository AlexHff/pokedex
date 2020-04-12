import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                alt=""
                                src={logo}
                                width="auto"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Navigator;
