import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import './TeamSection.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const TeamSection = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fallback members in case Contentful fails
    const fallbackMembers = [
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
            customImage: `${process.env.PUBLIC_URL}/images/TeamProfileImgs/MurtazaKutianawala.jpeg`,
            initials: "MK"
        },
        {
            name: "Shk Murtaza bhai Rawat",
            contactNumber: "+18325268734",
            customImage: `${process.env.PUBLIC_URL}/images/TeamProfileImgs/MurtazaRawatProfilePic.jpg`,
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
            customImage: `${process.env.PUBLIC_URL}/images/TeamProfileImgs/HussainMalbariProfilePic.jpg`,
            initials: "HM"
        }
    ];

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                console.log('Fetching team members from Contentful...');

                const response = await client.getEntries({
                    content_type: 'masjidCommittee',
                    include: 2
                });

                console.log('Contentful response:', response);

                if (response.items.length > 0) {
                    const members = response.items.map(item => {
                        const fields = item.fields;
                        return {
                            name: fields.name || '',
                            contactNumber: fields.contactNumber || '',
                            customImage: fields.memberImage?.fields?.file?.url
                                ? `https:${fields.memberImage.fields.file.url}`
                                : null,
                            initials: fields.initials || ''
                        };
                    });

                    console.log('Processed team members:', members);
                    setTeamMembers(members);
                } else {
                    console.log('No team members found, using fallback data');
                    setTeamMembers(fallbackMembers);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching team members:', error);
                setTeamMembers(fallbackMembers);
                setIsLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    if (isLoading) {
        return (
            <section className="team-section">
                <div className="container">
                    <h2 className="team-section-title">CORE TEAM</h2>
                    <div className="loading">Loading team members...</div>
                </div>
            </section>
        );
    }

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