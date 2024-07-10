import React, { useState } from 'react';

const NavManagement = () => {
  const [formData, setFormData] = useState({
    brandName: 'Mission Accessibility',
    joinButtonText: 'Join Us',
    items: [
      { path: '/home', text: 'Home' },
      { path: '/about', text: 'About Us' },
      { path: '/blog', text: 'Blog' },
      {
        type: 'dropdown', text: 'Gallery', items: [
          { path: '/image-gallery', text: 'Image Gallery' },
          { path: '/video-gallery', text: 'Video Gallery' }
        ]
      },
      { path: '/contact', text: 'Contact Us' }
    ]
  });

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    if (name === 'brandName' || name === 'joinButtonText') {
      setFormData({ ...formData, [name]: value });
    } else {
      const updatedItems = [...formData.items];
      updatedItems[index] = { ...updatedItems[index], [name]: value };
      setFormData({ ...formData, items: updatedItems });
    }
  };

  const handleSave = () => {
    console.log('Form data to save:', formData);
    // Add logic to save formData to backend or update state in parent component
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Manage Navigation</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="brandName" className="form-label">Brand Name</label>
          <input
            type="text"
            className="form-control"
            id="brandName"
            name="brandName"
            value={formData.brandName}
            onChange={(e) => handleInputChange(null, e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="joinButtonText" className="form-label">Join Button Text</label>
          <input
            type="text"
            className="form-control"
            id="joinButtonText"
            name="joinButtonText"
            value={formData.joinButtonText}
            onChange={(e) => handleInputChange(null, e)}
          />
        </div>
        <h4>Navigation Items</h4>
        {formData.items.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor={`text${index}`} className="form-label">Text</label>
                <input
                  type="text"
                  className="form-control"
                  id={`text${index}`}
                  name="text"
                  value={item.text}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <div className="col">
                <label htmlFor={`path${index}`} className="form-label">Path</label>
                <input
                  type="text"
                  className="form-control"
                  id={`path${index}`}
                  name="path"
                  value={item.path}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default NavManagement;
