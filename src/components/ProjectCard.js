import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, status, description, memberImage, memberId, memberName }) => {
  const statusColors = {
    "ongoing": "warning", // yellow
    "published": "success", // green
  };

  return (
    <>
      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(102, 178, 255, 0.5);
          }
        `}
      </style>

      <Card
        className="project-card shadow-lg"
        style={{
          width: "25rem",
          backgroundColor: "rgb(33, 37, 37)", 
        //   #2c2f33
          color: "#e0e0e0", 
          overflow: "hidden",
          position: "relative",
          padding: "1rem",
          margin: "1rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <Badge
          bg={statusColors[status]}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "0.8rem",
            padding: "0.5em 0.8em",
            borderRadius: "10px",
          }}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>

        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem" , marginTop: "1rem"}}>
            {title}
          </Card.Title>

          <Card.Text style={{ marginBottom: "1.5rem" }}>
            {description}
          </Card.Text>

          <div className="d-flex align-items-center">
            <Link to={`/members`}>
              <img
                src={memberImage}
                alt="Member"
                className="rounded-circle me-2"
                style={{ width: "50px", height: "50px", objectFit: "cover", border: "2px solid #6c757d" }}
              />
            </Link>

            <div>
              <div style={{ fontSize: "0.9rem", color: "#adb5bd" }}>Members:</div>
              <Link
                to={`/members`}
                style={{ color: "#66b2ff", textDecoration: "none", fontWeight: "bold" }}
              >
                {memberName}
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCard;
