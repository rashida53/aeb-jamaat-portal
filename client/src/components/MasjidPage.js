import React from 'react';
import Navbar from './Navbar';
import MasjidVideoSection from './MasjidVideoSection';
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
                    <h1 className="banner-title">PENDING FINAL SITE PLAN SUBMISSION TO CITY OF PFLUGERVILLE</h1>
                </div>
            </div>
            <MasjidVideoSection />
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