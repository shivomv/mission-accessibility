// Footer.js

import React from 'react';

const Footer = () => {
    // footerData.js

const footerData = {
    contact: {
        address: "123 Street, New York, USA",
        phone: "+012 345 67890",
        email: "info@example.com",
        socialLinks: [
            { icon: "fa-twitter", url: "#" },
            { icon: "fa-facebook-f", url: "#" },
            { icon: "fa-youtube", url: "#" },
            { icon: "fa-linkedin-in", url: "#" }
        ]
    },
    quickLinks: [
        { title: "About Us", url: "#" },
        { title: "Contact Us", url: "#" },
        { title: "Our Services", url: "#" },
        { title: "Privacy Policy", url: "#" },
        { title: "Terms & Condition", url: "#" }
    ],
    photoGallery: [
        { src: "https://placehold.co/400x400", alt: "Class 1" },
        { src: "https://placehold.co/400x400", alt: "Class 2" },
        { src: "https://placehold.co/400x400", alt: "Class 3" },
        { src: "https://placehold.co/400x400", alt: "Class 4" },
        { src: "https://placehold.co/400x400", alt: "Class 5" },
        { src: "https://placehold.co/400x400", alt: "Class 6" }
    ],
    newsletterText: "Dolor amet sit justo amet elitr clita ipsum elitr est."
};


    const { contact, quickLinks, photoGallery, newsletterText } = footerData;

    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{contact.address}</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{contact.phone}</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>{contact.email}</p>
                        <div className="d-flex pt-2">
                            {contact.socialLinks.map((link, index) => (
                                <a key={index} className="btn btn-outline-light btn-social" href={link.url}><i className={`fab ${link.icon}`}></i></a>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        {quickLinks.map((link, index) => (
                            <a key={index} className="btn btn-link text-white-50" href={link.url}>{link.title}</a>
                        ))}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Photo Gallery</h3>
                        <div className="row g-2 pt-2">
                            {photoGallery.map((photo, index) => (
                                <div key={index} className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src={photo.src} alt={photo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Newsletter</h3>
                        <p>{newsletterText}</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#">Home</a>
                                <a href="#">Cookies</a>
                                <a href="#">Help</a>
                                <a href="#">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
