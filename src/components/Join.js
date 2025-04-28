import React from "react";
import Button from "react-bootstrap/Button";

const Join = () => {
  return (
    <Button
      variant="light"
      size="sm"
      href="/brown_lab/join" 
      className="shadow"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        padding: "10px 20px",
        borderRadius: "30px",
        fontWeight: "bold",
      }}
    >
      Join Us
    </Button>
  );
};

export default Join;
