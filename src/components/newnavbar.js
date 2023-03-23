import * as React from "react";
import { Link } from "gatsby";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Newnavbar = () => {

  return (
    <Navbar justify expand="lg" className="menubar-nav">
      <Container className="menubar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" justify>
          <Nav className="me-auto" justify>
            <Nav.Link href="#home"><Link className="navbar-item" to="/">home</Link></Nav.Link>
            <Nav.Link href="#home"><Link className="navbar-item" to="/about">vita</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navbar-item" to="/about">galerie</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navbar-item" to="/about">kurse</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navbar-item" to="/about">press</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navbar-item" to="/about">aktuelles</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="navbar-item" to="/about">kontakt</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Newnavbar;
