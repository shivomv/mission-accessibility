import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SuccessStories.css"; // Import custom CSS for truncation

const SuccessStories = () => {
  const stories = [
    {
      img: "https://placehold.co/600x400",
      title: "Story 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lo loreem20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente voluptatum explicabo odit facilis, nisi sint dolor?",
      link: "/story-1",
    },
    {
      img: "https://placehold.co/600x400",
      title: "Story 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lorem21Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente",
      link: "/story-2",
    },
    {
      img: "https://placehold.co/600x400",
      title: "Story 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lorem21Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente",
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
                  <Link to={story.link} className="text-decoration-none">
                    <Card.Title className="success-stories-card-title">
                      {story.title}
                    </Card.Title>
                  </Link>
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
