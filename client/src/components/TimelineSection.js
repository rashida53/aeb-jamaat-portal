import React from 'react';
import './TimelineSection.css';

const TimelineSection = ({ milestones = [] }) => {
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
                                <div className={`content-box ${milestone.isHighlighted ? 'highlighted' : ''}`}>
                                    <h3 className="milestone-heading">{milestone.heading}</h3>
                                    <p className="milestone-content">{milestone.content}</p>
                                </div>
                            </div>

                            <div className="milestone-date">{milestone.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection; 