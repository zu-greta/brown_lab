import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PublicationCard from "../components/PublicationCardRecent";  

const RecentPubs = () => {
    const backStyle = {
        color: 'white',
        backgroundColor: 'rgb(33, 37, 37)',
        padding: '6vh 10vh',
    };

    return (
        <div style={backStyle}>
            <Container>
                <h1 className="text-center mb-4">Latest Publications</h1>
                <Row>
                    {/* First Column */}
                    <Col>
                        <PublicationCard
                            title="Publication 1 name"
                            description="Publication 1 description goes here."
                            date="2021-10-01"
                        />
                        <PublicationCard
                            title="Publication 2 name"
                            description="Publication 2 description goes here."
                            date="2021-09-15"
                        />
                        <PublicationCard
                            title="Publication 3 name"
                            description="Publication 3 description goes here."
                            date="2021-09-10"
                        />
                    </Col>
                
                    {/* Second Column */}
                    <Col>
                        <PublicationCard
                            title="Publication 4 name"
                            description="Publication 4 description goes here."
                            date="2021-09-01"
                        />
                        <PublicationCard
                            title="Publication 5 name"
                            description="Publication 5 description goes here."
                            date="2021-08-25"
                        />
                        <PublicationCard
                            title="Publication 6 name"
                            description="Publication 6 description goes here."
                            date="2021-08-20"
                        />
                    </Col>
                </Row>
                
                {/* Button to navigate to All Publications */}
                <div className="text-right mt-4">
                    <Button variant="outline-light" href="/brown_lab/publications">
                        All Publications →
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default RecentPubs;
