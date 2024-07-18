import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Sample data
    const footerData = {
        contact: {
            // address: "123 Street, New York, USA",
            phone: "+919892622230",
            email: "missionaccessibility@gmail.com",
            socialLinks: [
                { icon: "fa-twitter", url: "https://x.com/MissionAccess_" },
                // { icon: "fa-facebook-f", url: "#" },
                // { icon: "fa-youtube", url: "#" },
                { icon: "fa-linkedin-in", url: "https://www.linkedin.com/company/mission-accessibility/posts/?feedView=all" }
            ]
        },
        quickLinks: [
            { title: "About Us", url: "/about" },
            { title: "Contact Us", url: "/contact" },
            // { title: "Our Services", url: "#" },
            { title: "Privacy Policy", url: "#" },
            { title: "Terms & Condition", url: "#" }
        ],
        photoGallery: [
            { src: "img/imgabout1.jpeg", alt: "Class 1" },
            { src: "img/imgabout2.jpeg", alt: "Class 2" },
            { src: "img/imgabout3.jpeg", alt: "Class 3" },
            // { src: "https://placehold.co/400x400", alt: "Class 4" },
            // { src: "https://placehold.co/400x400", alt: "Class 5" },
            // { src: "https://placehold.co/400x400", alt: "Class 6" }
        ]
    };

    const { contact, quickLinks, photoGallery } = footerData;

    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4 ">Get In Touch</h3>
                        {/* <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{contact.address}</p> */}
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{contact.phone}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{contact.email}</p>
                        <div className="d-flex pt-2">
                            {contact.socialLinks.map((link, index) => (
                                <a key={index} className="btn btn-outline-light btn-social" href={link.url}><i className={`fab ${link.icon}`}></i></a>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        {quickLinks.map((link, index) => (
                            <a key={index} className="btn btn-link text-white-50" href={link.url}>{link.title}</a>
                        ))}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className="text-white mb-4">Photo Gallery</h3>
                        <div className="row g-2 pt-2">
                            {photoGallery.map((photo, index) => (
                                <div key={index} className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={photo.src} alt={photo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Downloads</h3>
                        <ul className="list-unstyled">
                            <li><a href="/path/to/download/file1.pdf" className="text-white-50">Download File 1</a></li>
                            <li><a href="/path/to/download/file2.pdf" className="text-white-50">Download File 2</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="/">Mission Accessibility</Link>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                {/* <a href="#">Cookies</a> */}
                                {/* <a href="#">Help</a> */}
                                <Link to="/about">FAQs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
