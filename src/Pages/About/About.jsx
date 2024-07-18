import React, { useEffect } from 'react';
import AOS from 'aos';
import Breadcrumb from '../../components/Breadcrumb';
import TestimonialSection from '../Home/HomeComponents/TestimonialSection';
import CallToAction from '../Home/HomeComponents/CallToAction';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const aboutuspage = {
    img1: 'img/imgabout1.jpeg',
    img2: 'img/imgabout2.jpeg',
    img3: 'img/imgabout3.jpeg',
    title: 'Learn More About Our Work And Our Mission',
    description: 'Mission Accessibility is dedicated to advancing the rights of individuals with disabilities, focusing on digital accessibility. Founded by legal practitioners Rahul Bajaj and Amar Jain, who are blind, we aim to eliminate barriers and ensure full participation for persons with disabilities.',
    description2: "Our mission includes legal advocacy, shaping public narratives, providing resources and guidance, and fostering collaboration among disabled individuals and their organizations to address challenges."
  };

  const founders = [
    {
      name: 'Rahul Bajaj',
      description: 'Rahul Bajaj is a seasoned legal practitioner focused on disability rights and digital accessibility.',
      imgSrc: 'img/founder/RahulBajaj.jpeg'
    },
    {
      name: 'Amar Jain',
      description: 'Amar Jain is a dedicated advocate for the rights of individuals with disabilities, specializing in legal and accessibility issues.',
      imgSrc: 'img/founder/amarjaincasual.jpeg'
    }
  ];



  const boards = [
    {
      name: 'Justice A.K Sikri,',
      description: 'Former Judge, Supreme Court of India (Patron-in-Chief).',
      imgSrc: 'img/boards/JusticeAKSikri.jpeg'
    },
    {
      name: 'Mr. Dipendra Manocha',
      description: 'Director, Developing Countries, DAISY Consortium.',
      imgSrc: 'img/boards/MrDipendraManocha.jpeg'
    },
    {
      name: 'Arghya Sengupta',
      description: 'Founder and Research Director at Vidhi Centre for Legal Policy.',
      imgSrc: 'img/boards/ArghyaSengupta.jpeg'
    },
    {
      name: 'Nandan Kamath',
      description: 'Founder and Principal Lawyer at LawNK, co-founder and Managing Trustee of GoSports Foundation, a National Award-winning organization for elite athletes, and co-founder of the Sports and Society Accelerator.',
      imgSrc: 'img/boards/NandanKamath.jpeg'
    },
    {
      name: 'Dr. Elizabeth Kiss',
      description: 'Amar Jain is a dedicated advocate for the rights of individuals with disabilities, specializing in legal and accessibility issues.',
      imgSrc: 'img/boards/DrElizabethKiss.jpeg'
    },
    {
      name: 'Dr. Satendra Singh',
      description: 'Medical doctor at the University College of Medical Sciences and Guru Tegh Bahadur Hospital, Delhi.',
      imgSrc: 'img/boards/DrSatendraSingh.jpeg'
    },
  ];

  // const legalDocuments = [
  //   {
  //     type: 'Image',
  //     src: 'https://placehold.co/800x600', // Replace with your legal document image URL
  //     alt: 'Legal Document 1'
  //   },
  //   {
  //     type: 'Image',
  //     src: 'https://placehold.co/800x600', // Replace with your legal document image URL
  //     alt: 'Legal Document 1'
  //   },
  //   {
  //     type: 'PDF',
  //     src: 'https://example.com/legal_document.pdf', // Replace with your legal document PDF URL
  //     alt: 'Legal Document 2'
  //   }
  // ];

  return (
    <>
      <Breadcrumb pageName="About Us" />
      <div className="container-xxl bg-white p-0">
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                <h1 className="mb-4">{aboutuspage.title}</h1>
                <p>{aboutuspage.description}</p>
                <p className="mb-4">{aboutuspage.description2}</p>
              </div>
              <div className="col-lg-6 about-img wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
                <div className="row">
                  <div className="col-12 text-center">
                    <img className="img-fluid w-75 rounded-circle bg-light p-3" src={aboutuspage.img1} alt="Mission Accessibility" />
                  </div>
                  <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                    <img className="img-fluid w-100 rounded-circle bg-light p-3" src={aboutuspage.img2} alt="Mission Accessibility" />
                  </div>
                  <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                    <img className="img-fluid w-100 rounded-circle bg-light p-3" src={aboutuspage.img3} alt="Mission Accessibility" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Overview Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Overview of Our Organization</h2>
            <p>Mission Accessibility (MA) is a pioneering organization committed to advancing the rights and opportunities of persons with disabilities (PwDs) in India and globally. Founded by Rahul Bajaj and Amar Jain, both blind lawyers, MA addresses the significant gap between legal entitlements and practical implementation for PwDs through advocacy, awareness, and systemic transformation.</p>
            <p>Founded by Rahul Bajaj and Amar Jain, Mission Accessibility has a rich history of advocating for the rights of individuals with disabilities. Our team comprises dedicated professionals committed to making a difference.</p>
          </div>
        </div>
        {/* Overview End */}

        {/* Legal Documents Start */}
        {/* <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Legal Documents</h2>
            <div className="row g-4">
              {legalDocuments.map((doc, index) => (
                <div className="col-md-6" key={index}>
                  {doc.type === 'Image' && (
                    <img className="img-fluid rounded" src={doc.src} alt={doc.alt} />
                  )}
                  {doc.type === 'PDF' && (
                    <div className="embed-responsive embed-responsive-16by9 ">
                      <iframe className="embed-responsive-item w-100" title={doc.alt} src={doc.src}></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* Legal Documents End */}

        {/* Founders Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Our Founders</h2>
            <div className="row g-5">
              {founders.map((founder, index) => (
                <div className="col-lg-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100" key={index}>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid rounded-circle bg-light p-3" src={founder.imgSrc} alt={founder.name} style={{ width: '100px', height: '100px' }} />
                    <div className="ms-4">
                      <h4>{founder.name}</h4>
                      <p>{founder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Founders End */}

        {/* Vision and Mission Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Vision and Mission Statements</h2>
            <p>Our vision is to create a world where individuals with disabilities have equal access to all aspects of society, including the digital realm. Our mission is to advance the rights of the disabled through appropriate legal advocacy strategies, help institutions align their practices with disability rights laws, shape the public narrative on the importance of accessibility, provide resources and guidance for digital accessibility, and foster collaboration among individuals with disabilities and their organizations.</p>
          </div>
        </div>
        {/* Vision and Mission End */}


        {/* Founders Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Board of Advisors</h2>
            <div className="row g-5">
              {boards.map((founder, index) => (
                <div className="col-lg-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100" key={index}>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid rounded-circle bg-light p-3" src={founder.imgSrc} alt={founder.name} style={{ width: '100px', height: '100px' }} />
                    <div className="ms-4">
                      <h4>{founder.name}</h4>
                      <p>{founder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Work With Us Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Work With Us</h2>
            <p>We offer various opportunities for individuals to work with us, including internships. Join us in our mission to make the world more accessible and inclusive.</p>
          </div>
        </div>
        {/* Work With Us End */}

        {/* Testimonials Start */}
        {/* <TestimonialSection /> */}
        {/* Testimonials End */}

        {/* Call To Action Start */}
        {/* <div className="container-xxl py-5">
          <div className="container">
            <div className="bg-light rounded">
              <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-aos="fade" data-aos-delay="100" style={{ minHeight: '400px' }}>
                  <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src="https://placehold.co/400x400" style={{ objectFit: 'cover' }} alt="Call to Action" />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-aos="fade" data-aos-delay="500">
                  <div className="h-100 d-flex flex-column justify-content-center p-5">
                    <h1 className="mb-4">Join Our Mission</h1>
                    <p className="mb-4">Support our efforts in advancing the rights of individuals with disabilities. Join us in making digital platforms more accessible and inclusive.</p>
                    <a className="btn btn-primary py-3 px-5" href="">Get Started Now<i className="fa fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <CallToAction />
        {/* Call To Action End */}
      </div>
    </>
  );
};

export default About;
