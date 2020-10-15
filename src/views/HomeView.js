import React from 'react';
import Navbar from '../Components/Navbar';
import LandingSection from '../Components/LandingSection';
import ServiceSection from '../Components/ServiceSection';
import AboutSection from '../Components/AboutSection';
import ProjectSection from '../Components/ProjectSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
function HomeView(){
    return(
        <div>
            <Navbar />
            <LandingSection />
            <ServiceSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default HomeView;