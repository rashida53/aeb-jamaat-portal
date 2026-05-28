import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './AsharaMubarakaPage.css';

const ASHARA_TARGET = new Date('2026-06-16T10:00:00-05:00');

const getTimeRemaining = () => {
    const diff = ASHARA_TARGET - new Date();
    if (diff <= 0) return { days: '00', hours: '00', minutes: '00' };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
    };
};

const TRAVEL_TABS = [
    {
        id: 'flights',
        label: 'Airport',
        heading: 'Airport',
        sections: [
            {
                items: [
                    {
                        bold: 'Austin-Bergstrom International Airport — AUS.',
                        text: ' Austin has an international airport, and you will find carriers that can fly you directly to Austin as a Port of Entry. Austin Markaz is approximately 20 minutes drive from the airport.',
                    },
                    {
                        text: 'Alternatively you can fly into Dallas - DFW/DAL or Houston - IAH/HOU which are 3 hours away by car. You will need a car rental during your stay in Austin, you can rent the car from the airport to drive into the Austin area. We do not recommend Uber/Lyft from Dallas or Houston due to high costs and chances of cancellations.',
                    },
                ],
            },
        ],
    },
    {
        id: 'transit',
        label: 'Local Transit',
        sections: [
            {
                subheading: 'Car Rental',
                items: [
                    {
                        bold: 'There is no public transport available in the Austin Markaz area.',
                        text: ' Distances in TX are big making public transport unviable.',
                    },
                    {
                        content: (
                            <>
                                You will need to rent a car from the airport. These cars will have to be self driven. <strong>Enterprise</strong> and <strong>Hertz</strong> are options for company rentals. <strong>Turo</strong> is cars rented from individuals.
                            </>
                        ),
                    },
                    { text: 'Please carry a valid foreign driver license and an International Driving Permit issued in their country of residence.' },
                ],
            },
            {
                subheading: 'Uber/Lyft',
                items: [
                    {
                        content: (
                            <>
                                <strong>Uber</strong> and <strong>Lyft</strong> are available but it will be more economical to rent a car over the duration of your stay.
                            </>
                        ),
                    },
                ],
            },
            {
                subheading: 'Parking',
                items: [
                    { text: 'Parking arrangements have been made outside the Markaz venue within a 2 minute walk.' },
                    { text: 'Buzurgo will not require any walking and can arrive at Markaz entrance.' },
                ],
            },
        ],
    },
    {
        id: 'connectivity',
        label: 'Connectivity',
        sections: [
            {
                subheading: 'Internet & SIM',
                items: [
                    {
                        content: (
                            <>
                                We highly recommend activating an international data pack <strong>BEFORE</strong> you arrive so you can access WhatsApp on arrival.
                            </>
                        ),
                    },
                    { text: 'You can get a local SIM but internet is available in most public places and you do not need local calling active if you have a data pack.' },
                    { text: 'Wifi will be available at Austin Markaz.' },
                ],
            },
        ],
    },
    {
        id: 'accommodation',
        label: 'Accommodation',
        sections: [
            {
                subheading: 'Airbnb',
                items: [
                    {
                        content: (
                            <>
                                Airbnb stays will be closer to Markaz. Search for homes in{' '}
                                <a
                                    href="https://www.airbnb.com/s/Pflugerville--TX/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&place_id=ChIJT4Rx_7TNRIYR4Mu-ZHsEEcg&acp_id=59a01d53-9e6d-4de5-a66f-4af0170efc2e&date_picker_type=calendar&search_type=user_map_move&query=Pflugerville%2C%20TX&search_mode=regular_search&price_filter_num_nights=11&checkin=2026-06-15&checkout=2026-06-26&source=structured_search_input_header&ne_lat=30.507749952931288&ne_lng=-97.491660782895&sw_lat=30.33092874007114&sw_lng=-97.76015351168007&zoom=11.711512934341936&zoom_level=11.711512934341936&search_by_map=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ashara-travel-link"
                                >
                                    Pflugerville Area
                                </a>
                                .
                            </>
                        ),
                    },
                ],
            },
            {
                subheading: 'Hotels',

                items: [
                    {
                        content: (
                            <>
                                <a
                                    href="https://www.expedia.com/Hotel-Search?destination=Pflugerville%2C+Texas%2C+United+States+of+America&regionId=6085432&latLong=30.439369%2C-97.620003&flexibility=0_DAY&d1=2026-06-15&startDate=2026-06-15&d2=2026-06-26&endDate=2026-06-26&adults=2&rooms=1&typeaheadCollationId=70e9e141-351d-4f7f-aa9b-f8805aa3031a&sort=RECOMMENDED&theme=&userIntent=&semdtl=&categorySearch=&useRewards=false&pwaOverlay=map&lodging=HOTEL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ashara-travel-link"
                                >
                                    Hotels
                                </a>
                                {' '}are further away from Markaz but there are many options within a 15 minute drive.
                            </>
                        ),
                    },
                    { text: 'We recommend choosing a stay within 15 minutes commute time to avoid running into variations in traffic.' },
                ],
            },
        ],
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        sections: [
            {
                subheading: 'Healthcare',
                items: [
                    { text: 'Our local team of doctors will help with basic healthcare concerns.' },
                    { text: 'Please carry medicines for existing conditions and keep a prescription of a local doctor with your medicines.' },
                    { text: 'Critical conditions that require treatment externally would have to be covered on own.' },
                ],
            },
        ],
    },
    {
        id: 'packing',
        label: 'Packing',
        sections: [
            {
                subheading: 'Packing',
                items: [
                    { text: 'We recommend bringing currency with you from your home country. Exchanges are available here but may have higher fees.' },
                    {
                        content: (
                            <>
                                Make sure you do not carry any grains or meats with you, a detailed list is available on the{' '}
                                <a
                                    href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ashara-travel-link"
                                >
                                    Customs website
                                </a>
                                .
                            </>
                        ),
                    },
                    { text: 'TX is hot this time of the year with temperatures reaching 35°C — small personal fans and personal misting sprays will be helpful.' },
                ],
            },
        ],
    },
];

