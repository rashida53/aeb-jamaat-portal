import React, { useState } from 'react';
import MilestoneModal from './MilestoneModal';
import './TimelineSection.css';

const TimelineSection = ({ milestones = [] }) => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-node">
                                <div className="node-circle"></div>
                                <div className="node-connector"></div>
                            </div>

                            <div className="timeline-content">
                                <div
                                    className={`content-box ${milestone.isHighlighted ? 'highlighted' : ''}`}
                                    onClick={() => handleMilestoneClick(milestone)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h3 className="milestone-heading">{milestone.heading}</h3>
                                    <p className="milestone-content">{milestone.content}</p>
                                </div>
                            </div>

                            <div className="milestone-date">{milestone.date}</div>
                        </div>
                    ))}
                </div>
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