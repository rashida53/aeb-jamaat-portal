import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="contact-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <h2 className="contact-title">
                CONTACT INFORMATION
            </h2>

            <div className="contact-content">
                <div className="contact-main-content">
                    <div className="contact-image">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/markaz-img-5.jpg`}
                            alt="Anjuman-e-Burhani Markaz - Community gathering and activities"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                            onLoad={(e) => {
                                e.target.style.display = 'block';
                                e.target.nextSibling.style.display = 'none';
                            }}
                        />
                        <div className="image-placeholder" style={{ display: 'none' }}>
                            <div className="placeholder-content">
                                <div className="placeholder-icon">🏛️</div>
                                <p>Markaz Image</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-text">
                        <div className="contact-info-section">
                            <h3 className="contact-subtitle">Address</h3>
                            <div className="contact-details">
                                <div className="address-item">
                                    <p className="address-title"><strong>Markaz</strong></p>
                                    <p>
                                        <a
                                            href="https://maps.app.goo.gl/PCEohsqyhapbL8Yi6?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="address-link"
                                        >
                                            13209 Old Gregg Ln, Pflugerville, TX 78660
                                        </a>
                                    </p>
                                </div>

                                <div className="address-item">
                                    <p className="address-title"><strong>Masjid Zameen</strong></p>
                                    <p>
                                        <a
                                            href="https://maps.app.goo.gl/xkkBroX6zaJq5p4n8?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="address-link"
                                        >
                                            800 N Heatherwilde Blvd, Pflugerville, TX 78660
                                        </a>
                                    </p>
                                </div>

                                <div className="address-item">
                                    <p className="address-title"><strong>Daarul Imarat</strong></p>
                                    <p>
                                        <a
                                            href="https://maps.app.goo.gl/YNrySyQUgu9a8V5U9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="address-link"
                                        >
                                            16807 Langland Rd, Pflugerville, TX 78660
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-section">
                            <h3 className="contact-subtitle">Contact</h3>
                            <div className="contact-details">
                                <div className="contact-person">
                                    <p className="person-title"><strong>Aamil Saheb</strong></p>
                                    <p>
                                        Janab Shk. Saifuddin Zakir<br></br>
                                        <a href="tel:+16503097803" className="contact-link">650-309-7803</a><br></br>
                                        <a href="mailto:austinamil@alvazarat.org" className="contact-link">austinamil@alvazarat.org</a>
                                    </p>
                                </div>

                                <div className="contact-person">
                                    <p className="person-title"><strong>Secretary</strong></p>
                                    <p>
                                        Shk. Murtaza bhai Rawat<br></br>
                                        <a href="tel:+18325268734" className="contact-link">832-526-8734</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection; 