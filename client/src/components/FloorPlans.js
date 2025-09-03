import React from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
    return (
        <section
            className="floor-plans-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <div className="container">
                <h2 className="floor-plans-section-title">ARCHITECTURAL DESIGNS & FLOOR PLANS</h2>

                {/* First Floor */}
                <div className="floor-plan-container">
                    <h3 className="floor-title">MASJID FIRST FLOOR</h3>
                    <div className="plan-content">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Marado-Floor-Plan.png`}
                            alt="Masjid First Floor Plan"
                            className="floor-plan-image"
                        />
                        <div className="specifications">
                            <div className="spec-row">
                                <span className="spec-label">Men's Masjid</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">60ft x 40ft</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Masallah Count</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">240 (10 rows of 24 masallahs)</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Men's Sehen</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">60ft x 18ft</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Mawaid Thaal Count</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">55 thaals</span>
                            </div>
                        </div>
                    </div>

                    {/* Separator inside the white container */}
                    <div className="separator">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                    </div>
                </div>

                {/* Second Floor */}
                <div className="floor-plan-container">
                    <h3 className="floor-title">MASJID SECOND FLOOR</h3>
                    <div className="plan-content">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Bairao-Floor-Plan.png`}
                            alt="Masjid Second Floor Plan"
                            className="floor-plan-image"
                        />
                        <div className="specifications">
                            <div className="spec-row">
                                <span className="spec-label">Women's Masjid</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">60ft x 40ft (31ft x 24ft opening)</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Masallah Count</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">168 (4 rows of 24 & 12 rows of 6 masallahs)</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Women's Sehen</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">60ft x 16ft</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Madrasah Classrooms</span>
                                <span className="spec-divider">|</span>
                                <span className="spec-value">12 (8 large & 4 small)</span>
                            </div>
                        </div>
                    </div>

                    {/* Separator inside the white container */}
                    <div className="separator">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;