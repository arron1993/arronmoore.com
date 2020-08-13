import React from "react"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "#000", zIndex: 99999}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-white">
                        <Nav.Link className="text-white" href="/">home</Nav.Link>
                        <Nav.Link className="text-white" href="/about">about</Nav.Link>
                        <Nav.Link className="text-white" href="/projects">projects</Nav.Link>
                        <Nav.Link className="text-white" href="/photography">photography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header