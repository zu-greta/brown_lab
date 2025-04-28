import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import placeholder from '../assets/placeholder.jpg';
import claire from '../assets/claire_brown.jpg';

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
                        Section about Claire Brown. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis non eros lacinia ultricies. Donec id aliquet nunc. In hac habitasse platea dictumst. Nullam nec nisl ac nunc.
                    </p>
                    <Link to="/members"> 
                    {/* TODO link to extra page for claire */}
                        <Button variant="outline-info" >See full profile →</Button>
                    </Link>
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
                    {/* join the team
                    <Link to="/join">
                        <Button variant="outline-light" >Join Our Team →</Button>
                    </Link> */}
                </div>
                <div style={imageStyle}>
                    <img src={placeholder} alt="Team members" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
            </div>
        </>
    );
};

export default ActiveMem;