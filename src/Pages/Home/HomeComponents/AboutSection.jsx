import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const [aboutSectionData, setAboutSectionData] = useState({
        title: 'Learn More About Our Work And Our Cultural Activities',
        p1: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
        p2: 'Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.',
        img1: 'https://placehold.co/400x400',
        img2: 'https://placehold.co/400x400',
        img3: 'https://placehold.co/400x400'
    })

    return (
        <div className="container-xxl py-5 bg-light">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={aboutSectionData.img1} alt="" className="img-fluid w-75 rounded-circle bg-light p-3" />
                            </div>
                            <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                <img src={aboutSectionData.img2} alt="" className="img-fluid w-100 rounded-circle bg-light p-3" />
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
