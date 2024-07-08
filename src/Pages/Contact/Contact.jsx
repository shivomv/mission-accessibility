import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ContactFormComponent from "../../components/ContactFormComponent";

const Contact = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />
      <div className="container-xxl bg-light p-0">
        {/* Contact Info Start */}
        <section className="container-xxl py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="display-4 mb-4">Contact Us</h1>
                <p className="lead mb-4">
                  Have questions or want to get involved? Contact us using the
                  information below:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>
                    <span>
                      NGO Name Headquarters, Street Address, City, Country
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-phone-alt text-primary me-3"></i>
                    <span>+123 456 7890</span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-envelope text-primary me-3"></i>
                    <span>info@ngoname.org</span>
                  </li>
                </ul>

                <div className="mb-4">
                  <a
                    className="btn btn-primary rounded-pill py-3 px-5 me-3"
                    href="#"
                  >
                    Get Directions
                  </a>
                  <a
                    className="btn btn-outline-primary rounded-pill py-3 px-5"
                    href="#"
                  >
                    Send Email
                  </a>
                </div>
                {/* <div className='d-flex align-items-center justify-content-center'>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div> */}
                {/* Embedding Google Maps iframe */}
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="bg-white p-4 rounded shadow-sm">
                  <ContactFormComponent />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Info End */}
      </div>
    </>
  );
};

export default Contact;
