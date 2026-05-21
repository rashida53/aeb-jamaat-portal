import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './NiyaazCalendarPage.css';

const groups = [
    {
        id: 1,
        members: [
            'Hussain, Nasir bhai & Arefa behn',
            'Tailor, Mohamedi bhai & Tasnim behn',
            'Rasheed, Mufaddal bhai & Marziya behn',
            'Viramgamwala, Aliasgar bhai & Alefiya behn',
        ],
        shehrullah: [
            { night: '5th Raat', date: 'Tuesday, Feb 9, 2027' },
            { night: '15th Raat', date: 'Friday, Feb 19, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Shahadat Moulatena Fatema (AS)', hijri: 'Jamad il Ula 10th Raat', date: 'Monday, Oct 19, 2026' },
        ],
    },
    {
        id: 2,
        members: [
            'Patel, Husain bhai & Tasneem behn',
            'Bhora, M. Taaha bhai & Zainab behn',
            'Malbari, M. Hussain bhai & Mubaraka behn',
            'Vandeliwala, Ismail bhai & Fatema behn',
        ],
        shehrullah: [
            { night: '3rd Raat', date: 'Sunday, Feb 7, 2027' },
            { night: '25th Raat', date: 'Monday, Mar 1, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Milad Imam uz Zaman (AS)', hijri: 'Rabi ul Aakhar 4th Raat', date: 'Tuesday, Sep 15, 2026' },
        ],
    },
    {
        id: 3,
        members: [
            'Choilawala, M. Murtuza bhai & Alafia behn',
            'Jamali, M. Taher bhai & Sakina behn',
            'Chakera, Mufaddal bhai & Farida behn',
            'Chhatriwala, Hatim bhai & Tarana behn',
        ],
        shehrullah: [
            { night: '19th Raat', date: 'Tuesday, Feb 23, 2027' },
            { night: '28th Raat', date: 'Thursday, Mar 4, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Chehlum Imam Hussain (AS)', hijri: 'Safar ul Muzaffar 20th', date: 'Monday, Aug 3, 2026' },
        ],
    },
    {
        id: 4,
        members: [
            'Jamali, Ammar bhai & Tasneem behn',
            'Dohadwala, Husain bhai & Fatema behn',
            'Amijee, Sk. Mufaddal bhai & Zainab behn',
            'Zakavi, Khuzema BS & Rashida BS',
        ],
        shehrullah: [
            { night: '6th Raat', date: 'Wednesday, Feb 10, 2027' },
            { night: '16th Raat', date: 'Saturday, Feb 20, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Urs Syedna Mohammed Burhanuddin (RA) - Raat', hijri: 'Rabi ul Awwal 16th', date: 'Friday, Aug 28, 2026' },
        ],
    },
    {
        id: 5,
        members: [
            'Madraswala, M. Imran bhai & Umme Salama behn',
            'Sanjeliwala, M. Huzefa bhai & Arwa behn',
            'Jivanji, Mustansir bhai',
            'Ali, Husain bhai & Rashida behn',
        ],
        shehrullah: [
            { night: '8th Raat', date: 'Friday, Feb 12, 2027' },
            { night: '26th Raat', date: 'Tuesday, Mar 2, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Milad Syedna Mohammed Burhanuddin (RA)', hijri: 'Rabi ul Aakhar 20th Raat', date: 'Wednesday, Sep 30, 2026' },
        ],
    },
    {
        id: 6,
        members: [
            'Kutianawala, Murtaza bhai & Kulsum behn',
            'Ujjainwala, Yusuf bhai & Jumana behn',
            'Laila, Mufaddal bhai & Tasneem behn',
            'Miyasaheb, Ali bhai & Yaquta behn',
        ],
        shehrullah: [
            { night: '4th Raat', date: 'Monday, Feb 8, 2027' },
            { night: '30th Raat', date: 'Saturday, Mar 6, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: "Yaum-al-Mab'as", hijri: 'Rajab ul Asab 27th', date: 'Monday, Jan 4, 2027' },
        ],
    },
    {
        id: 7,
        members: [
            'Hirani, M. Murtaza bhai & Batul behn',
            'Hasan, Wasim bhai & Sabahat behn',
            'Hakimi, Zohair bhai & Sakina behn',
            'Dholkawala, Burhan bhai & Jamila behn',
            'Ali, M. Qutbuddin bhai (Urs Contribution)',
        ],
        shehrullah: [
            { night: '7th Raat', date: 'Thursday, Feb 11, 2027' },
            { night: '21st Raat', date: 'Thursday, Feb 25, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Urs Syedna Qutbuddin Shaheed (RA)', hijri: 'Jamad il Ukhra 27th Raat', date: 'Saturday, Dec 5, 2026' },
        ],
    },
    {
        id: 8,
        members: [
            'Vejlani, Abizer bhai & Shirin behn',
            'Khambati, Zoeb bhai & Naquiya behn',
            'Ali, Yusuf bhai & Fatema behn',
            'Khambati, Munira behn',
        ],
        shehrullah: [
            { night: '11th Raat', date: 'Monday, Feb 15, 2027' },
            { night: '29th Raat', date: 'Friday, Mar 5, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Urs Syedi Fakhruddin Shaheed (AQ)', hijri: 'Moharram ul Haraam 27th', date: 'Saturday, Jul 11, 2026' },
        ],
    },
    {
        id: 9,
        members: [
            'Patwa, Feroz bhai & Muneeza behn',
            'Husain, Abbas bhai & Alifiya behn',
            'Makra, Hussain bhai & Lamiyah behn',
            'Malbari, M. Murtaza bhai & Alefiyah behn',
        ],
        shehrullah: [
            { night: '10th Raat', date: 'Sunday, Feb 14, 2027' },
            { night: '27th Raat', date: 'Wednesday, Mar 3, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Rajab ul Asab Pehli Raat', hijri: 'Rajab ul Asab 1st Raat', date: 'Tuesday, Dec 8, 2026' },
        ],
    },
    {
        id: 10,
        members: [
            'Shakir, M. Mustafa bhai & Munira behn',
            'Karachiwala, M. Hamza bhai & Rashida behn',
            'Hitawala, Taher bhai & Arva behn',
            'Munis, Uzair bhai & Omaima behn',
        ],
        shehrullah: [
            { night: '1st Raat', date: 'Friday, Feb 5, 2027' },
            { night: '12th Raat', date: 'Tuesday, Feb 16, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Milad Syedna Taher Saifuddin (RA)', hijri: 'Zilqadatil Haraam 27mi Raat', date: 'Sunday, May 2, 2027' },
        ],
    },
    {
        id: 11,
        members: [
            'Pedhiwala, Aliasgar bhai & Maria behn',
            'Lokhandwala, Murtuza bhai & Zahabiya behn',
            'Pratapgarhwala, Mustansir bhai & Arwa behn',
            'Halai, Hussain bhai & Noreen behn',
        ],
        shehrullah: [
            { night: '2nd Raat', date: 'Saturday, Feb 6, 2027' },
            { night: '13th Raat', date: 'Wednesday, Feb 17, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Milad un Nabi (SAW)', hijri: 'Rabi ul Awwal 12th', date: 'Monday, Aug 24, 2026' },
        ],
    },
    {
        id: 12,
        members: [
            'Ranapurwala, Mustafa bhai & Maimuna behn',
            'Halvadwala, Murtaza bhai',
            'Lokat, Huzefa bhai & Sakina behn',
            'Tarwala, Mustafa bhai & Alefiya behn',
        ],
        shehrullah: [
            { night: '14th Raat', date: 'Thursday, Feb 18, 2027' },
            { night: '22nd Raat', date: 'Friday, Feb 26, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Milad Amir ul Mumineen (AS)', hijri: 'Rajab ul Asab 13th Raat', date: 'Sunday, Dec 20, 2026' },
        ],
    },
    {
        id: 13,
        members: [
            'Arastu, Zain bhai & Maheen behn',
            'Jamnagerwalla, Juzar bhai & Zainab behn',
            'Rampurawala, Murtaza bhai & Fatema behn',
            'Abbas, Mustansir bhai & Alifia behn',
        ],
        shehrullah: [
            { night: '17th Raat', date: 'Sunday, Feb 21, 2027' },
            { night: '24th Raat', date: 'Sunday, Feb 28, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Yaum e Arafa', hijri: 'Zilhijjatil Haraam 10th Raat', date: 'Friday, May 14, 2027' },
        ],
    },
    {
        id: 14,
        members: [
            'Rawat, Sk. Murtaza bhai & Sarah behn',
            'Palgharwala, Abbas bhai & Zainab behn',
            'Arastu, Ali bhai & Sanaa behn',
            'Jeevanjee, Mustansir bhai & Seher behn',
        ],
        shehrullah: [
            { night: '18th Raat', date: 'Monday, Feb 22, 2027' },
            { night: 'Eid ni Raat', date: 'Sunday, Mar 7, 2027' },
        ],
        outsideShehrullah: [
            { miqaat: 'Lailate Maeraj', hijri: 'Rajab ul Asab 27th Raat', date: 'Sunday, Jan 3, 2027' },
        ],
    },
];

const contributionMembers = [
    'Sk. Hakimuddin Dhila', 'Sk. Kuresh Diwan', 'Sk. Shabbir Mamuji',
    'M. Abidhusain Amreliwala', 'M. Qutbuddin Ali',
    'Farhan Azad', 'Adnan Murtaza', 'Hunaid Halai', 'Mohammed Rangwala',
    'Amatullah Mamajiwala', 'Mohammed Ali', 'Miqdad Husain', 'Abbas Khilonawala',
    'Mohammed Jivanji', 'Rashida Esmailji', 'Aliasghar Bagasrawala', 'Ammar Gandhi',
    'Waseem Adamji', 'Mustafa Lokhandwala', 'Yunus Dossaji', 'Mohammed Abdulhussein',
    'Rashida Jamnagarwala', 'Zohair Rupawala', 'Mohammed Hakimuddin', 'Durriya Chinwala',
    'Kaizer Chhatriwala', 'Ashiqhussain Jeevanjee', 'Niloufer Ebrahim', 'Ibrahim Kothawala',
    'Tasneem Motorwala', 'Fatema Lamoowala', 'Abdulqadir Fakhri', 'Zain Halai',
    'Nadir Poonawala', 'Qais Shahi', 'Yunus Kathawala', 'Ahmed Shaikh',
    'Asghar Kapasi', 'Hussain Khambata', 'Abdulmuttalib Lokhandwala', 'Zaineb Abdeally',
    'Mustafa Hassanali',
];

const niyaazCommitteeOutsideShehrullah = [
    { miqaat: 'Urs Syedi Hasanfeer Shaheed (AQ)', hijri: 'Moharram ul Haraam 23rd', date: 'Tuesday, Jul 7, 2026' },
    { miqaat: 'Shahadat Imam Hasan (AS)', hijri: 'Safar ul Muzaffar 28th', date: 'Tuesday, Aug 11, 2026' },
    { miqaat: 'Urs Syedna Mohammed Burhanuddin (RA) — Khatam ul Quran', hijri: 'Rabi ul Awwal 14th', date: 'Wednesday, Aug 26, 2026' },
    { miqaat: 'Urs Syedna Mohammed Burhanuddin (RA) — Khatam ul Quran', hijri: 'Rabi ul Awwal 15th', date: 'Thursday, Aug 27, 2026' },
    { miqaat: 'Urs Syedna Ismail Badruddin (RA)', hijri: 'Jamad il Ukhra 23rd Raat', date: 'Tuesday, Dec 1, 2026' },
    { miqaat: 'Urs Syedna Noor Mohammed Nooruddin (RA)', hijri: 'Rajab ul Asab 4th Raat', date: 'Friday, Dec 11, 2026' },
    { miqaat: 'Urs Syedna Taher Saifuddin (RA) — Khatam ul Quran', hijri: 'Rajab ul Asab 17th Raat', date: 'Thursday, Dec 24, 2026' },
    { miqaat: 'Urs Syedna Taher Saifuddin (RA) — Khatam ul Quran', hijri: 'Rajab ul Asab 18th Raat', date: 'Friday, Dec 25, 2026' },
    { miqaat: 'Urs Syedna Taher Saifuddin (RA) — Raat', hijri: 'Rajab ul Asab 19th Raat', date: 'Saturday, Dec 26, 2026' },
    { miqaat: 'Lailatul Nisf', hijri: 'Shabaan ul Kareem 15th Raat', date: 'Thursday, Jan 21, 2027' },
    { miqaat: 'Urs Moulatena Hurratul Maleka (AQ)', hijri: 'Shabaan ul Kareem 22nd Raat', date: 'Thursday, Jan 28, 2027' },
    { miqaat: 'Urs Syedi Abdul Qader Hakimuddin (AQ)', hijri: 'Shawwal ul Mukarram 27th', date: 'Saturday, Apr 3, 2027' },
    { miqaat: 'Urs Syedna Abdeali Saifuddin (RA) & Syedna Abdultaiyeb Zakiuddin (RA)', hijri: 'Zilqadatil Haraam 12th Raat', date: 'Saturday, Apr 17, 2027' },
    { miqaat: 'Eid ul Adha', hijri: 'Zilhijjatil Haraam 10th', date: 'Saturday, May 15, 2027' },
    { miqaat: 'Eid Gadhir E Khum', hijri: 'Zilhijjatil Haraam 18th', date: 'Sunday, May 23, 2027' },
];

const niyaazCommitteeMiqaats = [
    ...niyaazCommitteeOutsideShehrullah,
    { miqaat: 'Eid ul Fitr', hijri: 'Shawwal 1st', date: 'Monday, Mar 8, 2027' },
];

const checklistSections = [
    {
        phase: 'Pre Miqaat',
        items: [
            {
                textBefore: 'Obtain ',
                inlineLink: { label: 'Jamaat clearance', url: 'https://clearance.austinjamaat.org' },
                textAfter: ' before requesting Raza from Janab Amilsaheb.',
                contact: 'M Taha Bhora — (682) 365-3910',
            },
            {
                text: 'Take Raza from Janab Amil Saheb in person. Give izan to Janaab, his family, Head Moallim Saheb, and Waali Mulla Saheb.',
                contact: 'Janab Amil Saheb — (650) 309-7803',
            },
            {
                text: 'Check if a menu has been suggested by Vazaarat.',
                contact: 'M Hamza Karachiwala — (614) 377-6967',
            },
            {
                textBefore: 'Confirm your ',
                inlineLink: { label: 'Miqaat RSVP', url: 'https://fmb.austinjamaat.org/miqaats' },
                textAfter: ' is live and accessible.',
                contact: 'Rashida Karachiwala — (614) 680-2128',
            },
            {
                text: 'You can reach out for assistance in placing orders or estimating quantity.',
                contact: 'Arefa Hussain — (512) 799-7129 · Ammar Jamali — (512) 920-8652',
            },
            {
                text: 'Check if Markaz has the supplies you need.',
                contact: 'M Imran Madraswala — (469) 212-3416',
            },
            {
                text: 'Niyaaz Committee will arrange iftaari if mumineen are rozdaar on your Niyaaz turn.',
                contact: 'Ammar Jamali — (512) 920-8652 · M Imran Madraswala — (469) 212-3416',
            },
            {
                text: 'To enlist our cleaner, contact Martha directly to check her availability.',
                contact: 'Martha Can — (512) 680-0059',
            },
        ],
    },
    {
        phase: 'Before Jaman',
        items: [
            {
                text: 'Arrive a few minutes early to set thaals and crockery. Use smaller thaals first — they are easier to wash.',
                contact: 'Umme Salama Madraswala — (737) 224-3740',
            },
            {
                text: 'When laying safras, place a disposable safra on top of the reusable ones to keep them clean.',
            },
            {
                text: 'After Janaabs thaal is seated, please do salaam first to Aamil Saheb and Head Moallim Janaab. On the bairao side please do salaam to Bhabhi saheb and Bairo of Janaab Head Moallim.',
                contact: 'Shk. Murtaza Rawat — (832) 526-8734',
            },
            {
                text: 'Use glass cups for Janaab Aamil Saheb, Janaab Head Moallim Saheb, Waali Mulla Saheb, and bairao.',
            },
        ],
    },
    {
        phase: 'During Jaman',
        items: [
            {
                text: 'Opt for smaller serving sizes so food can be easily completed in the thaal.',
                contact: 'M Imran Madraswala — (469) 212-3416',
            },
            {
                text: 'Do not use FMB containers for to-go packing. Use the separate containers in the brown boxes.',
                contact: 'M Hamza Karachiwala — (614) 377-6967',
            },
        ],
    },
    {
        phase: 'After Jaman',
        items: [
            {
                text: 'Help with cleanup. Wash all utensils or load into the two dishwashers and start them.',
                contact: 'M Mustafa Shakir — (512) 348-3844',
            },
            { text: 'Ensure no food is left in fridges. Distribute all leftover food.' },
            { text: 'Wipe all countertops clean.' },
            { text: 'Place any hand-washed utensils on a towel to dry.' },
            { text: 'Mop the kitchen floor.' },
            {
                text: 'Put used hand towels in the kitchen laundry basket.',
                contact: 'Arwa Sanjeliwala — (512) 289-8796',
            },
        ],
    },
    {
        phase: 'Before Leaving',
        items: [
            { text: 'Turn off all lights — bathrooms, decorative lights, deck lights, and all rooms.' },
            { text: 'Remove trash bags from kitchen and bathroom, dispose in the parking lot bin, and replace with new bags.' },
            { text: 'Ensure the Markaz door and main gate are locked.' },
        ],
    },
];

function renderContact(contact) {
    return contact.split(' · ').map((part, i) => {
        const [name, ...rest] = part.split(' — ');
        return (
            <span key={i} className="nc-contact-part">
                <strong>{name}</strong>{rest.length ? ': ' + rest.join(' — ') : ''}
                {i < contact.split(' · ').length - 1 ? ' · ' : ''}
            </span>
        );
    });
}

function InstructionsModal({ onClose }) {
    const [openSection, setOpenSection] = useState(null);
    const [openItems, setOpenItems] = useState(new Set());

    const toggleSection = (phase) => {
        setOpenSection((prev) => (prev === phase ? null : phase));
    };

    const toggleItem = (key) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    return (
        <div className="nc-modal-overlay" onClick={onClose}>
            <div className="nc-modal" onClick={(e) => e.stopPropagation()}>
                <button className="nc-modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>
                <h2 className="nc-modal-title">Checklist</h2>
                <div className="nc-modal-body">
                    {checklistSections.map((section) => {
                        const isSectionOpen = openSection === section.phase;
                        return (
                            <div key={section.phase} className="nc-accordion-item">
                                <button
                                    className={`nc-accordion-header ${isSectionOpen ? 'nc-accordion-header--open' : ''}`}
                                    onClick={() => toggleSection(section.phase)}
                                >
                                    <span>{section.phase}</span>
                                    <span className="nc-accordion-icon">{isSectionOpen ? '−' : '+'}</span>
                                </button>
                                {isSectionOpen && (
                                    <ul className="nc-checklist-items">
                                        {section.items.map((item, idx) => {
                                            const itemKey = `${section.phase}-${idx}`;
                                            const hasContact = item.contact || item.link;
                                            const isItemOpen = openItems.has(itemKey);
                                            return (
                                                <li
                                                    key={idx}
                                                    className={`nc-checklist-item ${hasContact ? 'nc-checklist-item--clickable' : ''} ${isItemOpen ? 'nc-checklist-item--open' : ''}`}
                                                    onClick={hasContact ? () => toggleItem(itemKey) : undefined}
                                                >
                                                    <div className="nc-checklist-item-row">
                                                        <span>
                                                            {item.inlineLink ? (
                                                                <>
                                                                    {item.textBefore}
                                                                    <a
                                                                        href={item.inlineLink.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="nc-checklist-link nc-checklist-link--inline"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        {item.inlineLink.label}
                                                                    </a>
                                                                    {item.textAfter}
                                                                </>
                                                            ) : item.text}
                                                        </span>
                                                        {hasContact && (
                                                            <span className="nc-checklist-item-arrow">{isItemOpen ? '▲' : '▼'}</span>
                                                        )}
                                                    </div>
                                                    {isItemOpen && (
                                                        <div className="nc-checklist-item-contact">
                                                            {item.link && (
                                                                <a
                                                                    href={item.link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="nc-checklist-link"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    {item.link.label}
                                                                </a>
                                                            )}
                                                            {item.contact && (
                                                                <span className="nc-checklist-contact">{renderContact(item.contact)}</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function GroupCard({ group, isFlipped, onFlip, onInstructions }) {
    return (
        <div
            className="nc-card-container"
            onClick={onFlip}
            role="button"
            tabIndex={0}
            aria-label={`Group ${group.id}`}
            onKeyDown={(e) => e.key === 'Enter' && onFlip()}
        >
            <div className={`nc-card ${isFlipped ? 'nc-card--flipped' : ''}`}>
                {/* Front */}
                <div className="nc-card-face nc-card-front">
                    <div className="nc-card-front-number">Group {group.id}</div>
                    <ul className="nc-card-front-members">
                        {group.members.map((m, i) => (
                            <li key={i}>{m}</li>
                        ))}
                    </ul>
                    <div className="nc-card-front-hint">Tap</div>
                </div>

                {/* Back */}
                <div className="nc-card-face nc-card-back">
                    <div className="nc-card-back-inner">
                        <section className="nc-card-section">
                            <h4 className="nc-card-section-title nc-card-section-title--shehrullah">
                                Shehrullah Niyaaz
                            </h4>
                            <ul className="nc-card-dates">
                                {group.shehrullah.map((s, i) => (
                                    <li key={i}>
                                        <span className="nc-date-night">{s.night}</span>
                                        <span className="nc-date-value">{s.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="nc-card-section">
                            <h4 className="nc-card-section-title nc-card-section-title--outside">
                                Outside Shehrullah
                            </h4>
                            <ul className="nc-card-dates">
                                {group.outsideShehrullah.map((o, i) => (
                                    <li key={i}>
                                        <span className="nc-date-miqaat">{o.miqaat}</span>
                                        <span className="nc-date-hijri">{o.hijri}</span>
                                        <span className="nc-date-value">{o.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <button
                        className="nc-instructions-btn"
                        onClick={(e) => { e.stopPropagation(); onInstructions(); }}
                    >
                        Checklist
                    </button>
                </div>
            </div>
        </div>
    );
}

function UTStudentsCard({ onInstructions }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="nc-card-container"
            onClick={() => setIsFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            aria-label="UT Students"
            onKeyDown={(e) => e.key === 'Enter' && setIsFlipped((f) => !f)}
        >
            <div className={`nc-card ${isFlipped ? 'nc-card--flipped' : ''}`}>
                {/* Front */}
                <div className="nc-card-face nc-card-front nc-card-front--centered">
                    <div className="nc-card-front-centered-body">
                        <div className="nc-card-front-number">UT Students</div>
                    </div>
                    <div className="nc-card-front-hint">Tap</div>
                </div>

                {/* Back */}
                <div className="nc-card-face nc-card-back nc-card-back--centered">
                    <section className="nc-card-section nc-card-section--centered">
                        <h4 className="nc-card-section-title nc-card-section-title--shehrullah">
                            Shehrullah Niyaaz
                        </h4>
                        <ul className="nc-card-dates nc-card-dates--centered">
                            <li>
                                <span className="nc-date-night">9th Raat</span>
                                <span className="nc-date-value">Saturday, Feb 13, 2027</span>
                            </li>
                        </ul>
                    </section>

                    <button
                        className="nc-instructions-btn nc-instructions-btn--abs"
                        onClick={(e) => { e.stopPropagation(); onInstructions(); }}
                    >
                        Checklist
                    </button>
                </div>
            </div>
        </div>
    );
}

function ContributionsCard({ onInstructions }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="nc-card-container nc-card-container--wide"
            onClick={() => setIsFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            aria-label="Contributions"
            onKeyDown={(e) => e.key === 'Enter' && setIsFlipped((f) => !f)}
        >
            <div className={`nc-card ${isFlipped ? 'nc-card--flipped' : ''}`}>
                {/* Front */}
                <div className="nc-card-face nc-card-front nc-card-front--wide">
                    <div className="nc-card-front-number">Group 15</div>
                    <ul
                        className="nc-card-front-members nc-card-front-members--grid"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {contributionMembers.map((m, i) => (
                            <li key={i}>{m}</li>
                        ))}
                    </ul>
                    <div className="nc-card-front-hint">Tap</div>
                </div>

                {/* Back */}
                <div className="nc-card-face nc-card-back nc-card-back--wide">
                    <div className="nc-card-back-inner nc-card-back-inner--wide">
                        <section className="nc-card-section nc-card-section--wide">
                            <h4 className="nc-card-section-title nc-card-section-title--outside">
                                Miqaats
                            </h4>
                            <ul className="nc-card-dates nc-card-dates--grid">
                                {niyaazCommitteeMiqaats.map((o, i) => (
                                    <li key={i}>
                                        <span className="nc-date-miqaat">{o.miqaat}</span>
                                        <span className="nc-date-hijri">{o.hijri}</span>
                                        <span className="nc-date-value">{o.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <button
                        className="nc-instructions-btn"
                        onClick={(e) => { e.stopPropagation(); onInstructions(); }}
                    >
                        Checklist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function NiyaazCalendarPage() {
    const [flippedCard, setFlippedCard] = useState(null);
    const [showInstructions, setShowInstructions] = useState(false);

    const handleFlip = (id) => {
        setFlippedCard((prev) => (prev === id ? null : id));
    };

    return (
        <div
            className="nc-page"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)` }}
        >
            <Navbar useDarkLogo={true} />

            <div className="nc-hero">
                <h1 className="nc-hero-title">Niyaaz Calendar 1448H</h1>
            </div>

            <div className="nc-content">
                <div className="nc-grid">
                    {groups.map((group) => (
                        <GroupCard
                            key={group.id}
                            group={group}
                            isFlipped={flippedCard === group.id}
                            onFlip={() => handleFlip(group.id)}
                            onInstructions={() => setShowInstructions(true)}
                        />
                    ))}
                    <ContributionsCard onInstructions={() => setShowInstructions(true)} />
                    <UTStudentsCard onInstructions={() => setShowInstructions(true)} />
                </div>
            </div>

            {showInstructions && (
                <InstructionsModal onClose={() => setShowInstructions(false)} />
            )}

            <Footer />
        </div>
    );
}
