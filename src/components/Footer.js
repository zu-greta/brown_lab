import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
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
                        <h4>{t("contactUs")}</h4>
                        <p><b>{t("email")}:</b> Claire.Brown@mcgill.ca</p>
                        <p><b>{t("phone")}:</b> +1 (514) 399-9492</p>
                        <p><b>{t("address")}:</b> Bellini Life Science Complex, Room 137, 3649 Promenade Sir-William-Osler, Montreal, Quebec H3A 1W9, Canada</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>&copy; {new Date().getFullYear()} Brown Lab. {t("allRightsReserved")}.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;