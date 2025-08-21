import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function bar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/brown_lab/">Brown Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown title="Projects/Publications" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/publications">Publications</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/members">Members</Nav.Link>
            <NavDropdown title="Related Sites" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.mcgill.ca/abif/">ABIF</NavDropdown.Item>
              <NavDropdown.Item href="https://www.canadabioimaging.org/">Canada Bioimaging</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mcgill.ca/physiology/directory/core-faculty/claire-brown">
                Claire Brown
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>|</Nav.Link>
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