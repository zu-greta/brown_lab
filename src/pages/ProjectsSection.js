import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import placeholder from "../assets/placeholder.jpg";


const ProjectsSection = () => {
    const projectsData = [
        {
            title: "AI/ML in image analysis",
            status: "ongoing",
            description: "lorem ipsum",
            memberImage: placeholder,
            memberId: "jane-smith",
        },
        {
            title: "Paxillin and regulation of cell migration",
            status: "published",
            description: "lorem ipsum",
            memberImage: placeholder,
            memberId: "jane-smith",
        },
        {
            title: "Benchmarking STED and Expansion Microscopy",
            status: "published",
            description: "lorem ipsum",
            memberImage: placeholder,
            memberId: "jane-smith",
        },
    ];
    

    return (
        <div style={{ backgroundColor: "rgb(31, 30, 28)", padding: "60px 0" }}>
        <Container>
          <h2 className="text-center text-white mb-4">Current Projects</h2>
            <Row className="justify-content-center">
            {projectsData.map((org, index) => (  // FIX: remove extra []
                <Col md={6} lg={4} key={index} className="mb-4">
                <ProjectCard
                    title={org.title}
                    status={org.status}
                    description={org.description}
                    memberImage={org.memberImage}
                    memberId={org.memberId}
                />
                </Col>
            ))}
            </Row>
        </Container>
      </div>
    );
};

export default ProjectsSection;
