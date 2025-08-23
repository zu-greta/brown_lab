import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import czi from '../../assets/CZI.png';
import nserc from '../../assets/NSERC.png';

const fundingOrganizations = [
  {
    name: "Chan Zuckerberg Initiative (CZI)",
    description: "The Chan Zuckerberg Initiative supports the science and technology to make it possible to cure, prevent and manage all disease in this century.",
    link: "https://chanzuckerberg.com/",
    picture: czi
  },
  {
    name: "Natural Sciences and Engineering Research Council (NSERC)",
    description: "Natural Sciences and Engineering Research Council of Canada",
    link: "https://www.nserc-crsng.gc.ca/",
    picture: nserc
  },
];

const Funding = () => {
  return (
    <div style={{ backgroundColor: 'rgb(33, 37, 37)', padding: "3% 0" }}>
      <Container>
        <h2 className="text-center text-white mb-4">Funding Organizations</h2>
        <Row className="justify-content-center">
          {fundingOrganizations.map((org, index) => (
            <Col md={6} lg={5} key={index} className="mb-4">
              <Card 
                className="h-100 shadow-lg text-white"
                style={{
                  backgroundColor: '#2c2f33',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
              <Card.Img variant="top" style = {{backgroundColor: "white", padding: "2%"}} src={org.picture} />
                <Card.Body>
                  <Card.Title>{org.name}</Card.Title>
                  <Card.Text>{org.description}</Card.Text>
                  <Button variant="outline-info" href={org.link} target="_blank">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Funding;