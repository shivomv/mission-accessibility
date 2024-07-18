import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MissionManage = () => {
    const [missions, setMissions] = useState([
        { id: 1, title: 'Audio Books & Braille', details: 'Providing accessible reading materials through audio books and Braille.', icon: 'fa fa-book-reader', color: 'primary', delay: '0.1s' },
        { id: 2, title: 'Assistive Technology', details: 'Developing and distributing assistive devices for independent living.', icon: 'fa fa-wheelchair', color: 'success', delay: '0.3s' },
        { id: 3, title: 'Accessibility Advocacy', details: 'Advocating for policies and practices that support accessibility rights.', icon: 'fa fa-gavel', color: 'warning', delay: '0.5s' },
        { id: 4, title: 'Training & Support', details: 'Offering training and support programs for employment and daily activities.', icon: 'fa fa-hands-helping', color: 'info', delay: '0.7s' }
    ]);
    const [missionData, setMissionData] = useState({
        title: 'Enhancing Accessibility for the Visually Impaired',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    const [editItem, setEditItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isNewItem, setIsNewItem] = useState(false);

    const refreshMissions = () => {
        axios.get('/api/missions')
            .then(response => setMissions(response.data))
            .catch(error => console.error('Error fetching missions:', error));
    };

    //   useEffect(() => {
    //     refreshMissions();
    //   }, []);

    const handleEdit = (item) => {
        setEditItem(item);
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            if (isNewItem) {
                // POST new mission item
                await axios.post('/api/missions', editItem);
            } else {
                // PUT update mission item
                await axios.put(`/api/missions/${editItem.id}`, editItem);
            }
            setShowModal(false);
            setEditItem(null);
            refreshMissions();
        } catch (error) {
            console.error('Error saving mission data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditItem(prevItem => ({ ...prevItem, [name]: value }));
    };

    const handleSaveTitleDesc = async () => {
        try {
            await axios.put('/api/mission/main', missionData);
            setShowModal(false);
        } catch (error) {
            console.error('Error saving title and description:', error);
        }
    };

    return (
        <div>
            <div className="card my-2">
                <div className="card-header text-center">Mission</div>
                <div className="card-body">
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h1 className="mb-3">{missionData.title}</h1>
                                <p>{missionData.description}</p>
                                <button className='btn btn-primary' onClick={() => setShowModal(true)}>Edit Title & Description</button>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Title</th>
                                            <th>Details</th>
                                            <th>Icon</th>
                                            <th>Color</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {missions.map((mission) => (
                                            <tr key={mission.id}>
                                                <td>{mission.title}</td>
                                                <td>{mission.details}</td>
                                                <td><i className={`${mission.icon} fa-2x text-${mission.color}`}></i></td>
                                                <td>{mission.color}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => handleEdit(mission)}>Edit</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Title & Description</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" name="title" value={missionData.title} onChange={(e) => setMissionData({ ...missionData, title: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" name="description" value={missionData.description} onChange={(e) => setMissionData({ ...missionData, description: e.target.value })}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveTitleDesc}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && editItem && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isNewItem ? 'Add New Mission' : 'Edit Mission'}</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" name="title" value={editItem.title} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Details</label>
                                    <input type="text" className="form-control" name="details" value={editItem.details} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Icon</label>
                                    <input type="text" className="form-control" name="icon" value={editItem.icon} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Color</label>
                                    <input type="text" className="form-control" name="color" value={editItem.color} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Delay</label>
                                    <input type="text" className="form-control" name="delay" value={editItem.delay} onChange={handleChange} />
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

export default MissionManage;
