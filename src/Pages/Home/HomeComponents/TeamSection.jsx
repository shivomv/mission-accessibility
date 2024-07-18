import React from 'react';

const TeamSection = () => {
  const  teamData ={
        "sectionTitle": "Meet Our Founders",
        // "sectionDescription": "Learn more about the dedicated educators who make a difference in our community.",
        "members": [
            { 
                "name": "Amar Jain", 
                "designation": "Founder", 
                "image": "img/founder/amarjaincasual.jpeg", 
                "social": { 
                    // "facebook": "#", 
                    "twitter": "https://x.com/amarjain2006", 
                    "linkedin": "https://www.linkedin.com/in/amarjain/" 
                } 
            },
            { 
                "name": "Rahul Bajaj", 
                "designation": "Co-Founder",  
                "image": "img/founder/RahulBajaj.jpeg", 
                "social": { 
                    // "facebook": "#", 
                    "twitter": "https://x.com/Rahul400", 
                    "linkedin": "https://www.linkedin.com/in/rahul-bajaj-13002469/" 
                } 
            },
            // { 
            //     "name": "Name", 
            //     "designation": "designation", 
            //     "image": "https://placehold.co/400x400", 
            //     "social": { 
            //         "facebook": "#", 
            //         "twitter": "#", 
            //         "instagram": "#" 
            //     } 
            // }
        ]
    }

    const { sectionTitle, sectionDescription, members } = teamData;
    
    return (
        
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3">{sectionTitle}</h1>
                    <p>{sectionDescription}</p>
                </div>
                <div className="row g-4">
                    {/* Team member */}
                    {members.map((member, index) => (
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                        <div className="team-item">
                            {/* <img className="img-fluid rounded  w-100" src={member.image} alt="member 1" /> */}
                            <div className="team-text w-80">
                                <div className="rounded-circle" style={{width:'200px', height:'200px', overflow: 'hidden'}}>
                                    <img className="img-fluid rounded mb-2  w-100" src={member.image} alt="
                                    member 1" />
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.designation}</p>
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href={member.social.twitter} target='_blank'><i className="fab fa-twitter" ></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href={member.social.linkedin} target='_blank'><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                )}
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
