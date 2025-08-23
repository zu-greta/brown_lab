import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import placeholder from '../../assets/placeholder.jpg';
import claire from '../../assets/members_images/claire_brown.jpg';

const ActiveMem = () => {
    const sectionStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(33, 37, 37)',
        padding: '6vh 10vh',
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
        <>
            <div style={sectionStyle}>
                <div style={imageStyle}>
                    <img src={claire} alt="Claire Brown" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div style={descriptionStyle}>
                    <h2>Claire Brown</h2>
                    <p>
                        I have been working in the field of quantitative bioimaging for over 25 years. 
                        My research has focused on applying biophysical techniques to fluorescence microscopy 
                        images to extract quantitative data measuring protein distributions, dynamics and interactions.
                    </p>
                    <Button as={Link} to="/members" variant="outline-info">
                        See full profile →
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <div style={descriptionStyle}>
                    <h2>Our Members</h2>
                    <p>
                        Our team consists of talented and driven individuals who are passionate about advancing our mission.
                        We work together on exciting projects and contribute to a collaborative environment that values creativity and innovation.
                    </p>
                    <Link to="/members">
                        <Button variant="outline-info" >See All Members →</Button>
                    </Link>
                    <br />
                    <br />
                </div>
                <div style={imageStyle}>
                    <img src={placeholder} alt="Team members" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
            </div>
        </>
    );
};

export default ActiveMem;