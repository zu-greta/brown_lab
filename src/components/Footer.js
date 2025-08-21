import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(43,48,54)',
        color: 'white',
        padding: '40px 0',
        bottom: '0',
        width: '100%',
    };

    return (
        <div style={footerStyle}>
            <Container>
                <Row>
                    {/* Column 1: Contact Information */}
                    <Col xs={12} md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>Email: contact@yourlab.com</p>
                        <p>Phone: +1 (234) 567-890</p>
                        <p>Address: 123 Science Road, City, Country</p>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col xs={12} md={4} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li><Button variant="link" href="/about-us" style={{ color: 'white' }}>About Us</Button></li>
                            <li><Button variant="link" href="/research-areas" style={{ color: 'white' }}>Research Areas</Button></li>
                            <li><Button variant="link" href="/publications" style={{ color: 'white' }}>Publications</Button></li>
                            <li><Button variant="link" href="/contact" style={{ color: 'white' }}>Contact</Button></li>
                        </ul>
                    </Col>

                    {/* Column 3: Social Media
                    <Col xs={12} md={4} className="mb-4">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} style={{ color: 'white', marginRight: '15px' }} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} style={{ color: 'white', marginRight: '15px' }} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} style={{ color: 'white' }} />
                            </a>
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>&copy; {new Date().getFullYear()} Brown Lab. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;