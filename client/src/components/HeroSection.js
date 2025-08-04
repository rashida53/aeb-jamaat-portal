import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <img
                    src="/images/mosque.jpg"
                    alt="Grand Mosque Architectural Rendering"
                    className="mosque-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('fallback-background');
                    }}
                />
            </div>

            {/* <div className="hero-overlay">
                <h1 className="hero-title">MASJID PROJECT</h1>
            </div> */}
        </section>
    );
};

export default HeroSection; 