const AsharaMubarakaPage = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining);
    const [activeTab, setActiveTab] = useState('flights');

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getTimeRemaining()), 1000 * 30);
        return () => clearInterval(id);
    }, []);

    const activeContent = TRAVEL_TABS.find(t => t.id === activeTab) ?? TRAVEL_TABS[0];

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

                    <div className="ashara-travel">
                        <h2 className="ashara-travel-title">Planning</h2>

                        <div className="ashara-travel-tabs" role="tablist">
                            {TRAVEL_TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={activeTab === tab.id}
                                    className={`ashara-travel-tab ${activeTab === tab.id ? 'is-active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="ashara-travel-panel" role="tabpanel">
                            {activeContent.heading && (
                                <h3 className="ashara-travel-panel-heading">{activeContent.heading}</h3>
                            )}
                            {activeContent.sections.map((section, sIdx) => (
                                <div key={sIdx} className="ashara-travel-section">
                                    {section.subheading && (
                                        <h4 className="ashara-travel-subheading">{section.subheading}</h4>
                                    )}
                                    <ul className="ashara-travel-list">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="ashara-travel-list-item">
                                                {item.content ?? (
                                                    <>
                                                        {item.bold && <strong>{item.bold}</strong>}
                                                        {item.text}
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ashara-countdown">
                        <h2 className="ashara-countdown-title">Days Until Ashara Mubaraka 1448H</h2>
                        <div className="ashara-countdown-grid">
                            <div className="ashara-countdown-item">
                                <span className="ashara-countdown-value">{timeLeft.days}</span>
                                <span className="ashara-countdown-label">Days</span>
                            </div>
                            <div className="ashara-countdown-item">
                                <span className="ashara-countdown-value">{timeLeft.hours}</span>
                                <span className="ashara-countdown-label">Hours</span>
                            </div>
                            <div className="ashara-countdown-item">
                                <span className="ashara-countdown-value">{timeLeft.minutes}</span>
                                <span className="ashara-countdown-label">Mins</span>
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
