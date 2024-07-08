import React from 'react';
import Carousel from './HomeComponents/Carousel';
import MissionSection from './HomeComponents/MissionSection';
import AboutSection from './HomeComponents/AboutSection';
import CallToAction from './HomeComponents/CallToAction';
import TeamSection from './HomeComponents/TeamSection';
import TestimonialSection from './HomeComponents/TestimonialSection';
import ContactForm from './HomeComponents/ContactForm';
import SocialMediaFeed from './HomeComponents/SocialMediaFeed'; // Import the SocialMediaFeed component

const Home = () => {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                <Carousel />
                <MissionSection />
                <AboutSection />
                <CallToAction />
                <TeamSection />
                <SocialMediaFeed />
                <TestimonialSection />
                <ContactForm />
            </div>
        </>
    );
}

export default Home;
