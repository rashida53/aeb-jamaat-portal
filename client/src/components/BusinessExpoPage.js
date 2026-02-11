import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './BusinessExpoPage.css';

const BusinessExpoPage = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="expo-page">
            <Navbar useDarkLogo={true} />
            
            {/* Hero Section with Video Background */}
            <div className="expo-hero-section">
                <div className="video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background-video"
                        key={isMobile ? 'mobile' : 'desktop'}
                    >
                        <source
                            src={`${process.env.PUBLIC_URL}/images/BusinessExpoImgs/${isMobile ? 'background-mobile' : 'background-expo'}.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="video-overlay"></div>
                </div>
                <div className="expo-hero-content">
                    <h1 className="expo-page-title">ANNUAL BUSINESS EXPO</h1>

                    <div className="expo-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/BusinessExpoImgs/BusinessExpoBanner.jpeg`}
                            alt="Annual Business Expo Banner"
                            className="expo-banner-image"
                        />
                    </div>
                </div>
            </div>

            {/* Details Popup Modal */}
            {isDetailsOpen && (
                <div className="details-modal-overlay" onClick={() => setIsDetailsOpen(false)}>
                    <div className="details-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsDetailsOpen(false)}>×</button>
                        <h2 className="modal-title">Expo Details</h2>
                        <div className="modal-content">
                            <p><strong>Date:</strong> 28th February, 2026</p>
                            <p><strong>Location:</strong> Austin Markaz</p>
                            <p><strong>Open to:</strong> All jamaat members and business owners</p>

                            <h3>What to Expect:</h3>
                            <ul>
                                <li>Networking opportunities with local entrepreneurs</li>
                                <li>Business showcases and presentations</li>
                                <li>Partnership opportunities</li>
                                <li>Community engagement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Form Section with Islamic Pattern Background */}
            <div className="expo-form-section" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`
            }}>
                <div className="expo-container">
                    <div className="expo-description">
                        <p>Join us for the Annual Business Expo hosted by Anjuman-e-Burhani Austin! Connect with local business owners, entrepreneurs, and community members. This is a great opportunity to network, showcase your business, and explore new partnerships.</p>
                    </div>

                    <button className="details-button" onClick={() => setIsDetailsOpen(true)}>
                        <span>Details</span>
                        <span className="popup-icon">⬈</span>
                    </button>

                    <div className="google-form-container">
                        <div className="google-form-wrapper">
                            <iframe
                                title='Business Expo Registration Form'
                                className="google-form-iframe"
                                src='https://docs.google.com/forms/d/e/1FAIpQLSfPHXsMJ-ltBBx1C3Zt3S0ztdeHcX56y1Xpr3Lmz3ZFoV0IOQ/viewform?embedded=true'
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BusinessExpoPage;
