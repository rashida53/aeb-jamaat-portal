import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "M Murtaza bhai Hirani",
            contactNumber: "+15124135284",
            customImage: null,
            initials: "MH"
        },
        {
            name: "M Murtaza bhai Choilawala",
            contactNumber: "+15122178870",
            customImage: null,
            initials: "MC"
        },
        {
            name: "M Murtaza bhai Kutianawala",
            contactNumber: "+15126585643",
            customImage: null,
            initials: "MK"
        },
        {
            name: "Shk Murtaza bhai Rawat",
            contactNumber: "+18325268734",
            customImage: null,
            initials: "MR"
        },
        {
            name: "M Taaha bhai Bhora",
            contactNumber: "+16823653910",
            customImage: null,
            initials: "TB"
        },
        {
            name: "Dr M Hussain bhai Malbari",
            contactNumber: "+15126967268",
            customImage: null,
            initials: "HM"
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <h2 className="team-section-title">CORE TEAM</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <div className="member-image-container">
                                <img
                                    src={member.customImage || `https://ui-avatars.com/api/?name=${member.initials}&background=D3D3D3&color=fff&size=200`}
                                    alt={member.name}
                                    className="member-image"
                                />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <a href={`tel:${member.contactNumber}`} className="contact-link member-contact-number">{member.contactNumber}</a><br></br>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;