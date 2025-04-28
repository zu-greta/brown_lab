import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Navbar from "../components/NavBar";
import NavBarPerm from "../components/NavBarPerm";
import MemberCard from "../components/MemberCard";
import Footer from "../components/Footer";
import Join from "../components/Join";
import Alumni from "../components/Almuni";

import placeholder from "../assets/placeholder.jpg";
import claire from "../assets/claire_brown.jpg";


const Members = () => {
  const activeMembers = [
    {
      title: "Director",
      name: "Dr. Brown",
      extraInfo: "Research Lead",
      image: placeholder,
      bio: "Dr. Brown is the principal investigator of the lab, specializing in neuroscience and physiology.",
      contact: "linkdin.com/in/drbrown",
    },
    {
      title: "PhD Candidate",
      name: "John Doe",
      extraInfo: "Machine Learning & Physiology",
      image: placeholder,
      bio: "John applies deep learning techniques to analyze physiological data.",
      contact: "linkdin.com/in/johndoe",
    },
    {
        title: "PhD Candidate",
        name: "Jane Doe",
        extraInfo: "Machine Learning & Physiology",
        image: placeholder,
        bio: "Jane specializes in applying deep learning to cardiovascular data analysis.",
        contact: "linkdin.com/in/janedoe",
    },
  ];

  const alumniMembers = [
    {
      title: "Postdoctoral Researcher",
      name: "Dr. Smith",
      extraInfo: "Neuroscience",
      image: placeholder,
      bio: "Dr. Smith worked on brain-computer interfaces and advanced neural technologies.",
      year: "2021",
      contact: "linkdin.com/in/drsmith",
      current: "linkdin.com/in/drsmith/current-position",
    },
    {
      title: "PhD Candidate",
      name: "Michael Johnson",
      extraInfo: "Data Science & Physiology",
      image: placeholder,
      bio: "Michael focused on the intersection of data science and human physiology.",
      year: "2020",
      contact: "linkdin.com/in/michaeljohnson",
      current: "linkdin.com/in/michaeljohnson/current-position",
    },
  ];

  const claireBrown = [{
    title: "Professor & Director",
    name: "Dr. Claire Brown",
    extraInfo: "Research Lead",
    image: claire,
    bio: "I have been working in the field of quantitative bioimaging for over 25 years. My research has focused on applying biophysical techniques to fluorescence microscopy images to extract quantitative data measuring protein distributions, dynamics and interactions. I have applied these techniques to study proteins that regulate cell adhesion and migration to understand how migration is regulated at the molecular level in normal and diseased cellular systems. My research has also focused on optimizing live cell imaging to minimize phototoxicity and ensure the collection of high-fidelity data that is free of light induced artifacts. Quality control and standards for quantitative light microscopy have also been an important area of research. For 15 years, I have been directing the Advanced BioImaging Facility (ABIF) and developing and implementing active learning courses and workshops in fundamental and advanced light microscopy. In 2016, I also took over management of the Cell Imaging and Analysis Network (CIAN) light and the Cystic Fibrosis Translation Research Centre (CFTRc) light microscopes. Overall, I manage 18 research microscopes and a team of staff who provide high quality training and support for these advanced technologies.",
    contact: "linkdin.com/in/drbrown",
  },];

  return (
    <div style={{backgroundColor: "rgb(33, 37, 37)", color: "white"}}>
      <NavBarPerm />
      {/* <Navbar /> */}
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
              <Alumni {...member} />
            </Col>
          ))}
        </Row>
      </Container>
      <Join />
      <Footer />
    </div>
  );
};

export default Members;