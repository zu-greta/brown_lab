import React from "react";
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';

import placeholder from '../assets/placeholder.jpg';

const Hero = () => {
    const backStyle = {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'rgb(35, 36, 39)',
        padding: '60px 0'
    };

    return (
        <div style={backStyle}>
            <Container>
                <Row className="align-items-center">
                    {/* Left Section: Title, Quote, and Search Bar */}
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="fw-bold">Brown Lab</h1>
                        <p className="fst-italic">
                            "Advanced BioImaging Facility"
                        </p>
                        {/* <Form className="mt-3">
                            <Form.Group className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search..."
                                    className="me-2"
                                />
                                <Button variant="light">Go</Button>
                            </Form.Group>
                        </Form> */}
                    </Col>

                    {/* Right Section: Image */}
                    <Col md={6} className="text-center">
                        {/* <Image
                            src={placeholder}  // TODO - Replace with actual image
                            alt="Brown Lab"
                            fluid
                            rounded
                        /> */}
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={placeholder}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>Research Image 1</h5>
                                    <p>IMAGE CAPTION.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={placeholder}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5>Research Image 2</h5>
                                    <p>IMAGE CAPTION.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={placeholder}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Research Image 3</h5>
                                    <p>IMAGE CAPTION.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
