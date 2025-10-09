import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './TeamPage.css';

const TeamPage = () => {
    const teamStructure = [
        {
            members: [
                {
                    name: "Shk Saifuddin bhai Zakir",
                    role: "Janab Aamil Saheb",
                    profession: "",
                    customImage: null,
                    initials: "SZ"
                }
            ]
        },
        {
            members: [
                {
                    name: "Khuzema bhaisaheb Zakavi",
                    role: "Wali Mulla Saheb",
                    profession: "",
                    customImage: null,
                    initials: "KZ"
                },
                {
                    name: "M. Huzefa bhai Hotelwala",
                    role: "Head Moallim Saheb",
                    profession: "",
                    customImage: null,
                    initials: "HH"
                }
            ]
        },
        {
            title: "Board of Directors",
            members: [
                {
                    name: "Shk. Murtaza bhai Rawat",
                    role: "Secretary",
                    profession: "Principal at Gallagher",
                    customImage: null,
                    initials: "MR"
                },
                {
                    name: "M. Taaha bhai Bhora",
                    role: "Treasurer",
                    profession: "Product Consultant at Dell Technologies",
                    customImage: null,
                    initials: "TB"
                },
                {
                    name: "Shk. Mufaddal bhai Amijee",
                    role: "Umoor Deeniyah",
                    profession: "",
                    customImage: null,
                    initials: "MA"
                },
                {
                    name: "M. Murtaza bhai Hirani",
                    role: "Umoor Amlaak",
                    profession: "Director at Dell Technologies",
                    customImage: null,
                    initials: "FH"
                },
                {
                    name: "Dr. M. Hussain bhai Malbari",
                    role: "Umoor Sehat",
                    profession: "Internal Medidcine at St. David's",
                    customImage: null,
                    initials: "HM"
                }
            ]
        },
        {
            title: "Advisory Council",
            members: [
                {
                    name: "M. Murtaza bhai Choilawala",
                    role: "Umoor Amlaak",
                    profession: "President at TeamLogicIT",
                    customImage: null,
                    initials: "MC"
                },
                {
                    name: "Shk. Hakimuddin bhai Dhilla",
                    role: "Umoor Qaza",
                    profession: "Founder at Coriolis",
                    customImage: null,
                    initials: "HD"
                },
                {
                    name: "M. Murtaza bhai Kutianawala",
                    role: "Umoor Maaliyah",
                    profession: "Senior Analyst at Equinor",
                    customImage: null,
                    initials: "MK"
                },
                {
                    name: "M. Mustafa bhai Shakir",
                    role: "Umoor Iqtesadiyah",
                    profession: "CEO at Senziam",
                    customImage: null,
                    initials: "MS"
                },
                {
                    name: "M. Hamza bhai Karachiwala",
                    role: "Umoor FMB",
                    profession: "Software Engineer at HubSpot",
                    customImage: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`,
                    initials: "HK"
                },
                {
                    name: "Ammar bhai Jamali",
                    role: "Umoor Kharejiyah",
                    profession: "CEO at e53",
                    customImage: null,
                    initials: "AJ"
                },
                {
                    name: "M. Murtaza bhai Malbari",
                    role: "Umoor Taalimiyah",
                    profession: "Director at Dell Medical School",
                    customImage: null,
                    initials: "MM"
                },
                {
                    name: "M. Aliakbar bhai Amijee",
                    role: "Umoor Dakheliyah",
                    profession: "Product at Apple",
                    customImage: null,
                    initials: "AA"
                }
            ]
        }
    ];

    return (
        <div className="team-page">
            <Navbar useDarkLogo={true} />
            <div className="team-page-content" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`
            }}>
                <div className="container">
                    <h1 className="team-page-title">OUR LEADERSHIP</h1>
                    {teamStructure.map((section, index) => (
                        <div key={index} className={`team-section-container ${section.members.length === 1 ? 'single-member' : ''}`}>
                            <h2 className="team-section-heading">{section.title}</h2>
                            <div className="team-grid">
                                {section.members.map((member, memberIndex) => (
                                    <div key={memberIndex} className="team-member-card">
                                        <div className="member-image-container">
                                            <img
                                                src={member.customImage || `https://ui-avatars.com/api/?name=${member.initials}&background=D3D3D3&color=fff&size=200`}
                                                alt={member.name}
                                                className="member-image"
                                            />
                                        </div>
                                        <div className="member-info">
                                            <h3 className="member-name">{member.name}</h3>
                                            <p className="member-role">{member.role}</p>
                                            {member.profession && (
                                                <p className="member-profession">{member.profession}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TeamPage;