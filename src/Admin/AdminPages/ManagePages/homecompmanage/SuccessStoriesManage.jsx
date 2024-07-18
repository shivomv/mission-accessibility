import React, { useState, useEffect } from "react";
import axios from "axios";

const SuccessStoriesManage = () => {
  const [stories, setStories] = useState([
    {
      img: "https://placehold.co/600x400",
      title: "Story 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lo loreem20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente voluptatum explicabo odit facilis, nisi sint dolor?",
    },
    {
      img: "https://placehold.co/600x400",
      title: "Story 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lorem21Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente",
    },
    {
      img: "https://placehold.co/600x400",
      title: "Story 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero lorem21Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo incidunt nam sapiente",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentStory, setCurrentStory] = useState({
    img: "",
    title: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     // Fetch stories from the API
//     axios.get("/api/stories").then((response) => {
//       setStories(response.data);
//     });
//   }, []);

  const handleShowModal = (story) => {
    setIsEditing(!!story);
    setCurrentStory(story || { img: "", title: "", description: "" });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentStory({
        ...currentStory,
        img: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveStory = () => {
    if (isEditing) {
      // Update story logic
      setStories((prevStories) =>
        prevStories.map((s) =>
          s.title === currentStory.title ? currentStory : s
        )
      );
    } else {
      // Add new story logic
      setStories((prevStories) => [...prevStories, currentStory]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h1>Success Stories Management</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => handleShowModal(null)}
      >
        Add New Story
      </button>
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stories.map((story, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={story.img}
                      alt={story.title}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>{story.title}</td>
                  <td>{story.description}</td>
                  <td>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => handleShowModal(story)}
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
                  {isEditing ? "Edit Story" : "Add New Story"}
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
                    <label className="form-label">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                    {currentStory.img && (
                      <img
                        src={currentStory.img}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        width="100"
                        height="100"
                      />
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={currentStory.title}
                      onChange={(e) =>
                        setCurrentStory({
                          ...currentStory,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      value={currentStory.description}
                      onChange={(e) =>
                        setCurrentStory({
                          ...currentStory,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
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
                  onClick={handleSaveStory}
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

export default SuccessStoriesManage;
