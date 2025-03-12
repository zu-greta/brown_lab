import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ActiveMem = () => {
    const sectionStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(168, 151, 213)',
        padding: '60px 20px',
        color: 'white',
        fontSize: '20px',
    };

    const imageStyle = {
        width: '40%',
        borderRadius: '10px',
    };

    const descriptionStyle = {
        width: '55%',
    };

    return (
        <div style={sectionStyle}>
            <div style={imageStyle}>
                <img src="https://via.placeholder.com/350" alt="Team members" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={descriptionStyle}>
                <h2>Our Members</h2>
                <p>
                    Our team consists of talented and driven individuals who are passionate about advancing our mission.
                    We work together on exciting projects and contribute to a collaborative environment that values creativity and innovation.
                </p>
                <Link to="/members">
                    <Button variant="outline-light" >See All Members →</Button>
                </Link>
            </div>
        </div>
    );
};

export default ActiveMem;