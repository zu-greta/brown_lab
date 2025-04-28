import React, { useState } from "react";
import NavBarPerm from "../components/NavBarPerm";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Join from "../components/Join";
import { Button } from "react-bootstrap";

import placeholder from '../assets/placeholder.jpg';

const Projects = () => {
  const projects = [
    {
      title: "AI Research",
      status: "ongoing",
      description: "Exploring new frontiers in artificial intelligence.",
      memberImage: placeholder,
      memberId: "john-doe",
    },
    {
      title: "Neuroscience Study",
      status: "published",
      description: "Investigating the effects of cognitive load.",
      memberImage: placeholder,
      memberId: "jane-smith",
    },
  ];

  const [search] = useState("");

  const filteredProjects = projects.filter((proj) =>
    proj.title.toLowerCase().includes(search.toLowerCase()) ||
    proj.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBarPerm />
      <div style={styles.container}>
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>Current Projects</h2>
        <div style={styles.projectsList}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                width: "100%",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              {/* Project Card */}
              <ProjectCard
                title={project.title}
                status={project.status}
                description={project.description}
              />
              
              {/* Member Section */}
              <div style={styles.memberSection}>
                <img src={project.memberImage} alt="Member" style={styles.memberImage} />
                <Button href={`/members/${project.memberId}`} variant="info">View Profile</Button>
              </div>
            </div>
          ))}
          <Join />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
    backgroundColor: "rgb(35, 36, 39)",
  },
  projectsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  memberSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "20px",
  },
  memberImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default Projects;
