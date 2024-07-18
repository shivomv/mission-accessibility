import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const [aboutSectionData, setAboutSectionData] = useState({
        title: 'Learn More About Our Work',
        p1: `
        Mission Accessibility (MA), founded by blind lawyers Rahul Bajaj and Amar Jain, aims to bridge the gap between legal entitlements and implementation for persons with disabilities in India. MA operates through three main verticals: proactive and reactive grievance handling, public awareness campaigns, and assisting institutions to align with disability laws and human rights principles.`,
        p2: `They engage in policy advocacy and community-driven solutions, focusing on sectors like education and employment. MA also provides training on accessibility standards and has achieved legal victories promoting disability rights. While their primary focus is India, MA collaborates internationally to promote disability-friendly practices, aiming for global accessibility and inclusion.`,
        img1: 'img/Group1.jpeg',
        img2: 'img/Group2.jpeg',
        img3: 'img/Group3.jpeg'
    })

    return (
        <div className="container-xxl py-5 bg-light">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={aboutSectionData.img1} alt="" className="img-fluid w-90 h-100 rounded-circle bg-light p-3" />
                            </div>
                            <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                <img src={aboutSectionData.img2} alt="" className="img-fluid w-100 h-100 rounded-circle bg-light p-3" />
                            </div>
                            <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                                <img src={aboutSectionData.img3} alt="" className="img-fluid w-100 rounded-circle bg-light p-3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4">{aboutSectionData.title}</h1>
                        <p>{aboutSectionData.p1}</p>
                        <p className="mb-4">{aboutSectionData.p2}</p>
                        <div className="row g-4 align-items-center justify-content-end">
                            <div className="col-sm-6">
                                <Link to='/about' className="btn btn-primary rounded-pill py-3 px-5">Read More</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
