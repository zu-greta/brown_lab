import React from "react";

const Research = () => {
    const backStyle = {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'rgb(168, 151, 213)',
        padding: '60px 0',
        textAlign: 'center',
    };

    const bubbleStyle = {
        position: 'absolute',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        cursor: 'pointer',
    };

    // Random positions for the bubbles
    const positions = [
        { top: '50px', left: '100px' },
        { top: '250px', left: '350px' },
        { top: '400px', left: '200px' },
        { top: '600px', left: '100px' },
        { top: '500px', left: '450px' },
        { top: '150px', left: '550px' },
    ];

    const researchAreas = [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Natural Language Processing",
        "Computer Vision",
        "Robotics"
    ];

    return (
        <div style={backStyle}>
            <h1>Research Areas</h1>
            <div style={{ position: 'relative', minHeight: '800px' }}>
                {researchAreas.map((area, index) => (
                    <div
                        key={index}
                        style={{
                            ...bubbleStyle,
                            top: positions[index]?.top,
                            left: positions[index]?.left,
                            backgroundColor: `hsl(${(index * 60) % 360}, 70%, 80%)`,
                        }}
                    >
                        {area}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;