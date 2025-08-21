import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const Alumni = ({ title, name, extraInfo, image, bio, year, contact, current }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Member Card */}
      <Card 
        className="my-3 p-3 shadow-sm" 
        style={{ backgroundColor: "rgb(44, 48, 48)", color: "white", border: "1px solid #ccc", borderRadius: "10px", }}
      >
        <Card.Header className="bg-transparent border-bottom">
          <h5 className="mb-0" style={{ fontWeight: "bold", color: "lightgray" }}>{title} - {year}</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={3} className="d-flex align-items-center">
              <Card.Img 
                variant="top" 
                src={image} 
                className="rounded-circle" 
                style={{ width: "100%", height: "100%", objectFit: "cover", border: "2px solid #ccc" }}
              />
            </Col>
            <Col xs={8} md={9} className="d-flex flex-column justify-content-center">
              <h4 style={{ fontWeight: "bold" }}>{name}</h4>
              <p className="text-white mb-2">{extraInfo}</p>
              < br />
              <Button 
                variant="outline-info" 
                onClick={() => setShow(true)}
                size="sm"
                // style={{ alignSelf: "flex-start" }}
              >
                View Profile →
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal 
        show={show} 
        onHide={() => setShow(false)} 
        centered 
        size="lg"
        contentClassName="bg-dark text-light"
      >
        <Modal.Header closeButton closeVariant="white" className="border-0">
          <Modal.Title className="w-100 text-center" style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4} className="text-center mb-3 mb-md-0">
              <img 
                src={image} 
                alt={name} 
                className="rounded" 
                style={{ width: "100%", objectFit: "cover", maxHeight: "300px" }}
              />
            </Col>
            <Col md={8}>
              <p style={{ lineHeight: "1.6" }}>{bio}</p>

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="border-0" style={{ justifyContent: "right", padding: "1rem" }}>
        {contact && (
                <Button 
                  variant="outline-info" 
                  href={contact} 
                  target="_blank" 
                  className="mt-3"
                >
                  Contact
                </Button>
              )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Alumni;