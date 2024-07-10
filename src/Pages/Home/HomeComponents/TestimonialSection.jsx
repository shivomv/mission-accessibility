import React, { useEffect } from 'react';
// Import WOW.js and Owl Carousel dependencies if required
// import WOW from 'wow.js';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const testimonialData = {
  sectionTitle: "What People Say",
  sectionDescription:
    "Hear from the people who have been positively impacted by our work.",
  testimonials: [
    {
      text: "Their support and dedication have transformed our community. We are forever grateful.",
      img: 'https://placehold.co/400x400',
      name: "Name",
      role: "Role"
    },
    {
      text: "Volunteering here has been a life-changing experience. The impact we make is incredible.",
      img: 'https://placehold.co/400x400',
      name: "Name",
      role: "Role"
    },
    {
      text: "Partnering with this NGO has enabled us to reach and support more people in need.",
      img: 'https://placehold.co/400x400',
      name: "Name",
      role: "Role"
    }
  ]
};

const TestimonialSection = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();

    // Initialize Owl Carousel
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 1000
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="mb-3">{testimonialData.sectionTitle}</h1>
          <p>{testimonialData.sectionDescription}</p>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          {testimonialData.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item bg-light rounded p-5">
              <p className="fs-5">{testimonial.text}</p>
              <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial.img} alt={testimonial.name} style={{ width: '90px', height: '90px' }} />
                <div className="ps-3">
                  <h3 className="mb-1">{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
