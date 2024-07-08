import React from "react";
import ContactFormComponent from "../../../components/ContactFormComponent";

const ContactForm = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            {/* Left column for form */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <ContactFormComponent />
              </div>
            </div>
            {/* Right column for image */}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="img/appointment.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Make Appointment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
