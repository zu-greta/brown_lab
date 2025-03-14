import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function bar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/brown_lab/">Brown Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/brown_lab/#overview">Lab Overview</Nav.Link>
            <Nav.Link href="/brown_lab/#research">Research Areas</Nav.Link>
            <Nav.Link href="/brown_lab/#publications">Recent Publications</Nav.Link>
            <Nav.Link href="/brown_lab/#funding">Funding Orgs</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Publications/Members" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/brown_lab/publications">Publications</NavDropdown.Item>
              <NavDropdown.Item href="/brown_lab/members">Members</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled >|</Nav.Link>
            <Nav.Link eventKey={2} href="#modeToggle">
              EN/FR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bar;
