import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './EventsPage.css';

const EventsPage = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Images from last year's tournament
    const carouselImages = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `${process.env.PUBLIC_URL}/images/PickleballCarouselImgs/pickle-${i + 1}.JPG`,
        alt: `Pickleball Tournament 2025 - Photo ${i + 1}`
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
        <div className="events-page">
            <Navbar useDarkLogo={true} />
            <div className="events-page-content" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`
            }}>
                <div className="events-container">
                    <h1 className="events-page-title">PICKLEBALL TOURNAMENT 2026</h1>

                    <div className="event-banner">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/PickleballCarouselImgs/pickle-header.JPG`}
                            alt="Pickleball Tournament 2026 Banner"
                            className="event-banner-image"
                        />
                    </div>

                    <div className="event-description">
                        <p>Anjuman-e-Burhani's Umoor Sehat Sports Group and Mumineen Racquet Sports Association (MRSA) are excited to host the 2nd Annual Austin Pickleball Tournament! This tournament will serve as the South Region's annual MRSA tournament and commemorates the 80th Gregorian Birthday of Aqa Maula (TUS) occurring later this year. We will be using a beautiful, brand new, indoor facility with up to 8 courts for an amazing experience for all players.</p>
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
                                <h2 className="modal-title">Tournament Details</h2>
                                <div className="modal-content">
                                    <p><strong>Dates:</strong> 11 & 12 April, 2026 (Start time of 2pm on 11 April)</p>
                                    <p><strong>Location:</strong> 1900 E Howard Ln STE I & E, Pflugerville, TX 78660</p>
                                    <p><strong>Open to:</strong> Men, Women, and Youth 8 years+ across all USA/Canada Jamaats</p>
                                    <p><strong>Events:</strong> Doubles and Singles both being offered</p>
                                    
                                    <h3>Registration Fees:</h3>
                                    <ul>
                                        <li><strong>Adults:</strong> $72 for doubles | $15 additional for singles</li>
                                        <li><strong>Youth (8-14 years):</strong> $35 for doubles | $11 additional for singles</li>
                                    </ul>
                                    <p className="partner-note">Players without a partner preference will be able to select one closer to the tournament from the player pool.</p>
                                    
                                    <h3>Sponsorship Tiers:</h3>
                                    <p className="sponsor-intro">Consider your business or family sponsoring our tournament:</p>
                                    <ul>
                                        <li><strong>Niyaaz Sponsor:</strong> $786</li>
                                        <li><strong>Court Sponsor:</strong> $553</li>
                                        <li><strong>Snacks Sponsor:</strong> $253</li>
                                        <li><strong>Prize Sponsor:</strong> $153</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="zeffy-embed-container">
                        <div className="zeffy-embed-wrapper">
                            <iframe
                                title='Donation form powered by Zeffy'
                                className="zeffy-iframe"
                                src='https://www.zeffy.com/embed/ticketing/austin-pickleball-tournament--2026'
                                allowpaymentrequest="true"
                                allowtransparency="true"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Highlights Section - Blue Background */}
            <div className="highlights-section">
                <div className="highlights-container">
                    <h2 className="highlights-title">HIGHLIGHTS FROM 2025</h2>
                    <div className="pickle-carousel-container">
                        <Slider {...carouselSettings} className="pickle-carousel">
                            {carouselImages.map((image) => (
                                <div key={image.id} className="pickle-carousel-slide">
                                    <div className="pickle-image-container">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="pickle-carousel-image"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Victory Section - Islamic Pattern Background */}
            <div className="victory-section" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`
            }}>
                <div className="victory-container">
                    <h2 className="victory-title">VICTORY HISTORY</h2>
                    <div className="racket-sports-links">
                        <Link to="/blog/4YpnxRJ6o0uhD0pxY7hHRF" className="racket-sport-link">
                            <span className="link-text">Pickleball Austin 2025</span>
                        </Link>
                        <Link to="/blog/6dBmW5QR03K1x7VrTwHqEE" className="racket-sport-link">
                            <span className="link-text">Tennis Dallas 2025</span>
                        </Link>
                        <Link to="/blog/Z0RlnJbc2PRF64QKOPVjk" className="racket-sport-link">
                            <span className="link-text">Table Tennis Houston 2024</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
