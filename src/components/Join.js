import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Join = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    info: "",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // TODO - clear the data in the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build email body
    const subject = encodeURIComponent("Join Request - Brown Lab");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInfo: ${formData.info}`
    );

    // Open mail client - TODO
    window.location.href = `mailto:email@mcgill.com?subject=${subject}&body=${body}`;

    handleClose();
  };

  return (
    <>
      <Button
        variant="light"
        size="sm"
        onClick={handleShow}
        className="shadow"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
          padding: "10px 20px",
          borderRadius: "30px",
          fontWeight: "bold",
        }}
      >
        Join Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Join the Brown Lab</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Info</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="info"
                placeholder="Tell us about yourself and why you want to join..."
                value={formData.info}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Join;