import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarPerm from "../components/NavBarPerm";
import MemberCard from "../components/MemberCard";
import Footer from "../components/Footer";
import AlumniCard from "../components/AlmuniCard";
import AlumniPDFCard from "../components/AlmuniPDFCard";

import membersData from "../data/members.json"; // <-- IMPORT THE FILE

const Members = () => {
  const activeMembers = membersData.activeMembers;
  const alumniMembers = membersData.alumniMembers;

  const claireBrown = activeMembers.filter(m => m.name === "Dr. Claire Brown");
  const filteredActiveMembers = activeMembers.filter(m => (m.name !== "Dr. Claire Brown"));
  const postDoctoralFellows = alumniMembers.filter(m => m.title === "Post-Doctoral Fellow");
  const filteredAlumniMembers = alumniMembers.filter(m => m.title !== "Post-Doctoral Fellow");

  return (
    <div style={{ backgroundColor: "rgb(33, 37, 37)", color: "white" }}>
      <NavBarPerm />
      <Container className="py-5">
        <h1>Brown Lab Member Directory</h1>
        <p className="text-white">Meet the members of the lab!</p>

        {/* Claire Brown Section */}
        <h2>Claire Brown</h2>
        <Row>
          {claireBrown.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <MemberCard {...member} />
            </Col>
          ))}
        </Row>

        <hr style={{ borderTop: "2px solid #ccc", margin: "50px 0" }} />

        {/* Active Members Section */}
        <h2>Active Members</h2>
        <Row>
          {filteredActiveMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <MemberCard {...member} />
            </Col>
          ))}
        </Row>

        <hr style={{ borderTop: "2px solid #ccc", margin: "50px 0" }} />

        {/* Alumni Section */}
        <h2>Alumni</h2>
        <Row>
          {filteredAlumniMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <AlumniCard {...member} />
            </Col>
          ))}
        </Row>

        {/* Alumni Section */}
        <h2>Alumni Post-Doctoral Fellows</h2>
        <Row>
          {postDoctoralFellows.map((member, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <AlumniPDFCard {...member} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Members;