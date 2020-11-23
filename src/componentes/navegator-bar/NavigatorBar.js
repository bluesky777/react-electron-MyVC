import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'

class NavigatorBar extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className="d-inline-block align-top"
                        href="/login">Mi Cole Virtual</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/panel">Panel</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}

export default NavigatorBar;


