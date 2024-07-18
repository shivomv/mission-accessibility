import React, { useState } from 'react';

const AboutManage = () => {
    const initialData = {
        title: 'Learn More About Our Work And Our Cultural Activities',
        p1: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
        p2: 'Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.',
        img1: 'https://placehold.co/400x400',
        img2: 'https://placehold.co/400x400',
        img3: 'https://placehold.co/400x400'
    };

    const [aboutSectionData, setAboutSectionData] = useState(initialData);
    const [editData, setEditData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const openModal = (field) => {
        setEditData({
            ...editData,
            [field]: aboutSectionData[field]
        });
        setShowModal(true);
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('title', editData.title);
        formData.append('p1', editData.p1);
        formData.append('p2', editData.p2);
        if (editData.img1) {
            formData.append('img1', editData.img1);
        }
        if (editData.img2) {
            formData.append('img2', editData.img2);
        }
        if (editData.img3) {
            formData.append('img3', editData.img3);
        }

        try {
            const response = await fetch('https://api.example.com/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload files');
            }

            console.log('Files uploaded successfully');
            setShowModal(false);

            // Optionally, update local state or perform other actions upon successful upload
        } catch (error) {
            console.error('Error uploading files:', error);
            // Handle error: show error message, retry logic, etc.
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const fieldName = event.target.name;

        setEditData({
            ...editData,
            [fieldName]: file
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    return (
        <div className="container-xxl py-5 bg-light">
            <div className="card">
                <div className='card-title'>
                    <h2 className="text-center">About Section</h2>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Paragraph 1</th>
                                    <th>Paragraph 2</th>
                                    <th>Image 1</th>
                                    <th>Image 2</th>
                                    <th>Image 3</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{aboutSectionData.title}</td>
                                    <td>{aboutSectionData.p1}</td>
                                    <td>{aboutSectionData.p2}</td>
                                    <td><img src={aboutSectionData.img1 || 'https://placehold.co/400x400'} alt="Image 1" width='100' /></td>
                                    <td><img src={aboutSectionData.img2 || 'https://placehold.co/400x400'} alt="Image 2" width='100' /></td>
                                    <td><img src={aboutSectionData.img3 || 'https://placehold.co/400x400'} alt="Image 3" width='100' /></td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => openModal('title')}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for Editing */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Content</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" value={editData.title || ''} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="p1" className="form-label">Paragraph 1</label>
                                        <textarea className="form-control" id="p1" name="p1" value={editData.p1 || ''} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="p2" className="form-label">Paragraph 2</label>
                                        <textarea className="form-control" id="p2" name="p2" value={editData.p2 || ''} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="img1" className="form-label">Image 1</label>
                                        <input type="file" className="form-control" id="img1" name="img1" onChange={handleImageUpload} />
                                        {editData.img1 && <img src={URL.createObjectURL(editData.img1)} alt="Image 1 Preview" className="img-fluid mt-2" style={{ maxWidth: '200px' }} />}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="img2" className="form-label">Image 2</label>
                                        <input type="file" className="form-control" id="img2" name="img2" onChange={handleImageUpload} />
                                        {editData.img2 && <img src={URL.createObjectURL(editData.img2)} alt="Image 2 Preview" className="img-fluid mt-2" style={{ maxWidth: '200px' }} />}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="img3" className="form-label">Image 3</label>
                                        <input type="file" className="form-control" id="img3" name="img3" onChange={handleImageUpload} />
                                        {editData.img3 && <img src={URL.createObjectURL(editData.img3)} alt="Image 3 Preview" className="img-fluid mt-2" style={{ maxWidth: '200px' }} />}
                                    </div>
                                </form>
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
};

export default AboutManage;
