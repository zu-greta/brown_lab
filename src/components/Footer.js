import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                    <Col xs={12} md={12} className=" mb-4">
                        <h4>Contact Us</h4>
                        <p><b>Email:</b> Claire.Brown@mcgill.ca</p>
                        <p><b>Phone:</b> +1 (514) 399-9492</p>
                        <p><b>Address:</b> Bellini Life Science Complex, Room 137, 3649 Promenade Sir-William-Osler, Montreal, Quebec H3A 1W9, Canada</p>
                    </Col>
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