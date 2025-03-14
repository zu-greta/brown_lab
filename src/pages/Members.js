import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/NavBar";
import MemberCard from "../components/MemberCard";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";

import placeholder from "../assets/placeholder.jpg";

const Members = () => {
  const activeMembers = [
    {
      title: "Director",
      name: "Dr. Brown",
      extraInfo: "Research Lead",
      image: {placeholder},
      bio: "Dr. Brown is the principal investigator of the lab, specializing in neuroscience and physiology.",
    },
    {
      title: "PhD Candidate",
      name: "John Doe",
      extraInfo: "Machine Learning & Physiology",
      image: {placeholder},
      bio: "John applies deep learning techniques to analyze physiological data.",
    },
    {
        title: "PhD Candidate",
        name: "Jane Doe",
        extraInfo: "Machine Learning & Physiology",
        image: {placeholder},
        bio: "Jane specializes in applying deep learning to cardiovascular data analysis.",
    },
  ];

  const alumniMembers = [
    {
      title: "Postdoctoral Researcher",
      name: "Dr. Smith",
      extraInfo: "Neuroscience",
      image: {placeholder},
      bio: "Dr. Smith worked on brain-computer interfaces and advanced neural technologies.",
    },
    {
      title: "PhD Candidate",
      name: "Michael Johnson",
      extraInfo: "Data Science & Physiology",
      image: {placeholder},
      bio: "Michael focused on the intersection of data science and human physiology.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <h1>Brown Lab Member Directory</h1>
        <p className="text-muted">Meet the members of the lab</p>

        {/* Active Members Section */}
        <h2>Active Members</h2>
        <Row>
          {activeMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <MemberCard {...member} />
            </Col>
          ))}
        </Row>

        <hr style={{ borderTop: "2px solid #ccc", margin: "50px 0" }} />

        {/* Alumni Section */}
        <h2>Alumni</h2>
        <Row>
          {alumniMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <MemberCard {...member} />
            </Col>
          ))}
        </Row>
      </Container>
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

export default Members;