import React from "react"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'


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
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link className="text-white" href="https://www.instagram.com/arron.moore93/">
                            <FontAwesomeIcon icon={fab.faInstagram} />
                        </Nav.Link>
                        <Nav.Link className="text-white" href="https://www.linkedin.com/in/arron-moore-269b8919b/">
                            <FontAwesomeIcon icon={fab.faLinkedin} />
                        </Nav.Link>
                        <Nav.Link className="text-white" href="https://github.com/arron1993">
                            <FontAwesomeIcon icon={fab.faGithub} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header