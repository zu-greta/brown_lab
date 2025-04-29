import React from "react";
import Button from "react-bootstrap/Button";

const PublicationCard = ({ title, description, date, link }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
                 {/* button read more leads to the link */}
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <Button variant="outline-info">Read More →</Button>
        </a>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "10px 0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  cardContent: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  separator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    color: "black",
  },
  tilda: {
    fontSize: "24px",
    color: "#666",
  },
  date: {
    fontSize: "14px",
    color: "#999",
  },
};

export default PublicationCard;
