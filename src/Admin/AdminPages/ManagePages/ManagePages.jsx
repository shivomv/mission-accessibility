// src/AdminPages/ManagePages.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ManagePages = () => {
  const pages = [
    { name: 'Home', path: '/admin/manage-home' },
    { name: 'About', path: '/admin/manage-about' },
    { name: 'Contact', path: '/admin/manage-contact' },
    // Add more pages as needed
  ];

  const components = [
    { name: 'Navigation', path: '/admin/manage-nav' },
    { name: 'Footer', path: '/admin/manage-footer' },
    // Add more common components as needed
  ];

  return (
    <div className=" container mt-4">
      <h1 className="mb-4">Manage Pages</h1>
      <Row>
        {pages.map((page, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{page.name} Page</Card.Title>
                <Card.Text>
                  Click the button below to manage the {page.name.toLowerCase()} page.
                </Card.Text>
                <Button as={Link} to={page.path} variant="primary">
                  Manage {page.name} Page
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h1 className="mb-4 mt-4">Manage Common Components</h1>
      <Row>
        {components.map((component, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{component.name}</Card.Title>
                <Card.Text>
                  Click the button below to manage the {component.name.toLowerCase()}.
                </Card.Text>
                <Button as={Link} to={component.path} variant="primary">
                  Manage {component.name}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManagePages;
