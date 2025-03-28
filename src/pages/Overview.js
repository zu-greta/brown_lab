import React from "react";
// import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import placeholder from '../assets/placeholder.jpg';

const Overview = () => {
    const backStyle = {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'rgb(50, 40, 61)',
        padding: '6vh 10vh',
        textAlign: 'left',
    };

    const sectionStyle = {
        color: 'white',
        padding: '6vh 10vh',
        backgroundColor: 'rgb(33, 37, 37)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const descriptionStyle = {
        width: '45%',
        fontSize: '18px',
        lineHeight: '1.6',
    };

    return (
        <div>
            <div style={backStyle}>
                <h1>About Us</h1>
            </div>

            {/* Overview Section */}
            <div style={sectionStyle}>
                <div style={descriptionStyle}>
                    <h3>Mission</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        ac felis non eros lacinia ultricies. Donec id aliquet nunc. In
                        hac habitasse platea dictumst. Nullam nec nisl ac nunc
                    </p>
                    <br />
                    <h3>Core Values</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        ac felis non eros lacinia ultricies. Donec id aliquet nunc. In
                        hac habitasse platea dictumst. Nullam nec nisl ac nunc
                    </p>
                    <br />
                    <h3>Research Areas</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        ac felis non eros lacinia ultricies. Donec id aliquet nunc. In
                        hac habitasse platea dictumst. Nullam nec nisl ac nunc
                    </p>
                </div>

                <div style={{ width: '45%' }}>
                    <Image
                        src={placeholder}  // TODO - Replace with actual image
                        alt="Brown Lab"
                        fluid
                        rounded
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;

