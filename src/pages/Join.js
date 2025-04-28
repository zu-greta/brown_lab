import React from "react";
import NavBarPerm from "../components/NavBarPerm";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// import placeholder from '../assets/placeholder.jpg';

const Join = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarPerm />

      {/* Title Section */}
      <div
        style={{
          // backgroundImage: placeholder,
          backgroundColor: "rgb(151, 124, 163)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 className="display-4 fw-bold">Join the Brown Lab</h1>
      </div>

      {/* Form Section */}
      <Container className="my-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4 text-center">Apply Now</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tell us about yourself and why you want to join"
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="outline-dark" type="submit">
                  Submit Application
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Join;
