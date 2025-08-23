import React, { useState } from "react";
import NavBarPerm from "../components/NavBarPerm";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import placeholder from "../assets/placeholder.jpg";

import projectsData from "../data/projects.json"; // <-- IMPORT THE FILE

const Projects = () => {
  const [search] = useState("");

  const resolveImage = (img) => {
    if (img === "placeholder.jpg") return placeholder;
    if (img === "placeholder") return placeholder;
    return img; 
  };

  const filterProjects = (projects) =>
    projects.filter(
      (proj) =>
        proj.title.toLowerCase().includes(search.toLowerCase()) ||
        proj.description.toLowerCase().includes(search.toLowerCase())
    );

  const currentProjects = filterProjects(projectsData.current);
  const pastProjects = filterProjects(projectsData.past);

  const renderProjectRow = (project, index) => (
    <div key={index} style={styles.projectRow}>
      {/* Left column: Image with caption */}
      <div style={styles.leftCol}>
        <img
          src={resolveImage(project.image)}
          alt="Project"
          style={styles.projectImage}
        />
        <p style={styles.imageCaption}>{project.caption}</p>
      </div>

      {/* Center column: ProjectCard */}
      <div style={styles.centerCol}>
        <ProjectCard
          title={project.title}
          status={project.status}
          description={project.description}
          memberName={project.memberName}
        />
      </div>

      {/* Right column: Unified block with member rows */}
      <div style={styles.rightCol}>
        <div style={styles.memberContainer}>
          {project.members.map((member, i) => (
            <div key={i} style={styles.memberRow}>
              <img
                src={resolveImage(member.image)}
                alt={member.name}
                style={styles.memberImageRow}
              />
              <div style={styles.memberInfo}>
                <div style={styles.memberName}>{member.name}</div>
                <Link to={`/members`}>
                  <Button variant="outline-info" size="sm">
                    View Profile →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <NavBarPerm />
      <div style={styles.container}>
        {/* ---- Current Projects ---- */}
        <h2 style={styles.title}>Current Projects</h2>
        {currentProjects.map(renderProjectRow)}

        {/* ---- Past Projects ---- */}
        <h2 style={styles.title}>Past Projects</h2>
        {pastProjects.map(renderProjectRow)}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "3%",
    backgroundColor: "rgb(35, 36, 39)",
  },
  title: {
    color: "white",
    textAlign: "center",
    margin: "50px 0 30px 0",
    fontSize: "2.4rem",
    fontWeight: "bold",
  },
  projectImage: {
    width: "100%",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginTop: "4%",
  },
  imageCaption: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#aaaaaa",
  },
  projectRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "3%",
    width: "100%",
    gap: "2%",
    flexWrap: "nowrap",
  },
  leftCol: {
    flexBasis: "30%",
    textAlign: "center",
    color: "#e0e0e0",
  },
  centerCol: {
    flexBasis: "38%",
    display: "flex",
    justifyContent: "center",
  },
  rightCol: {
    flexBasis: "30%",
    display: "flex",
    justifyContent: "center",
  },
  memberContainer: {
    backgroundColor: "rgb(33, 37, 37)",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "100%",
    marginTop: "4%",
  },
  memberRow: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
  },
  memberImageRow: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  memberInfo: {
    display: "flex",
    flexDirection: "column",
  },
  memberName: {
    fontWeight: "bold",
    color: "#e0e0e0",
  },
};

export default Projects;