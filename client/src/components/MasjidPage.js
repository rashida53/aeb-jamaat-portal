import React from 'react';
import Navbar from './Navbar';
import TimelineSection from './TimelineSection';
import FloorPlans from './FloorPlans';
import MasjidGallery from './MasjidGallery';
import TeamSection from './TeamSection';
import Reflections from './Reflections';
import Footer from './Footer';
import './MasjidPage.css';

const MasjidPage = () => {

    return (
        <div className="masjid-page">
            <Navbar useDarkLogo={true} />
            <div className="masjid-banner">
                <div className="banner-content">
                    <h1 className="banner-title">WE ARE NOW IN THE CITY PHASE!</h1>
                </div>
            </div>
            <TimelineSection />
            <FloorPlans />
            <MasjidGallery />
            <Reflections />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default MasjidPage; 