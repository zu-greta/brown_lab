import React from "react";
import Navbar from "../components/NavBar";
import DarkModeToggle from "../components/DarkModeToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Overview from "./Overview";
import Research from "./Research";
import RecentPubs from "./RecentPubs";
import ActiveMem from "./ActiveMem";
import Footer from "../components/Footer";
import Funding from "./Funding";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="overview">
        <Overview />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="publications">
        <RecentPubs />
      </section>
      <section id="members">
        <ActiveMem />
      </section>
      <section id="funding">
        <Funding />
      </section>
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

export default Home;
