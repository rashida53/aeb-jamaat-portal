import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './TeamPage.css';

const TeamPage = () => {
    const teamStructure = [
        {
            // title: "Aamil saheb",
            members: [
                {
                    name: "Shk Saifuddin Zakir",
                    role: "Aamil saheb",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                }
            ]
        },
        {
            // title: "Wali Mulla & Head Moallim",
            members: [
                {
                    name: "Khuzema Bhaisaheb Zakavi",
                    role: "Wali Mulla",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "Janab M. Huzefa bhai Hotelwala",
                    role: "Head Moallim",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                }
            ]
        },
        {
            title: "Board of Directors",
            members: [
                {
                    name: "Shk. Mufaddal bhai Amijee",
                    role: "Board Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "M. Faiyaz bhai Hirani",
                    role: "Board Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "Shk. Murtaza bhai Rawat",
                    role: "Board Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "M. Taaha bhai Bhora",
                    role: "Board Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "Dr. M. Hussain bhai Malbari",
                    role: "Board Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                }
            ]
        },
        {
            title: "Jamaat Advisory Council",
            members: [
                {
                    name: "M. Murtaza bhai Choilawala",
                    role: "Council Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "M. Murtaza bhai Kutianawala",
                    role: "Council Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "M. Mustafa bhai Shakir",
                    role: "Council Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "M. Hamza bhai Karachiwala",
                    role: "Council Member",
                    profession: "Senior Software Engineer",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
                },
                {
                    name: "Ammar bhai Jamali",
                    role: "Council Member",
                    profession: "",
                    image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
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
                    <h1 className="team-page-title">CORE TEAM</h1>
                    {teamStructure.map((section, index) => (
                        <div key={index} className={`team-section-container ${section.members.length === 1 ? 'single-member' : ''}`}>
                            <h2 className="team-section-heading">{section.title}</h2>
                            <div className="team-grid">
                                {section.members.map((member, memberIndex) => (
                                    <div key={memberIndex} className="team-member-card">
                                        <div className="member-image-container">
                                            <img src={member.image} alt={member.name} className="member-image" />
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
