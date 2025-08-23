import React from "react";
// import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import placeholder from '../../assets/placeholder.jpg';

const Overview = () => {
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
            {/* Overview Section */}
            <div style={sectionStyle}>
                <div style={descriptionStyle}>
                    <h1>Lab Overview</h1>
                    <br />
                    <h3>Research Area: Molecular & Cell Biology</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        I have been working in the field of quantitative bioimaging for over 25 years. 
                        My research has focused on applying biophysical techniques to fluorescence microscopy 
                        images to extract quantitative data measuring protein distributions, dynamics and 
                        interactions. I have applied these techniques to study proteins that regulate 
                        cell adhesion and migration to understand how migration is regulated at the molecular 
                        level in normal and diseased cellular systems. My research has also focused on optimizing 
                        live cell imaging to minimize phototoxicity and ensure the collection of high-fidelity 
                        data that is free of light induced artifacts. Quality control and standards for quantitative 
                        light microscopy have also been an important area of research. For 15 years, I have been 
                        directing the Advanced BioImaging Facility (ABIF) and developing and implementing 
                        active learning courses and workshops in fundamental and advanced light microscopy. 
                        In 2016, I also took over management of the Cell Imaging and Analysis Network (CIAN) light 
                        and the Cystic Fibrosis Translation Research Centre (CFTRc) light microscopes. Overall, 
                        I manage 18 research microscopes and a team of staff who provide high quality training 
                        and support for these advanced technologies.
                    </p>
                    <br />
                    <h3>Research Description: Cell Migration</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        Proper regulation of cell migration is crucial for many biological processes including 
                        organ development, tissue repair and the immune response. Defects in cell migration play 
                        a central role in developmental disorders, neuronal disorders, tumorigenesis, immune disorders 
                        and cancer metastasis. Fundamentally, cell migration is regulated though small adhesive 
                        structures across the cell that assemble and disassemble allowing the cell to translocate. 
                        My lab applies advanced light microscopy tools including image correlation microscopy in 
                        order to understand the molecular mechanisms that spatially and temporally regulate adhesions 
                        and control cell migration. An understanding of these fundamental mechanisms will lead to 
                        new insights into what causes migration related defects and disease. We are specifically 
                        interested in understanding cell migration defects that regulate breast cancer cell invasion 
                        and metastasis.
                    </p>
                    <br />
                    <h3>Research Description: Instrument Standardization and Quality Control</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        As the Director of the ABIF and manager of the CIAN and CFTRc light microscopes we are 
                        developing protocols and standards for testing the quality of light microscopes. This is 
                        important for quantitative bioimaging and reproducibility of scientific data. We have 
                        developed protocols for measuring laser stability, microscope alignment, resolution, objective 
                        lens quality and quality of 3D image data stacks. We are leading world-wide studies on 
                        instrument quality and publishing detailed protocols enabling microscopists to validate and 
                        maintain their equipment.
                    </p>
                    <br />
                    <h3>Research Description: ABIF, CIAN, CFTRc</h3>
                    {/* horizontal seperator */}
                    <hr style={{ width: '50%', textAlign: 'left' }} />
                    <p>
                        Combined the three facilities serve about 200 users from 80 laboratories across Montreal 
                        and several from across Canada to conduct their imaging experiments. The facility has 
                        expertise in many areas including live cell imaging, total internal reflection fluorescence 
                        (TIRF) microscopy, fluorescence lifetime imaging microscopy (FLIM), multi-photon microscopy, 
                        laser micro-dissection, fluorescence correlation spectroscopy (FCS), image processing and 
                        analysis, spectral imaging and high content screening. We have also developed and run more 
                        than 80 workshops and courses, in collaboration with corporations in the field of light microscopy, 
                        including the international recognized Montreal Light Microscopy Course (MLMC).
                    </p>
                </div>

                <div style={{ width: '45%' }}>
                    <Image
                        src={placeholder}  // TODO - Replace with actual image
                        alt="Brown Lab"
                        fluid
                        rounded
                    />
                    <br />
                    <br />
                    <Image
                        src={placeholder}  // TODO - Replace with actual image
                        alt="Brown Lab"
                        fluid
                        rounded
                    />
                    <br />
                    <br />
                    <Image
                        src={placeholder}  // TODO - Replace with actual image
                        alt="Brown Lab"
                        fluid
                        rounded
                    />
                    <br />
                    <br />
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

