import React from 'react';
import Navbar from './Navbar';
import TimelineSection from './TimelineSection';
import './MasjidPage.css';

const MasjidPage = () => {
    const milestones = [
        {
            date: "Jan 2025",
            heading: "MASJID TA'SEES",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula (TUS) performed ta'sees of Austin masjid in Surat.",
            isHighlighted: false
        },
        {
            date: "Nov 2024",
            heading: "HOME VISITS WITH AMIL SAHEB",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula (TUS) performed ta'sees of Austin masjid in Surat.",
            isHighlighted: false
        },
        {
            date: "Sep 2024",
            heading: "MASJID ZAMEEN TOUR",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula (TUS) performed ta'sees of Austin masjid in Surat.",
            isHighlighted: false
        },
        {
            date: "Aug 2024",
            heading: "SHZ SAHEB VISITS ZAMEEN",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula (TUS) performed ta'sees of Austin masjid in Surat.",
            isHighlighted: true
        },
        {
            date: "Jun 2024",
            heading: "MASJID ZAMEEN ACQUISITION",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula (TUS) performed ta'sees of Austin masjid in Surat.",
            isHighlighted: false
        }
    ];

    return (
        <div className="masjid-page">
            <Navbar useDarkLogo={true} />
            <div className="masjid-banner">
                <div className="banner-content">
                    <h1 className="banner-title">WE ARE NOW IN THE CITY PHASE!</h1>
                </div>
            </div>
            <TimelineSection milestones={milestones} />
        </div>
    );
};

export default MasjidPage; 