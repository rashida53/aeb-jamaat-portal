import React from 'react';
import './MilestoneModal.css';

const MilestoneModal = ({ milestone, isOpen, onClose }) => {
    if (!isOpen || !milestone) return null;

    return (
        <div className="milestone-modal-overlay" onClick={onClose}>
            <div className="milestone-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>

                {/* Title and Date */}
                <div className="modal-title-section">
                    <div className="title-date-row">
                        <h2 className="modal-title">{milestone.heading}</h2>
                        <div className="title-separator-vertical"></div>
                        <p className="modal-date">{milestone.date}</p>
                    </div>
                    {/* <div className="title-separator"></div> */}
                </div>

                {/* Content */}
                <div className="modal-content">
                    {/* Images Section */}
                    {milestone.images && milestone.images.length > 0 && (
                        <div className="modal-images">
                            {milestone.images.map((image, index) => (
                                <div key={index} className="modal-image-container">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="modal-image"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Detailed Content */}
                    <div className="modal-text-content">
                        <p className="modal-description">{milestone.detailedContent || milestone.content}</p>
                    </div>
                </div>

                {/* Footer Decoration */}
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