import React,  { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const AlumniCard = ({ title, name, extraInfo, image, thesis, year }) => {
  return (
    <>
      {/* Alumni Member Card */}
      <Card 
        className="my-3 p-3 shadow-sm" 
        style={{ backgroundColor: "rgb(44, 48, 48)", color: "white", border: "1px solid #ccc", borderRadius: "10px", }}
      >
        <Card.Header className="bg-transparent border-bottom">
          <h5 className="mb-0" style={{ fontWeight: "bold", color: "lightgray" }}>{title}</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={3} className="d-flex align-items-center">
              <Card.Img 
                variant="top" 
                src={require(`../assets/members_images/${image}`)}
                className="rounded-circle" 
                style={{ width: "100%", height: "100%", objectFit: "cover", border: "2px solid #ccc" }}
              />
            </Col>
            <Col xs={8} md={9} className="d-flex flex-column justify-content-center">
              <h4 style={{ fontWeight: "bold" }}>{name}</h4>
              <h6 style={{ fontStyle: "italic", color: "#aaaaaa" }}>{year}</h6>
              <p className="text-white mb-2">{extraInfo}</p>
              < br />
              <Button 
                variant="outline-info" 
                // link to thesis
                onClick={() => window.open(thesis, "_blank")}
                size="sm"
              >
                View Thesis →
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default AlumniCard;