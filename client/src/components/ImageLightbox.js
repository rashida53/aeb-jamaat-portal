import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './ImageLightbox.css';

const ImageLightbox = ({
    image,
    currentIndex,
    totalImages,
    onClose,
    onPrevious,
    onNext
}) => {

    useEffect(() => {
        // Handle keyboard navigation
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    if (currentIndex > 0) {
                        onPrevious();
                    }
                    break;
                case 'ArrowRight':
                    if (currentIndex < totalImages - 1) {
                        onNext();
                    }
                    break;
                default:
                    break;
            }
        };

        // Add event listener
        document.addEventListener('keydown', handleKeyDown);

        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [currentIndex, totalImages, onClose, onPrevious, onNext]);

    const handleBackdropClick = (event) => {
        // Close lightbox if clicking on backdrop
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="lightbox-backdrop" onClick={handleBackdropClick}>
            <div className="lightbox-container">
                {/* Close button */}
                <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                    <FaTimes />
                </button>

                {/* Previous button */}
                {currentIndex > 0 && (
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={onPrevious}
                        aria-label="Previous image"
                    >
                        <FaChevronLeft />
                    </button>
                )}

                {/* Next button */}
                {currentIndex < totalImages - 1 && (
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={onNext}
                        aria-label="Next image"
                    >
                        <FaChevronRight />
                    </button>
                )}

                {/* Image */}
                <div className="lightbox-image-container">
                    <img
                        src={image.url}
                        alt={image.alt}
                        className="lightbox-image"
                    />
                </div>

                {/* Image counter */}
                {totalImages > 1 && (
                    <div className="lightbox-counter">
                        {currentIndex + 1} / {totalImages}
                    </div>
                )}

                {/* Image caption */}
                {image.alt && (
                    <div className="lightbox-caption">
                        {image.alt}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageLightbox;
