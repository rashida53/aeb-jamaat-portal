import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import './UmoorSection.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const UmoorSection = () => {
    const [activeTab, setActiveTab] = useState('');
    const [openAccordion, setOpenAccordion] = useState(''); // For mobile accordion
    const [umoorContent, setUmoorContent] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const fetchUmoorContent = async () => {
            try {
                const response = await client.getEntries({
                    content_type: '12umoor'
                });

                const content = {};
                const tabsList = [];
                const umoorOrder = [
                    'deeniyah',
                    'talimiyah',
                    'marafiq-burhaniyah',
                    'maliyah',
                    'mawarid-bashariyah',
                    'dakheliyah',
                    'kharejiyah',
                    'qaza',
                    'fmb',
                    'iqtesadiyah',
                    'amlaak',
                    'sehhat'
                ];

                response.items.forEach(item => {
                    const umoorId = item.fields.umoorName.toLowerCase().replace(/\s+/g, '-');
                    content[umoorId] = {
                        title: item.fields.umoorFullName,
                        description: item.fields.umoorContent,
                        lead: item.fields.umoorLeadName,
                        contact: item.fields.umoorLeadContact || '',
                        website: item.fields.umoorWebsite || '',
                        image: item.fields.umoorImage?.fields?.file?.url || '',
                        order: umoorOrder.indexOf(umoorId)
                    };

                    tabsList.push({
                        id: umoorId,
                        label: item.fields.umoorFullName,
                        order: umoorOrder.indexOf(umoorId)
                    });
                });

                // Sort tabsList based on the predefined order
                tabsList.sort((a, b) => a.order - b.order);

                setUmoorContent(content);
                setTabs(tabsList);
                // Set initial active tab
                if (tabsList.length > 0) {
                    setActiveTab(tabsList[0].id);
                    setOpenAccordion(tabsList[0].id);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching Umoor content:', error);
                setIsLoading(false);
            }
        };

        fetchUmoorContent();
    }, []);

    // Effect to match content area height to side menu height
    useEffect(() => {
        const matchHeights = () => {
            const sideMenu = document.querySelector('.umoor-side-menu');
            const contentArea = document.querySelector('.umoor-content-area');

            if (sideMenu && contentArea) {
                // Wait for DOM to be fully rendered
                setTimeout(() => {
                    const sideMenuHeight = sideMenu.offsetHeight;
                    const sideMenuRect = sideMenu.getBoundingClientRect();
                    const contentAreaRect = contentArea.getBoundingClientRect();

                    // Set the content area height to exactly match the side menu
                    contentArea.style.height = `${sideMenuHeight}px`;
                    contentArea.style.maxHeight = `${sideMenuHeight}px`;
                    contentArea.style.overflowY = 'auto';

                    console.log('Side menu height:', sideMenuHeight);
                }, 100);
            }
        };

        // Run on initial load and when content changes
        if (!isLoading) {
            matchHeights();
        }

        // Also run when window resizes
        window.addEventListener('resize', matchHeights);

        return () => {
            window.removeEventListener('resize', matchHeights);
        };
    }, [activeTab, umoorContent, isLoading]);

    const renderDescription = (richTextContent) => {
        return documentToReactComponents(richTextContent);
    };

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    const umoorData = umoorContent[activeTab] || {};

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    const handleAccordionToggle = (tabId) => {
        setOpenAccordion(openAccordion === tabId ? null : tabId);
        setActiveTab(tabId);
    };

    return (
        <section
            id="umoor"
            className="umoor-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <h2 className="umoor-title">
                12 UMOOR
            </h2>

            {/* Desktop Layout */}
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
                                <p><strong>Coordinator: {umoorData.lead}</strong> </p>
                                {umoorData.contact && <p><strong>{umoorData.contact}</strong> </p>}
                                {umoorData.website && (
                                    <p>
                                        <strong>
                                            <a href={umoorData.website} target="_blank" rel="noopener noreferrer" className="website-link">
                                                Umoor Website
                                            </a>
                                        </strong>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Accordion */}
            <div className="umoor-accordion mobile-nav">
                {tabs.map((tab) => (
                    <div key={tab.id} className="accordion-item">
                        <button
                            className={`accordion-header ${openAccordion === tab.id ? 'active' : ''}`}
                            onClick={() => handleAccordionToggle(tab.id)}
                        >
                            <div className="umoor-nav-label"><span>{tab.label}</span></div>
                            <span className="accordion-icon">
                                {openAccordion === tab.id ?
                                    <RiArrowDropUpLine color="#ffffff" size={28} /> :
                                    <RiArrowDropDownLine color="#00203D" size={28} />
                                }
                            </span>
                        </button>
                        {openAccordion === tab.id && (
                            <div className="accordion-content">
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
                                            <p><strong>Coordinator: {umoorData.lead}</strong> </p>
                                            {umoorData.contact && <p><strong>{umoorData.contact}</strong> </p>}
                                            {umoorData.website && (
                                                <p>
                                                    <strong>
                                                        <a href={umoorData.website} target="_blank" rel="noopener noreferrer" className="website-link">
                                                            Umoor Website
                                                        </a>
                                                    </strong>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UmoorSection; 