import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import AOS from 'aos';

import './services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const servicesData = [
    {
      imgSrc: 'https://placehold.co/400x400',
      title: 'Digital Accessibility Audits',
      description: 'We provide comprehensive audits to ensure your digital platforms are accessible to all users, including those with disabilities.',
      iconClass: 'bi bi-check-circle'
    },
    {
      imgSrc: 'https://placehold.co/400x400',
      title: 'Legal Advocacy',
      description: 'Our legal experts advocate for the rights of individuals with disabilities, ensuring compliance with accessibility laws and regulations.',
      iconClass: 'bi bi-gavel'
    },
    {
      imgSrc: 'https://placehold.co/400x400',
      title: 'Training and Workshops',
      description: 'We offer training sessions and workshops to educate organizations on best practices for digital accessibility and inclusion.',
      iconClass: 'bi bi-journal'
    },
    {
      imgSrc: 'https://placehold.co/400x400',
      title: 'Consulting Services',
      description: 'Our consulting services provide tailored solutions to help organizations achieve their accessibility goals.',
      iconClass: 'bi bi-people'
    }
  ];

  const strategies = [
    {
      title: 'Sensitization',
      description: 'We conduct sensitization programs to raise awareness about the importance of digital accessibility and the rights of individuals with disabilities.',
      iconClass: 'bi bi-eye'
    },
    {
      title: 'Grievance Redressal',
      description: 'Our grievance redressal services assist individuals with disabilities in addressing accessibility issues and ensuring their rights are upheld.',
      iconClass: 'bi bi-chat-dots'
    },
    {
      title: 'Capacity Building',
      description: 'We offer capacity building initiatives to equip organizations with the knowledge and tools needed to create accessible digital environments.',
      iconClass: 'bi bi-people-fill'
    }
  ];

  const workshopsAndServices = [
    {
      title: 'Workshops on best practices for accessibility',
      iconClass: 'bi bi-lightbulb'
    },
    {
      title: 'Panel discussions with experts in the field',
      iconClass: 'bi bi-people'
    },
    {
      title: 'Accessibility audits to identify and address barriers',
      iconClass: 'bi bi-clipboard-check'
    },
    {
      title: 'Consulting services tailored to your organization\'s needs',
      iconClass: 'bi bi-person-check'
    }
  ];

  return (
    <>
      <Breadcrumb pageName="Services" />
      <div className="container-xxl bg-white p-0">
        {/* Services Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4 text-center">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {servicesData.map((service, index) => (
                <div className="col" key={index} data-aos="fade-up" data-aos-delay="100">
                  <div className="service-item bg-light rounded p-4 d-flex flex-column flex-md-row align-items-md-center">
                    <div className="service-img mb-3 mb-md-0 me-md-3 text-center">
                      <img className="img-fluid rounded" src={service.imgSrc} alt={service.title} style={{ maxWidth: '150px' }} />
                    </div>
                    <div>
                      <h4 className="mb-3">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Services End */}

        {/* Strategies Start */}
        <div className="container-xxl py-5" data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <h2 className="mb-4 text-center">Our Main Strategies</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {strategies.map((strategy, index) => (
                <div className="col" key={index} data-aos="fade-up" data-aos-delay="100">
                  <div className="strategy-item bg-light rounded p-4 text-center">
                    <i className={`bi ${strategy.iconClass} display-4 mb-3`}></i>
                    <h4 className="mb-3">{strategy.title}</h4>
                    <p>{strategy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Strategies End */}

        {/* Workshops and Other Services Start */}
        <div className="container-xxl py-5" data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <h2 className="mb-4 text-center">Other Services</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {workshopsAndServices.map((item, index) => (
                <div className="col" key={index} data-aos="fade-up" data-aos-delay="100">
                  <div className="workshop-service-item bg-light rounded p-4 text-center">
                    <i className={`bi ${item.iconClass} display-4 mb-3`}></i>
                    <p className="mb-0">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Workshops and Other Services End */}
      </div>
    </>
  );
};

export default Services;
