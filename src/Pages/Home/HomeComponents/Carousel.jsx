import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const items = [
    {
      imgSrc: 'img/ladyofjustice.jpg',
      title: 'Mission Accessibility',
      description: 'Aiming to eliminate the barriers faced by persons with disabilities and ensure their full and effective participation.',
    },
    {
      imgSrc: 'img/justice.jpg',
      title: 'Mission Accessibility',
      description: 'Serving as a platform for persons with disabilities and their organizations to come together and collectively find a way forward to address the biggest challenges being faced by persons with disabilities.',
    },
  ];

  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel
        className="owl-carousel header-carousel position-relative"
        items={1}
        loop
        nav
        autoplay // Enable autoplay
        autoplayTimeout={5000} // Autoplay interval in milliseconds (5 seconds)
      >
        {items.map((item, index) => (
          <div className="owl-carousel-item position-relative" key={index} style={{height:"70vh", overflow:'hidden'}} >
            <img className="img-fluid" src={item.imgSrc} alt=""/>
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: 'rgba(0, 0, 0, .2)' }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown mb-4">
                      {item.title}
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      {item.description}
                    </p>
                    <Link
                      to="/about"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Learn More
                    </Link>
                    {/* <a
                      href=""
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                      Our Classes
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
