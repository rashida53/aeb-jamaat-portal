import React from 'react';
import Navbar from './Navbar';
import TimelineSection from './TimelineSection';
import FloorPlans from './FloorPlans';
import MasjidGallery from './MasjidGallery';
import './MasjidPage.css';

const MasjidPage = () => {
    const milestones = [
        {
            date: "Jan 2025",
            heading: "MASJID TA'SEES SHARAF IN SURAT BY AQA MOULA TUS",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat.",
            detailedContent: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat. This momentous occasion marked the official foundation laying ceremony for our community's spiritual home. The ta'sees was conducted with great reverence and was attended by representatives from the Austin Jamaat, marking a historic milestone in our community's journey.",
            images: [
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen1.jpg`,
                    alt: "Masjid Zameen View 1"
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen2.jpg`,
                    alt: "Masjid Zameen View 2"
                }
            ],
            isHighlighted: false
        },
        {
            date: "Nov 2024",
            heading: "HOME VISITS WITH AMIL SAHEB",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat.",
            detailedContent: "The Janab Amilsaheb and Masjid committee conducted extensive home visits throughout Austin to share the milestone and project progress with our community members. These visits were instrumental in building stronger connections and ensuring every family was informed about the masjid project. The response from Mumineen was overwhelmingly positive and welcoming.",
            images: [
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen1.jpg`,
                    alt: "Masjid Zameen View 1"
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen2.jpg`,
                    alt: "Masjid Zameen View 2"
                }
            ],
            isHighlighted: false
        },
        {
            date: "Sep 2024",
            heading: "MASJID ZAMEEN TOUR",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat.",
            detailedContent: "Organized comprehensive tours of the masjid zameen for community members to familiarize them with the location and future plans. These tours helped build excitement and understanding about the project scope and location benefits. Families were able to visualize the future masjid and understand the strategic importance of the chosen location.",
            images: [
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen1.jpg`,
                    alt: "Masjid Zameen View 1"
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen2.jpg`,
                    alt: "Masjid Zameen View 2"
                }
            ],
            isHighlighted: false
        },
        {
            date: "Aug 2024",
            heading: "SHZ SAHEB VISITS ZAMEEN",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat.",
            detailedContent: "Just a few days have passed since the memorable 4th visit of Shehzada Aali Waqar Malik ul Ashtar bs Shujauddin DM to Austin. This has been the longest trip of Shehzada saheb DM so far, ane aap Austin mumineen ni khidmat qabool kari Ghana khush thai ne padhara. During the 3 days and 2 nights spent in Austin, Shehzada Saheb DM did nazar on many things, including our homes, our lives, our Deen, our fidagiri on Aqa Moula TUS, our masjid zameen, our markaz, darul imarat, qabrastan plans, our growth and progress in all umoor, and especially our farzando.",
            images: [
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen1.jpg`,
                    alt: "Masjid Zameen View 1"
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen2.jpg`,
                    alt: "Masjid Zameen View 2"
                }
            ],
            isHighlighted: false
        },
        {
            date: "Jun 2024",
            heading: "MASJID ZAMEEN ACQUISITION",
            content: "On January 21st, 2025 / 22nd Shehre Rajabul Asab 1446, Aqa Moula TUS performed ta'sees of Austin masjid in Surat.",
            detailedContent: "The acquisition of the masjid zameen was a significant milestone that required extensive planning and community support. This strategic location was chosen for its accessibility, size, and potential for future expansion. The acquisition process involved careful consideration of zoning requirements, environmental factors, and community needs to ensure the perfect foundation for our spiritual home.",
            images: [
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen1.jpg`,
                    alt: "Masjid Zameen View 1"
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/MasjidZameen2.jpg`,
                    alt: "Masjid Zameen View 2"
                }
            ],
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
            <FloorPlans />
            <MasjidGallery />
        </div>
    );
};

export default MasjidPage; 