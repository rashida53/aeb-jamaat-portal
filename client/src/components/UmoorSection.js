import React, { useState } from 'react';
import './UmoorSection.css';

const UmoorSection = () => {
    const [activeTab, setActiveTab] = useState('deeniyah');

    const tabs = [
        { id: 'deeniyah', label: 'Umoor Deeniyah' },
        { id: 'talimiyah', label: 'Umoor Talimiyah' },
        { id: 'fmb', label: 'Umoor FMB' },
        { id: 'iqtesadiyah', label: 'Umoor Iqtesadiyah' },
        { id: 'qaza', label: 'Umoor Qaza' },
        { id: 'un', label: 'Umoor Un' }
    ];

    return (
        <section className="umoor-section">
            <div className="umoor-content">
                <h2 className="umoor-title">
                    <span className="number">12</span> UMOOR
                </h2>

                <div className="umoor-navigation">
                    {tabs.map((tab, index) => (
                        <React.Fragment key={tab.id}>
                            <button
                                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                            {index < tabs.length - 1 && <div className="nav-divider"></div>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="umoor-main-content">
                    <div className="umoor-image">
                        <img
                            src="/images/umoor-gathering.jpg"
                            alt="Religious gathering with speaker and attendees"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="image-placeholder" style={{ display: 'none' }}>
                            <div className="placeholder-content">
                                <div className="placeholder-icon">📖</div>
                                <p>Religious Gathering Image</p>
                            </div>
                        </div>
                    </div>

                    <div className="umoor-text">
                        <p>
                            For centuries, Awliyaullah AS have ensured that Mumineen remain steadfast in their faith and loyal towards their Maula TUS. They have strived to create an ideal Imani environment for Mumineen to allow them to prosper in both their worldly and spiritual affairs. The Umoor Deeniyah Committees will help create and maintain a suitable Imani environment for the adherence to the tenets of Islam and the Teachings of Awliyaullah AS.
                        </p>

                        <div className="contact-info">
                            <p><strong>Umoor Lead-</strong> Khuzema Bs Zakavi</p>
                            <p><strong>Contact-</strong> 512-999-9999</p>
                            <p><strong>Umoor Website-</strong> <a href="#" className="website-link">Umoor Website</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmoorSection; 