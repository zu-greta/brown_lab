import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PublicationCard from "../components/PublicationCard";  // Assuming you have a PublicationCard component

const RecentPubs = () => {
    const backStyle = {
        color: 'black',
        // fontSize: '20px',
        backgroundColor: 'rgb(125, 184, 197)',
        padding: '60px 0'
    };

    return (
        <div style={backStyle}>
            <Container>
                <h1 className="text-center mb-4">Latest Publications</h1>
                <Row>
                    {/* First Column */}
                    <Col>
                        <PublicationCard
                            title="Research on AI in Healthcare"
                            description="An exploration of how AI can revolutionize healthcare systems."
                            date="2021-10-01"
                        />
                        <PublicationCard
                            title="Machine Learning in Education"
                            description="This paper examines how machine learning is shaping education."
                            date="2021-09-15"
                        />
                    </Col>
                
                    {/* Second Column */}
                    <Col>
                        <PublicationCard
                            title="NLP for Social Media Analysis"
                            description="A study on the application of NLP techniques to social media data."
                            date="2021-09-01"
                        />
                        <PublicationCard
                            title="Robotics in Manufacturing"
                            description="Exploring the impact of robotics in manufacturing and production lines."
                            date="2021-08-15"
                        />
                    </Col>
                </Row>
                
                {/* Button to navigate to All Publications */}
                <div className="text-center mt-4">
                    <Button variant="outline-light" href="/brown_lab/publications">
                        All Publications →
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default RecentPubs;
