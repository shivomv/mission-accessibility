import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarouselManage = () => {
  const [carouseldata, setCarousel] = useState([{
    id: 1,
    image: 'https://via.placeholder.com/300x150',
    title: 'Title 1',
    description: 'Description 1',
    status: 1
  }, {
    id: 2,
    image: 'https://via.placeholder.com/300x150',
    title: 'Title 2',
    description: 'Description 2',
    status: 0
  }]);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isNewItem, setIsNewItem] = useState(false);

  // useEffect(() => {
  //   const getCarousel = async () => {
  //     try {
  //       const response = await axios.get('/api/carousel');
  //       setCarousel(response.data);
  //     } catch (error) {
  //       console.error('Error fetching carousel data', error);
  //     }
  //   };
  //   getCarousel();
  // }, []);

  const handleEdit = (item) => {
    setEditItem(item);
    setIsNewItem(false);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditItem({
      id: null,
      image: '',
      title: '',
      description: '',
      status: 1
    });
    setIsNewItem(true);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      if (isNewItem) {
        await axios.post('/api/carousel', editItem);
      } else {
        await axios.put(`/api/carousel/${editItem.id}`, editItem);
      }
      setShowModal(false);
      setEditItem(null);
      // Optionally refetch carousel data or update the state directly
      const response = await axios.get('/api/carousel');
      setCarousel(response.data);
    } catch (error) {
      console.error('Error saving carousel data', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditItem((prevItem) => ({ ...prevItem, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header text-center">
          Carousel Management
        </div>
        <div className="card-body table-responsive">
          <div className="text-end"><button className="btn btn-primary" onClick={handleAddNew}>Add New</button></div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Carousel ID</th>
                <th scope="col">Carousel Name</th>
                <th scope="col">Carousel Image</th>
                <th scope="col">Carousel Description</th>
                <th scope="col">Carousel Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(carouseldata) && carouseldata.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td><img src={item.image} alt={item.title} width="100" height="50" /></td>
                  <td>{item.description}</td>
                  <td>{item.status ? 'Active' : 'Inactive'}</td>
                  <td><button className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && editItem && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isNewItem ? 'Add New Carousel Item' : 'Edit Carousel Item'}</h5>
                <button type="button" className="btn btn-danger close" onClick={() => setShowModal(false)}>
                  <div>&times;</div>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" name="title" value={editItem.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" name="description" value={editItem.description} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Image</label>
                  <input type="file" className="form-control" onChange={handleFileChange} />
                  {editItem.image && <img src={editItem.image} alt={editItem.title} width="100" height="50" />}
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control" name="status" value={editItem.status} onChange={handleChange}>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselManage;
