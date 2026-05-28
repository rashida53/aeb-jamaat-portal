import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './AsharaMubarakaPage.css';

const AsharaMubarakaPage = () => {
    return (
        <div className="ashara-page">
            <Navbar useDarkLogo={true} />

            <div
                className="ashara-content"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'repeat',
                }}
            >
                <div className="ashara-container">

                    <h1 className="ashara-relay-title">Ashara Mubaraka Relay Center</h1>

                    <div className="ashara-flag">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/ashara-banner.png`}
                            alt="Ya Husain Flag"
                            className="ashara-flag-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="ashara-flag-placeholder">
                            <span>Ya Husain</span>
                        </div>
                    </div>

                    <h1 className="ashara-title">BUSHRA!</h1>

                    <div className="ashara-card">
                        <p className="ashara-description">
                            Aqa Maula TUS with Karam ane Ehsaan has granted Raza Mubarak to Austin for Ashara Mubaraka Audio Video Broadcast
                        </p>
                        <p className="ashara-description ashara-description-second">
                            Anjuman e Burhani Austin humbly welcomes all mumineen to be shaamil in the Barakat of Waaz Talaqqi of Dai Imam al Hussain AS Syedna Aali Qadr Mufaddal Saifuddin TUS
                        </p>
                    </div>

                    <div className="ashara-info-grid">
                        <div className="ashara-map-section">
                            <h2 className="ashara-section-title">Austin Markaz</h2>
                            <div className="ashara-title-line"></div>
                            <div className="ashara-map-wrapper">
                                <iframe
                                    title="Markaz Location"
                                    className="ashara-map"
                                    src="https://maps.google.com/maps?q=13209+Old+Gregg+Ln,+Pflugerville,+TX+78660&output=embed"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <a
                                href="https://maps.app.goo.gl/PCEohsqyhapbL8Yi6?g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ashara-address-link"
                            >
                                13209 Old Gregg Ln, Pflugerville, TX 78660
                            </a>
                        </div>

                        <div className="ashara-contact-section">
                            <h2 className="ashara-section-title">Contact</h2>
                            <div className="ashara-title-line"></div>

                            <div className="ashara-contact-group">
                                <p className="ashara-contact-label">Aamil Saheb</p>
                                <p className="ashara-contact-name">Janab Shk. Saifuddin Zakir</p>
                                <a href="tel:+16503097803" className="ashara-contact-link">650-309-7803</a>
                                <a href="mailto:austinamil@alvazarat.org" className="ashara-contact-link">austinamil@alvazarat.org</a>
                            </div>

                            <div className="ashara-contact-group">
                                <p className="ashara-contact-label">Secretary</p>
                                <p className="ashara-contact-name">Shk. Murtaza bhai Rawat</p>
                                <a href="tel:+18325268734" className="ashara-contact-link">832-526-8734</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AsharaMubarakaPage;
