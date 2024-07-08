import React from 'react'

const MissionSection = () => {
    const missionData = {
        title: 'Enhancing Accessibility for the Visually Impaired',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        missions: [
            { title: 'Audio Books & Braille', details: 'Providing accessible reading materials through audio books and Braille.', icon: 'fa fa-book-reader', color: 'primary', delay: '0.1s' },
            { title: 'Assistive Technology', details: 'Developing and distributing assistive devices for independent living.', icon: 'fa fa-wheelchair', color: 'success', delay: '0.3s' },
            { title: 'Accessibility Advocacy', details: 'Advocating for policies and practices that support accessibility rights.', icon: 'fa fa-gavel', color: 'warning', delay: '0.5s' },
            { title: 'Training & Support', details: 'Offering training and support programs for employment and daily activities.', icon: 'fa fa-hands-helping', color: 'info', delay: '0.7s' }
        ]
    };
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="mb-3">{missionData.title}</h1>
                        <p>{missionData.description}</p>
                    </div>
                    <div className="row g-4">
                        {
                            missionData.missions.map((mission, index) => {
                                return (
                                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay
                                        ="0.1s" key={index}>
                                        <div className="facility-item">
                                            {/* <div className={`facility-icon bg-${mission.color}`}>
                                                 <span className={`bg-${mission.color}`}></span> 
                                                 <span className={`bg-${mission.color}`}></span>
                                             </div> */}
                                            <div className={`mission-card-text c-pointer bg-${mission.color}`}>
                                                <i className={`${mission.icon} fa-3x text-${mission.color}`}></i>
                                                <h3 className={`text-${mission.color} my-2`}>{mission.title}</h3>
                                                <p className="mb-0">{mission.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default MissionSection