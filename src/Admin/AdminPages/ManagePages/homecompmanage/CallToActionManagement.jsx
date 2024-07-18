import React, { useState, useEffect } from "react";
import axios from "axios";

const CallToActionManagement = () => {
  const [ctas, setCTAs] = useState([{
    title: 'Join Us in Making a Difference',
    description:
      'Together, we can provide essential support and education to those in need. Become a part of our mission and help create a brighter future for all.',
    buttonText: 'Get Involved Now',
    buttonLink: '/contact',
    imageSrc: 'https://placehold.co/400x400',
    imageAlt: 'Call to Action Image'
  }]);
  const [showModal, setShowModal] = useState(false);
  const [currentCTA, setCurrentCTA] = useState({
    title: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    imageSrc: "",
    imageAlt: "",
  });
  const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchCTAs();
//   }, []);

  const fetchCTAs = () => {
    axios.get("/api/ctas").then((response) => {
      setCTAs(response.data);
    });
  };

  const handleShowModal = (cta) => {
    setIsEditing(!!cta);
    setCurrentCTA(cta || {
      title: "",
      description: "",
      buttonText: "",
      buttonLink: "",
      imageSrc: "",
      imageAlt: "",
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCTA = () => {
    if (isEditing) {
      // Update CTA logic
      axios.put(`/api/ctas/${currentCTA.id}`, currentCTA)
        .then(() => {
          fetchCTAs(); // Refresh CTAs after update
          setShowModal(false);
        })
        .catch((error) => {
          console.error('Error updating CTA:', error);
          // Handle error
        });
    } else {
      // Handle logic for adding new CTA if needed
    }
  };

  return (
    <div className="container mt-4">
      <h1>Call to Action Management</h1>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Button Text</th>
                <th scope="col">Button Link</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ctas.map((cta, index) => (
                <tr key={index}>
                  <td>{cta.title}</td>
                  <td>{cta.description}</td>
                  <td>{cta.buttonText}</td>
                  <td>{cta.buttonLink}</td>
                  <td>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => handleShowModal(cta)}
                    >
                      Edit
                    </button>
                    {/* Add a delete button if needed */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? "Edit Call to Action" : "Add New Call to Action"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentCTA.title}
                      onChange={(e) =>
                        setCurrentCTA({
                          ...currentCTA,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      value={currentCTA.description}
                      onChange={(e) =>
                        setCurrentCTA({
                          ...currentCTA,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Button Text</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentCTA.buttonText}
                      onChange={(e) =>
                        setCurrentCTA({
                          ...currentCTA,
                          buttonText: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Button Link</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentCTA.buttonLink}
                      onChange={(e) =>
                        setCurrentCTA({
                          ...currentCTA,
                          buttonLink: e.target.value,
                        })
                      }
                    />
                  </div>
                  {/* Optional: Image upload functionality */}
                  {/* <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                    {currentCTA.imageSrc && (
                      <img
                        src={currentCTA.imageSrc}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        width="100"
                        height="100"
                      />
                    )}
                  </div> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveCTA}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToActionManagement;
