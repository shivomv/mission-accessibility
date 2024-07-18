import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const callToActionData = {
    title: 'Join Us in Making a Difference',
    description:
      'Together, we can provide essential support and help to those in need. Become a part of our mission and help create a brighter future for all.',
    buttonText: 'Get Involved Now',
    buttonLink: '/contact',
    imageSrc: 'img/JoinUs.jpeg',
    imageAlt: 'Join Us in Making a Difference'
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={callToActionData.imageSrc}
                  alt={callToActionData.imageAlt}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">{callToActionData.title}</h1>
                <p className="mb-4">{callToActionData.description}</p>
                <Link className="btn btn-primary py-3 px-5" to={callToActionData.buttonLink}>
                  {callToActionData.buttonText}
                  <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
