import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const fundingOrganizations = [
  {
    name: "Canadian Institutes of Health Research (CIHR)",
    description: "Funds health research to improve the well-being of Canadians.",
    link: "https://cihr-irsc.gc.ca/",
  },
  {
    name: "Natural Sciences and Engineering Research Council (NSERC)",
    description: "Supports discovery and innovation in science and engineering.",
    link: "https://www.nserc-crsng.gc.ca/",
  },
  {
    name: "National Institutes of Health (NIH)",
    description: "Largest funder of biomedical research in the world.",
    link: "https://www.nih.gov/",
  },
];

const Funding = () => {
  return (
    <div style={{ backgroundColor: "rgb(175, 165, 152)", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center text-white mb-4">Funding Organizations</h2>
        <Row className="justify-content-center">
          {fundingOrganizations.map((org, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-lg">
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