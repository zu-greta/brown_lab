import React from "react";
import Navbar from "../components/NavBar";
// import NavbarPerm from "../components/NavBarPerm";
import Join from "../components/Join";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Overview from "./Overview";
import Research from "./ProjectsSection";
import RecentPubs from "./RecentPubs";
import ActiveMem from "./ActiveMem";
import Footer from "../components/Footer";
import Funding from "./Funding";

const Home = () => {
  return (
    <div>
      {/* <NavbarPerm /> */}
      <Navbar />
      <Hero />
      <section id="overview">
        <Overview />
      </section>
      <section id="publications">
        <RecentPubs />
      </section>
      <section id="members">
        <ActiveMem />
      </section>
      <section id="projects">
        <Research />
      </section>
      <section id="funding">
        <Funding />
      </section>
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
