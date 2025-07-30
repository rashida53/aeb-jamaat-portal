import React, { useState } from 'react';
import './UmoorSection.css';

const UmoorSection = () => {
    const [activeTab, setActiveTab] = useState('deeniyah');

    const umoorContent = {
        'deeniyah': {
            title: 'Umoor Deeniyah',
            description: 'For centuries, Awliyaullah AS have ensured that Mumineen remain steadfast in their faith and loyal towards their Maula TUS. They have strived to create an ideal Imani environment for Mumineen to allow them to prosper in both their worldly and spiritual affairs. The Umoor Deeniyah Committees will help create and maintain a suitable Imani environment for the adherence to the tenets of Islam and the Teachings of Awliyaullah AS.',
            lead: 'Khuzema Bs Zakavi',
            contact: '512-999-9999',
            website: 'Umoor Deeniyah Website',
            image: '/images/Umoor-deeniyah.jpeg'
        },
        'talimiyah': {
            title: 'Umoor Talimiyah',
            description: 'The Umoor Talimiyah Committees focus on educational initiatives and learning programs within the community. They work to promote Islamic education, organize study circles, and facilitate religious learning opportunities for all age groups. These committees ensure that knowledge of our faith is accessible and properly disseminated.',
            lead: 'Ahmed Bhai Patel',
            contact: '512-888-7777',
            website: 'Umoor Talimiyah Website',
            image: '/images/umoor-talimiyah.jpg'
        },
        'marafiq-burhaniyah': {
            title: 'Umoor Marafiq Burhaniyah',
            description: 'The Marafiq Burhaniyah Committees handle community infrastructure and facilities management. They oversee the maintenance and development of community centers, mosques, and other religious facilities. Their work ensures that our community spaces are well-maintained and conducive to spiritual activities.',
            lead: 'Husain Bhai Mulla',
            contact: '512-777-6666',
            website: 'Umoor Marafiq Website',
            image: '/images/umoor-marafiq.jpg'
        },
        'maliyah': {
            title: 'Umoor Maliyah',
            description: 'The Umoor Maliyah Committees manage financial matters and community funds. They oversee budgeting, fundraising activities, and financial planning for community projects. These committees ensure transparent and responsible financial management for the benefit of the entire community.',
            lead: 'Ali Bhai Merchant',
            contact: '512-666-5555',
            website: 'Umoor Maliyah Website',
            image: '/images/umoor-maliyah.jpg'
        },
        'mawarid-bashariyah': {
            title: 'Umoor Mawarid Bashariyah',
            description: 'The Mawarid Bashariyah Committees focus on human resources and community development. They work on recruitment, training, and development of community volunteers and leaders. These committees ensure that our community has capable and dedicated individuals serving in various capacities.',
            lead: 'Fatema Bhen Jaffer',
            contact: '512-555-4444',
            website: 'Umoor Mawarid Website',
            image: '/images/umoor-mawarid.jpg'
        },
        'dakheliyah': {
            title: 'Umoor Dakheliyah',
            description: 'The Umoor Dakheliyah Committees handle internal community affairs and domestic matters. They address family issues, provide counseling services, and support community members in their personal and family life. These committees work to strengthen family bonds and community harmony.',
            lead: 'Zainab Bhen Kermalli',
            contact: '512-444-3333',
            website: 'Umoor Dakheliyah Website',
            image: '/images/umoor-dakheliyah.jpg'
        },
        'kharejiyah': {
            title: 'Umoor Kharejiyah',
            description: 'The Umoor Kharejiyah Committees manage external relations and community outreach. They coordinate with other communities, organize interfaith dialogues, and represent our community in broader social initiatives. These committees help build bridges with the wider society.',
            lead: 'Mustafa Bhai Vazir',
            contact: '512-333-2222',
            website: 'Umoor Kharejiyah Website',
            image: '/images/Umoor-Kharejiyah.jpeg'
        },
        'qaza': {
            title: 'Umoor Qaza',
            description: 'The Umoor Qaza Committees handle community justice and dispute resolution. They provide mediation services, resolve conflicts within the community, and ensure fair treatment for all members. These committees work to maintain peace and harmony through just and equitable solutions.',
            lead: 'Hasan Bhai Rizvi',
            contact: '512-222-1111',
            website: 'Umoor Qaza Website',
            image: '/images/umoor-qaza.jpg'
        },
        'fmb': {
            title: 'Umoor FMB',
            description: 'The Umoor FMB Committees focus on family and marriage bureau services. They assist in matchmaking, organize marriage ceremonies, and provide support for newly married couples. These committees help strengthen family foundations and promote healthy marital relationships.',
            lead: 'Amina Bhen Husain',
            contact: '512-111-0000',
            website: 'Umoor FMB Website',
            image: '/images/umoor-fmb.jpg'
        },
        'iqtesadiyah': {
            title: 'Umoor Iqtesadiyah',
            description: 'The Umoor Iqtesadiyah Committees handle economic development and business networking. They support community entrepreneurs, organize business networking events, and promote economic self-sufficiency. These committees work to strengthen the economic foundation of our community.',
            lead: 'Jaffer Bhai Ali',
            contact: '512-000-9999',
            website: 'Umoor Iqtesadiyah Website',
            image: '/images/Umoor-Iqtesadiyah.jpeg'
        },
        'amlaak': {
            title: 'Umoor Amlaak',
            description: 'The Umoor Amlaak Committees manage property and real estate matters for the community. They oversee community property acquisitions, maintenance of community buildings, and real estate investments. These committees ensure proper management of community assets.',
            lead: 'Sakina Bhen Merchant',
            contact: '512-999-8888',
            website: 'Umoor Amlaak Website',
            image: '/images/umoor-amlaak.jpg'
        },
        'sehhat': {
            title: 'Umoor Sehhat',
            description: 'The Umoor Sehhat Committees focus on health and wellness initiatives within the community. They organize health awareness programs, coordinate medical camps, and promote healthy lifestyle practices. These committees work to ensure the physical and mental well-being of community members.',
            lead: 'Dr. Zahra Bhen Patel',
            contact: '512-888-7777',
            website: 'Umoor Sehhat Website',
            image: '/images/Umoor-Sehhat.jpeg'
        }
    };

    const tabs = [
        { id: 'deeniyah', label: 'Umoor Deeniyah' },
        { id: 'talimiyah', label: 'Umoor Talimiyah' },
        { id: 'marafiq-burhaniyah', label: 'Umoor Marafiq Burhaniyah' },
        { id: 'maliyah', label: 'Umoor Maliyah' },
        { id: 'mawarid-bashariyah', label: 'Umoor Mawarid Bashariyah' },
        { id: 'dakheliyah', label: 'Umoor Dakheliyah' },
        { id: 'kharejiyah', label: 'Umoor Kharejiyah' },
        { id: 'qaza', label: 'Umoor Qaza' },
        { id: 'fmb', label: 'Umoor FMB' },
        { id: 'iqtesadiyah', label: 'Umoor Iqtesadiyah' },
        { id: 'amlaak', label: 'Umoor Amlaak' },
        { id: 'sehhat', label: 'Umoor Sehhat' }
    ];

    return (
        <section
            className="umoor-section"
            style={{
                backgroundImage: 'url(/images/islamic-pattern.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <h2 className="umoor-title">
                12 UMOOR
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
                        {index < tabs.length - 1 && <span className="nav-separator">|</span>}
                    </React.Fragment>
                ))}
            </div>

            <div className="umoor-content">
                <div className="umoor-main-content">
                    <div className="umoor-image">
                        <img
                            key={activeTab}
                            src={umoorContent[activeTab].image}
                            alt={`${umoorContent[activeTab].title} - Community gathering`}
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
                                <p>{umoorContent[activeTab].title} Image</p>
                            </div>
                        </div>
                    </div>

                    <div className="umoor-text">
                        <p>
                            {umoorContent[activeTab].description}
                        </p>

                        <div className="contact-info">
                            <p><strong>Umoor Lead-</strong> {umoorContent[activeTab].lead}</p>
                            <p><strong>Contact-</strong> {umoorContent[activeTab].contact}</p>
                            <p><strong>Umoor Website-</strong> <a href="#" className="website-link">{umoorContent[activeTab].website}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmoorSection; 