import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';

import placeholder from '../assets/placeholder.jpg';

const Hero = () => {
    const backStyle = {
        color: 'white',
        fontSize: '36px',
        backgroundColor: 'rgb(33, 37, 37)',
        padding: '10% 0'
    };

    return (
        <div style={backStyle}>
            <Container>
                <Row className="align-items-center">
                    {/* Left Section: Title, Quote */}
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="fw-bold">Brown Lab</h1>
                        <p className="fst-italic">
                            "Advanced BioImaging Facility"
                        </p>
                    </Col>

                    {/* Right Section: Image carousel */}
                    {/* TODO replace placeholder images */}
                    <Col md={6} className="text-center">
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
