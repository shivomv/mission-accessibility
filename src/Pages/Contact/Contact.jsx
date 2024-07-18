import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ContactFormComponent from "../../components/ContactFormComponent";

const Contact = () => {
  const [questions, setQuestions] = useState([
    // {
    //   id: 1,
    //   question: "What are your office hours?",
    //   answer:
    //     "Our office hours are Monday to Friday, from 9:00 AM to 5:00 PM.",
    // },
    // {
    //   id: 2,
    //   question: "How can I volunteer with your organization?",
    //   answer:
    //     "You can volunteer by visiting our office or contacting us via email or phone. We offer various volunteer opportunities throughout the year.",
    // },
    // {
    //   id: 3,
    //   question: "Where can I find information about your upcoming events?",
    //   answer:
    //     "Information about our upcoming events can be found on our website's Events page or by following our social media channels.",
    // },
    // {
    //   id: 4,
    //   question: "Do you provide accessibility services?",
    //   answer:
    //     "Yes, we provide accessibility services for individuals with disabilities. Please contact us for more information or specific requests.",
    // },
  ]);

  const [userQuestion, setUserQuestion] = useState("");

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (userQuestion.trim() === "") {
      alert("Please enter a question.");
      return;
    }
    const newQuestion = {
      id: questions.length + 1,
      question: userQuestion,
      answer: "Answer pending...",
    };
    setQuestions([...questions, newQuestion]);
    setUserQuestion("");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2; // Number of questions per page

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate current page questions
  const indexOfLastQuestion = currentPage * pageSize;
  const indexOfFirstQuestion = indexOfLastQuestion - pageSize;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

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
                  {/* <li className="mb-3">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>
                    <span>
                      NGO Name Headquarters, Street Address, City, Country
                    </span>
                  </li> */}
                  <li className="mb-3">
                    <i className="fa fa-phone-alt text-primary me-3"></i>
                    <span>+919892622230</span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-envelope text-primary me-3"></i>
                    <span>missionaccessibility@gmail.com</span>
                  </li>
                </ul>

                {/* <div className="mb-4">
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
                </div> */}
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

        {/* Q&A Section Start */}
        <section className="container-xxl py-5">
          <div className="container">
            <h2 className="mb-4">Q&A</h2>
            {currentQuestions.map((item) => (
              <div key={item.id} className="mb-4">
                <h4 className="mb-3">{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
            {/* User Question Form */}
            <form onSubmit={handleSubmitQuestion} className="mb-4">
              <div className="mb-3">
                <label htmlFor="userQuestion" className="form-label">
                  Ask a Question
                </label>
                <textarea
                  className="form-control"
                  id="userQuestion"
                  rows="3"
                  value={userQuestion}
                  onChange={handleQuestionChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Question
              </button>
            </form>

            {/* Pagination Buttons */}
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-primary mx-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={handleNextPage}
                disabled={
                  indexOfLastQuestion >= questions.length // Disable "Next" button when reaching the last page
                }
              >
                Next
              </button>
            </div>
          </div>
        </section>
        {/* Q&A Section End */}
      </div>
    </>
  );
};

export default Contact;
