import React from 'react';
import './MilestoneModal.css';

const MilestoneModal = ({ milestone, isOpen, onClose }) => {
    if (!isOpen || !milestone) return null;

    return (
        <div className="milestone-modal-overlay" onClick={onClose}>
            <div className="milestone-modal" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className="modal-title-section">
                    <div className="title-date-row">
                        <h2 className="modal-title">{milestone.heading}</h2>
                        <div className="title-separator-vertical"></div>
                        <p className="modal-date">{milestone.date}</p>
                    </div>
                </div>

                <div className="modal-content">
                    {milestone.image && (
                        <div className="modal-image-container">
                            <img
                                src={milestone.image}
                                alt={milestone.heading}
                                className="modal-image"
                            />
                        </div>
                    )}

                    <div className="modal-text-content">
                        <p className="modal-description">{milestone.detailedContent || milestone.content}</p>
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="footer-line-circle">
                        <div className="footer-line left-line"></div>
                        <div className="footer-circle"></div>
                        <div className="footer-line right-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneModal; 