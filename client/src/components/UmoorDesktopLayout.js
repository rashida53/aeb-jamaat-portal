import React from 'react';
import './UmoorSection.css';

const UmoorDesktopLayout = ({ tabs, activeTab, setActiveTab, umoorData, renderDescription }) => {
    return (
        <div className="umoor-desktop-layout">
            {/* Side Menu */}
            <div className="umoor-side-menu">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`side-menu-item ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="umoor-content-area">
                <div className="umoor-main-content">
                    <div className="umoor-image">
                        <img
                            key={activeTab}
                            src={umoorData.image ? `https:${umoorData.image}` : ''}
                            alt={`${umoorData.title} - Community gathering`}
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
                                <div className="placeholder-icon">📖</div>
                                <p>{umoorData.title} Image</p>
                            </div>
                        </div>
                    </div>

                    <div className="umoor-text">
                        <div className="umoor-description">
                            {renderDescription(umoorData.description)}
                        </div>

                        <div className="contact-info">
                            <p><strong>Umoor Lead-</strong> {umoorData.lead}</p>
                            {umoorData.contact && <p><strong>Contact-</strong> {umoorData.contact}</p>}
                            {umoorData.website && (
                                <p>
                                    <strong>Umoor Website-</strong>
                                    <a href={umoorData.website} target="_blank" rel="noopener noreferrer" className="website-link">
                                        Visit Website
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UmoorDesktopLayout;
