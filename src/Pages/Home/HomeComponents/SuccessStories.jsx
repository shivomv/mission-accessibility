import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SuccessStories.css"; // Import custom CSS for truncation

const SuccessStories = () => {
  const stories = [
    {
      img: "https://www.hindustantimes.com/ht-img/img/2023/11/09/550x309/The-Delhi-high-court---Mint-Photo-_1699533470994.jpg",
      title: "Delhi HC issues notice over plea seeking to make Rapido app disabled friendly",
      description:
        "The Delhi high court on Thursday issued notice in a plea seeking to make Rapido’s mobile ride application disabled friendly. A bench of justice Subramonium Prasad sought response from the Roppen Transportation Services Pvt Ltd’s Rapido and the Centre by 20 December 2023 in the plea filed by corporate lawyer and disability rights activist Amar Jain.",
      link: "https://www.hindustantimes.com/cities/delhi-news/delhi-hc-issues-notice-over-plea-seeking-to-make-rapido-app-disabled-friendly-101699533473328.html",
    },
    {
      img: "https://images.indianexpress.com/2023/08/Disability.jpg?w=389",
      title: "In law universities and beyond, disability education is woefully lacking",
      description:
        "One of the drawbacks of the systemic absence of such conversations on disability in course curriculums is that it instils students with an incorrect conceptual understanding of disability. Integrating it in courses from the get-go will lead to a change in the mindsets of professionals who are behind policy, legislation, infrastructure.",
      link: "https://indianexpress.com/article/opinion/columns/law-universities-beyond-disability-education-woefully-lacking-8899504/lite/",
    },
    {
      img: "img/story3.jpeg",
      title: "Project RPwD Generation",
      description:
        "The enactment of Rights of Persons with Disabilities Act, 2016 (‘RPwD Act’) was a watershed moment for the disabled community in India. Principles such as reasonable accommodation and the need for time-bound compliance with accessibility norms were incorporated into the foremost legislation on the rights of persons with disabilities in this jurisdiction.",
      link: "/story-2",
    },
  ];

  return (
    <div className="container success-stories-container">
      <h1 className="text-center success-stories-title">Success Stories</h1>
      <div className="container">
        <Row className="g-5">
          {stories.map((story, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="success-stories-card">
                <Card.Img variant="top" src={story.img} />
                <Card.Body>
                  <a href={story.link} className="text-decoration-none" target="_blank">
                    <Card.Title className="success-stories-card-title">
                      {story.title}
                    </Card.Title>
                  </a>
                  <Card.Text className="success-stories-card-text">
                    {story.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SuccessStories;
