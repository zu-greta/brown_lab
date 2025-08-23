import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import projectsData from "../../data/projects.json"; // <-- IMPORT THE FILE

const ProjectsSection = () => {
    const projects = projectsData.current;

    return (
        <div style={{ backgroundColor: 'rgb(33, 37, 37)', padding: "5% 0" }}>
        <Container>
          <h2 className="text-center text-white mb-4">Current Projects</h2>
            <Row className="justify-content-center">
            {projects.map((org, index) => (  
                <Col md={6} lg={4} key={index} className="mb-4">
                <ProjectCard
                    title={org.title}
                    status={org.status}
                    description={org.description}
                    memberName={org.memberName}
                />
                </Col>
            ))}
            </Row>
        </Container>
      </div>
    );
};

export default ProjectsSection;
