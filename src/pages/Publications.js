import React from "react";
import NavBarPerm from "../components/NavBarPerm";
import PublicationCard from "../components/PublicationCard";
import Footer from "../components/Footer";
import Join from "../components/Join";
import publicationsData from "../data/publications.json"; // <-- IMPORT THE FILE

const Publications = () => {
  // Transform the imported data immediately
  const publications = publicationsData.articles
    ? publicationsData.articles.map(article => ({
        title: article.title,
        description: article.publication,
        date: article.year ? `${article.year}` : "N/A",
        link: article.link,
      })).sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  return (
    <div>
      <NavBarPerm />
      <div style={styles.container}>
        <div style={styles.publicationsList}>
          <div style={styles.verticalLine}></div>
          {publications.map((publication, index) => (
            <div
              key={index}
              style={{
                ...styles.publicationItem,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div style={styles.cardWrapper}>
                <PublicationCard
                  title={publication.title}
                  description={publication.description}
                  date={publication.date}
                  link={publication.link}
                />
              </div>
              <div
                style={{
                  ...styles.centerSection,
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
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
