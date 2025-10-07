import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import MilestoneModal from './MilestoneModal';
import './TimelineSection.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const TimelineSection = () => {
    const [milestones, setMilestones] = useState([]);
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries({
            content_type: 'milestone',
            order: '-fields.date'  // Assuming you want newest first
        })
            .then((response) => {
                console.log('Raw content from Contentful:', response);
                const formattedMilestones = response.items.map(item => {
                    const date = new Date(item.fields.date);
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const formattedDate = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

                    return {
                        date: formattedDate,
                        heading: item.fields.title,
                        content: item.fields.description,
                        detailedContent: item.fields.content?.content?.[0]?.content?.[0]?.value || item.fields.description || '',
                        image: item.fields.image?.fields?.file?.url || '',
                        isHighlighted: false
                    };
                });
                setMilestones(formattedMilestones);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching milestones:', error);
                setLoading(false);
            });
    }, []);

    const handleMilestoneClick = (milestone) => {
        setSelectedMilestone(milestone);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMilestone(null);
    };

    return (
        <section className="timeline-section">
            <div className="timeline-container">
                <h2 className="timeline-title">MILESTONES ON THE PATH TO OUR MASJID</h2>

                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-node">
                                    <div className="node-circle"></div>
                                    <div className="node-connector"></div>
                                </div>

                                <div className="timeline-content">
                                    <div
                                        className="content-box"
                                        onClick={() => handleMilestoneClick(milestone)}
                                        style={{ cursor: 'pointer' }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleMilestoneClick(milestone);
                                            }
                                        }}
                                    >
                                        <h3 className="milestone-heading">{milestone.heading}</h3>
                                        <p className="milestone-content">{milestone.content}</p>
                                    </div>
                                </div>

                                <div className="milestone-date">{milestone.date}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <MilestoneModal
                milestone={selectedMilestone}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default TimelineSection;