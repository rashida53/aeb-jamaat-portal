import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "M Murtaza Hirani",
            role: "Umoor Amlaak Coordinator",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        },
        {
            name: "M Murtaza Choilawala",
            role: "Jamaat Member",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        },
        {
            name: "M Murtaza Kutianawala",
            role: "Jamaat Member",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        },
        {
            name: "Shk Murtaza Rawat",
            role: "Jamaat Secretary",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        },
        {
            name: "M Taaha Bhora",
            role: "Jamaat Treasurer",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        },
        {
            name: "Dr M Hussain Malbari",
            role: "Umoor Sehat Coordinator",
            profession: "Senior Software Engineer",
            image: `${process.env.PUBLIC_URL}/images/HamzaProfilePic.jpg`
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <h2 className="team-section-title">MEET THE TEAM</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <div className="member-image-container">
                                <img src={member.image} alt={member.name} className="member-image" />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-profession">{member.profession}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
