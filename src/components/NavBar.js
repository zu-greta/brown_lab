import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Bar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
      const newLang = i18n.language === "en" ? "fr" : "en";
      i18n.changeLanguage(newLang);
    };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/brown_lab/">Brown Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/brown_lab/#overview">{t("labOverview")}</Nav.Link>
            <Nav.Link href="/brown_lab/#publications">{t("recentPublications")}</Nav.Link>
            <Nav.Link href="/brown_lab/#projects">{t("currentProjects")}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={t("projects") + "/" + t("publications")}>
              <NavDropdown.Item as={Link} to="/projects">{t("projects")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/publications">{t("publications")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/members">{t("members")}</Nav.Link>
            <NavDropdown title={t("relatedSites")} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.mcgill.ca/abif/">ABIF</NavDropdown.Item>
              <NavDropdown.Item href="https://www.canadabioimaging.org/">Canada Bioimaging</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mcgill.ca/physiology/directory/core-faculty/claire-brown">
                Claire Brown
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>|</Nav.Link>
            <Nav.Link onClick={toggleLanguage}>
              {i18n.language === "en" ? "FR" : "EN"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;