import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './SummerCampPage.css';

const SummerCampPage = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Images from last year's summer camp
    const carouselItems = Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        src: `${process.env.PUBLIC_URL}/images/SummerCamp/camp-${i + 1}.jpg`,
        alt: `Annual Summer Camp 2025 - Photo ${i + 1}`
    }));

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="summer-camp-page">
            <Navbar useDarkLogo={true} />

            {/* Hero Section with Video Background */}
            <div className="camp-hero-section">
                <div className="video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background-video"
                    >
                        <source
                            src={`${process.env.PUBLIC_URL}/images/SummerCamp/camp-1.MOV`}
                            type="video/quicktime"
                        />
                        <source
                            src={`${process.env.PUBLIC_URL}/images/SummerCamp/camp-1.MOV`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="video-overlay"></div>
                </div>
                <div className="camp-hero-content">
                    <h1 className="summer-camp-page-title">ANJUMAN E BURHANI SUMMER CAMP</h1>
                </div>
            </div>

            {/* Form Section with Islamic Pattern Background */}
            <div className="camp-form-section" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`
            }}>
                <div className="summer-camp-container">
                    <div className="event-description">
                        <p>The Anjuman-e-Burhani Summer Camp is back! The 3rd edition of the camp will be held from Monday August 3rd to Friday August 7th at Markaz. Check out the Details below!</p>
                    </div>

                    <button className="details-button" onClick={() => setIsDetailsOpen(true)}>
                        <span>Details</span>
                        <span className="popup-icon">⬈</span>
                    </button>

                    {/* Details Popup Modal */}
                    {isDetailsOpen && (
                        <div className="details-modal-overlay" onClick={() => setIsDetailsOpen(false)}>
                            <div className="details-modal" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={() => setIsDetailsOpen(false)}>×</button>
                                <h2 className="modal-title">Summer Camp Details</h2>
                                <div className="modal-content">
                                    <p><strong>Dates:</strong> Aug 3rd to Aug 7th, 2026</p>
                                    <p><strong>Location:</strong> Markaz</p>
                                    <p><strong>Open to:</strong> Campers aged 5 (must have completed kindergarten)-13 years old and Counselors aged 14 and up</p>
                                    <p><i>Farzando must attend with topi/dupatta.</i></p>

                                    <h3>Registration Fees:</h3>
                                    <p><i>Includes activities, daily lunch and snacks</i></p>
                                    <ul>
                                        <li><strong>Camper:</strong> $200</li>
                                        <li><strong>Counselor:</strong> $150</li>
                                    </ul>
                                    <h3>Activities:</h3>
                                    <ul>
                                        <li>Emphasize Deen through Quran e Majeed and Lisan ud dawat</li>
                                        <li>Focus on leadership and team-building skills</li>
                                        <li>Include a field trip for all ages </li>
                                    </ul>
                                    <h3>Volunteer for the Camp!</h3>
                                    <p>Reach out to Sarah behn Rawat (631-805-5554), Rashida behn Karachiwala (614-680-2128), or Zainab behn Bhora (512-400-5370) if you would like to volunteer or have any questions about the camp.

                                        Inshallah together we can make this an enjoyable experience for our kids and attain the Khushi of Aqa Moula TUS! Ameen!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="zeffy-embed-container">
                        <div className="zeffy-embed-wrapper">
                            <iframe
                                title='Registration form powered by Zeffy'
                                className="zeffy-iframe"
                                src='https://www.zeffy.com/embed/ticketing/anjuman-e-burhani-summer-camp--2026-2'
                                allowpaymentrequest="true"
                                allowtransparency="true"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlights Section - Blue Background */}
            <div className="camp-highlights-section">
                <div className="camp-highlights-container">
                    <h2 className="camp-highlights-title">BLAST FROM THE PAST</h2>
                    <div className="camp-carousel-container">
                        <Slider {...carouselSettings} className="camp-carousel">
                            {carouselItems.map((item) => (
                                <div key={item.id} className="camp-carousel-slide">
                                    <div className="camp-image-container">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="camp-carousel-image"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SummerCampPage;
