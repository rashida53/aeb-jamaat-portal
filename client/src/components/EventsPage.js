import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './EventsPage.css';

const EventsPage = () => {
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
