import React, { useState } from "react";
// import Navbar from "../components/NavBar";
import NavBarPerm from "../components/NavBarPerm";
import PublicationCard from "../components/PublicationCard";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";
import { col } from "framer-motion/client";

const Publications = () => {
  // Sample publication data
  const publications = [
    { title: "Publication 1", description: "Description of publication 1", date: "2025-03-01" },
    { title: "Publication 2", description: "Description of publication 2", date: "2025-02-25" },
    { title: "Publication 3", description: "Description of publication 3", date: "2025-01-10" },
    { title: "Publication 4", description: "Description of publication 4", date: "2025-03-05" },
  ];

  // State for search term
  const [search, setSearch] = useState("");

  // Filter publications based on the search term
  const filteredPublications = publications.filter((pub) =>
    pub.title.toLowerCase().includes(search.toLowerCase()) ||
    pub.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBarPerm />
      {/* <Navbar /> */}
      <div style={styles.container}>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search publications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchBar}
        />

        <div style={styles.publicationsList}>
          {/* Loop through publications and create alternating cards */}
          {filteredPublications.map((publication, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <PublicationCard
                title={publication.title}
                description={publication.description}
                date={publication.date}
              />
            </div>
          ))}
              <DarkModeToggle />
        </div>
      </div>
        <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
    colour: "white",
    backgroundColor: "rgb(35, 36, 39)",
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  publicationsList: {
    display: "flex",
    color: "white",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};

export default Publications;