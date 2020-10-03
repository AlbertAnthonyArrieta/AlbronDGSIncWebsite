import React from 'react';
import Navbar from '../Components/Navbar';
import LandingSection from '../Components/LandingSection';
import ServiceSection from '../Components/ServiceSection';
function HomeView(){
    return(
        <div>
            <Navbar />
            <LandingSection />
            <ServiceSection />
        </div>
    )
}

export default HomeView;