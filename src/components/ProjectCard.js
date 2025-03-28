import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, status, description, memberImage, memberId }) => {
    const statusColors = {
        "ongoing": "success", // Green
        "published": "warning", // Yellow
    };

    return (
        <Card className="shadow-sm" style={{ width: "18rem", position: "relative" }}>
            <Badge 
                bg={statusColors[status]} 
                style={{ position: "absolute", top: "10px", right: "10px" }}
            >
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/members/${memberId}`}>
                        <img 
                            src={memberImage} 
                            alt="Member" 
                            className="rounded-circle" 
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                    </Link>
                    {/* name */}
                    <Link to={`/members/${memberId}`} className="text-decoration-none text-dark">
                        <strong>John Doe</strong>
                    </Link>
                    <br />
                    <br />
                    <Button variant="outline-info">Learn More →</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;