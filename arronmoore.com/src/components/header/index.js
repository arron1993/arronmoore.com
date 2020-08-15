import React from "react"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import "./header.scss";

class Header extends React.Component {
    render() {
        return (
            <Navbar className="header sticky-top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">home</Nav.Link>
                        <Nav.Link href="/about">about</Nav.Link>
                        <Nav.Link href="/projects">projects</Nav.Link>
                        <Nav.Link href="/photography">photography</Nav.Link>
                    </Nav>
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link className="text-white" href="https://www.instagram.com/arron.moore93/">
                            <FontAwesomeIcon size="lg" icon={fab.faInstagram} />
                        </Nav.Link>
                        <Nav.Link className="text-white" href="https://www.linkedin.com/in/arron-moore-269b8919b/">
                            <FontAwesomeIcon size="lg" icon={fab.faLinkedin} />
                        </Nav.Link>
                        <Nav.Link className="text-white" href="https://github.com/arron1993">
                            <FontAwesomeIcon size="lg" icon={fab.faGithub} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header