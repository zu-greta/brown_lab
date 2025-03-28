import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const Alumni = ({ title, name, extraInfo, image, bio, year }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="my-3 p-3 shadow-sm">
        <Card.Header className="bg-white border-bottom">
          <h5 className="mb-0">{title} - {year}</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={3}>
              <Card.Img variant="top" src={image} className="rounded-circle" />
            </Col>
            <Col xs={8} md={9} className="d-flex flex-column justify-content-center">
              <h4>{name}</h4>
              <p className="text-muted">{extraInfo}</p>
              <Button variant="outline-info" onClick={() => setShow(true)}>
                View Profile →
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Popup Modal */}
      {/* TBD - modal or seperate page? */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={image} className="rounded mb-3" />
          <p>{bio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Alumni;