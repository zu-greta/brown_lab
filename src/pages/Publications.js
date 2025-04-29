import React, { useEffect, useState } from "react";
import NavBarPerm from "../components/NavBarPerm";
import PublicationCard from "../components/PublicationCard";
import Footer from "../components/Footer";
import Join from "../components/Join";
// import axios from "axios"; 

const backendUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3001/api/publications"
    : "https://https://zu-greta.github.io/brown_lab/api/publications"; 


const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // const response = await fetch("http://localhost:3001/api/publications");
        const response = await fetch(backendUrl);
        const data = await response.json();
        console.log("Fetched data:", data);
    
        if (data.articles) {
          const mappedPublications = data.articles.map(article => ({
            title: article.title,
            description: article.publication,
            date: article.year ? `${article.year}` : "N/A", // if year missing
            link: article.link,
          }));
    
          // Sort by date descending
          mappedPublications.sort((a, b) => new Date(b.date) - new Date(a.date));
    
          setPublications(mappedPublications);
        } else {
          console.error("No articles field in data!");
        }
      } catch (error) {
        console.error("Failed to fetch publications:", error);
      }
    };
    
    

    fetchPublications();
  }, []);
  

  return (
    <div>
      <NavBarPerm />
      <div style={styles.container}>
        <div style={styles.publicationsList}>
          {/* Vertical center bar */}
          <div style={styles.verticalLine}></div>
          {publications.map((publication, index) => (
            <div
              key={index}
              style={{
                ...styles.publicationItem,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                // justifyContent: "center", 
              }}
            >
              {/* Card side */}
              <div style={styles.cardWrapper}>
                <PublicationCard
                  title={publication.title}
                  description={publication.description}
                  date={publication.date}
                  link={publication.link}
                />
              </div>

              {/* Center date/tilda side */}
              <div
                style={{
                  ...styles.centerSection,
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end", // Right for left cards, left for right cards
                  marginRight: index % 2 === 0 ? "20px" : "0",
                  marginLeft: index % 2 === 0 ? "0" : "20px",
                }}
              >
                <div style={styles.tilda}>~ {publication.date} ~</div>
              </div>
            </div>
          ))}


          <Join />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "3%",
    backgroundColor: "rgb(33, 37, 37)",
    position: "relative",
  },
  publicationsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    color: "white",
  },
  verticalLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "2px",
    backgroundColor: "#ccc",
    transform: "translateX(-50%)",
    zIndex: 0,
  },
  publicationItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  cardWrapper: {
    flex: "0 0 40%",
    maxWidth: "40%",
    padding: "1%",
  },
  centerSection: {
    flex: "0 0 20%",
    maxWidth: "20%",
    display: "flex",
    flexDirection: "column",
    fontSize: "24px",
    color: "white",
  },  
  tilda: {
    fontSize: "90%",
    color: "lightgray",
  },
};

export default Publications;