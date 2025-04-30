import React, { useState } from "react";
import NavBarPerm from "../components/NavBarPerm";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Join from "../components/Join";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import placeholder from '../assets/placeholder.jpg';

const Projects = () => {
  const projects = [
    {
      title: "AI Research",
      status: "ongoing",
      description: "Exploring new frontiers in artificial intelligence.",
      image: placeholder,
      members: [
        { id: "john-doe", name: "John Doe", image: placeholder },
        { id: "alice-wang", name: "Alice Wang", image: placeholder },
      ],
      caption: "AI Research Team",
    },
    {
      title: "Neuroscience Study",
      status: "published",
      description: "Investigating the effects of cognitive load.",
      image: placeholder,
      members: [
        { id: "jane-smith", name: "Jane Smith", image: placeholder },
      ],
      caption: "Neuroscience Study Team",
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
        <h2 style={styles.title}>Current Projects</h2>

        {filteredProjects.map((project, index) => (
          <div key={index} style={styles.projectRow}>
            {/* Left column: Image with caption */}
            <div style={styles.leftCol}>
              <img src={project.image} alt="Project" style={styles.projectImage} />
              <p style={styles.imageCaption}>{project.caption}</p>
            </div>

            {/* Center column: ProjectCard */}
            <div style={styles.centerCol}>
              <ProjectCard
                title={project.title}
                status={project.status}
                description={project.description}
                memberImage={project.members[0]?.image}
                memberId={project.members[0]?.id}
                memberName={project.members[0]?.name}
              />
            </div>

            {/* Right column: Unified block with member rows */}
            <div style={styles.rightCol}>
              <div style={styles.memberContainer}>
                {project.members.map((member, i) => (
                  <div key={i} style={styles.memberRow}>
                    <img src={member.image} alt={member.name} style={styles.memberImageRow} />
                    <div style={styles.memberInfo}>
                      <div style={styles.memberName}>{member.name}</div>
                      <Link to={`/members/${member.id}`}>
                        <Button variant="outline-info" size="sm">View Profile →</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Join />
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
    marginBottom: "50px",
    fontSize: "2.8rem",
    fontWeight: "bold",
  },
  projectImage: {
    width: "100%",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    // marginBottom: "10px",
    marginTop: "4%"
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
    flexWrap: "nowrap", // changed from wrap
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
    marginTop: "4%"
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
