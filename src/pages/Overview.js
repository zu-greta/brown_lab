import React from "react";
import { Carousel } from 'react-bootstrap';

import placeholder from '../assets/placeholder.jpg';

const Overview = () => {
    const backStyle = {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'rgb(125, 184, 197)',
        padding: '60px 0',
        textAlign: 'center',
    };

    const sectionStyle = {
        padding: '40px 20px',
        backgroundColor: 'rgb(125, 184, 197)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const descriptionStyle = {
        width: '45%',
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#333',
    };

    return (
        <div>
            <div style={backStyle}>
                <h1>Lab Overview</h1>
            </div>

            {/* Overview Section */}
            <div style={sectionStyle}>
                <div style={descriptionStyle}>
                    <h3>About Our Lab</h3>
                    <p>
                        Welcome to our lab! ...
                    </p>
                </div>

                <div style={{ width: '45%' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={placeholder}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Research Image 1</h5>
                                <p>Exploring new AI technologies.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={placeholder}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Research Image 2</h5>
                                <p>Machine learning in action.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={placeholder}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Research Image 3</h5>
                                <p>Collaborating on data science projects.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Overview;

