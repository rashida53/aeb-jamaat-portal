import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import ImageLightbox from './ImageLightbox';
import './Gallery.css';
import Navbar from './Navbar';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [activeSubCategory, setActiveSubCategory] = useState('');
    const [openAccordion, setOpenAccordion] = useState(''); // For mobile accordion
    const [expandedCategories, setExpandedCategories] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [galleryData, setGalleryData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [allImages, setAllImages] = useState([]);

    // Dummy data structure - will be replaced with Contentful integration
    const dummyData = [
        {
            id: 'community-events',
            name: 'Community Events',
            subCategories: [
                {
                    id: 'religious-celebrations',
                    name: 'Religious Celebrations',
                    images: [
                        { id: 'img1', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Religious celebration event' },
                        { id: 'img2', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Community prayer gathering' },
                        { id: 'img3', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Religious ceremony' }
                    ]
                },
                {
                    id: 'social-gatherings',
                    name: 'Social Gatherings',
                    images: [
                        { id: 'img4', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Community dinner' },
                        { id: 'img5', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/PickleballTournament.jpg`, alt: 'BBQ event' },
                        { id: 'img6', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/DonationDrive.jpg`, alt: 'Community picnic' }
                    ]
                }
            ],
            images: []
        },
        {
            id: 'masjid-construction',
            name: 'Masjid Construction',
            subCategories: [
                {
                    id: 'construction-progress',
                    name: 'Construction Progress',
                    images: [
                        { id: 'img7', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Construction progress' },
                        { id: 'img8', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Building foundation' },
                        { id: 'img9', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/DonationDrive.jpg`, alt: 'Construction site' }
                    ]
                },
                {
                    id: 'architectural-details',
                    name: 'Architectural Details',
                    images: [
                        { id: 'img10', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Dome construction' },
                        { id: 'img11', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Minaret details' },
                        { id: 'img12', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/PickleballTournament.jpg`, alt: 'Interior design' }
                    ]
                }
            ],
            images: []
        },
        {
            id: 'educational-programs',
            name: 'Educational Programs',
            subCategories: [
                {
                    id: 'madrasah',
                    name: 'Madrasah',
                    images: [
                        { id: 'img13', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/Madrasah-SummerCamp.png`, alt: 'Students in class' },
                        { id: 'img14', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Quran recitation' },
                        { id: 'img15', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/DonationDrive.jpg`, alt: 'Islamic studies' }
                    ]
                },
                {
                    id: 'adult-education',
                    name: 'Adult Education',
                    images: [
                        { id: 'img16', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Adult class' },
                        { id: 'img17', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Discussion group' },
                        { id: 'img18', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/DonationDrive.jpg`, alt: 'Study session' }
                    ]
                }
            ],
            images: []
        },
        {
            id: 'sports-activities',
            name: 'Sports Activities',
            subCategories: [],
            images: [
                { id: 'img19', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BbqDinner.jpg`, alt: 'Cricket match' },
                { id: 'img20', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/BunayyatWalk.jpg`, alt: 'Football game' },
                { id: 'img21', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/DonationDrive.jpg`, alt: 'Basketball tournament' },
                { id: 'img22', url: `${process.env.PUBLIC_URL}/images/JamaatHighlightsImgs/PickleballTournament.jpg`, alt: 'Badminton match' }
            ]
        }
    ];

    useEffect(() => {
        // TODO: Replace with Contentful integration
        // const fetchGalleryContent = async () => {
        //     try {
        //         const response = await client.getEntries({
        //             content_type: 'gallery'
        //         });
        //         // Process Contentful data here
        //     } catch (error) {
        //         console.error('Error fetching gallery content:', error);
        //     }
        // };

        // Simulate loading delay
        setTimeout(() => {
            setGalleryData(dummyData);
            // Set initial active category
            if (dummyData.length > 0) {
                setActiveCategory(dummyData[0].id);
                setOpenAccordion(dummyData[0].id);
            }
            setIsLoading(false);
        }, 500);
    }, []);

    // Effect to match content area height to side menu height
    useEffect(() => {
        const matchHeights = () => {
            const sideMenu = document.querySelector('.gallery-side-menu');
            const contentArea = document.querySelector('.gallery-content-area');

            if (sideMenu && contentArea) {
                setTimeout(() => {
                    const sideMenuHeight = sideMenu.offsetHeight;
                    // contentArea.style.height = `${sideMenuHeight}px`;
                    // contentArea.style.maxHeight = `${sideMenuHeight}px`;
                    // contentArea.style.overflowY = 'auto';
                }, 100);
            }
        };

        if (!isLoading) {
            matchHeights();
        }

        window.addEventListener('resize', matchHeights);
        return () => {
            window.removeEventListener('resize', matchHeights);
        };
    }, [activeCategory, activeSubCategory, galleryData, isLoading]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        setActiveSubCategory(''); // Reset sub-category when switching categories

        // Toggle expanded state
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(categoryId)) {
            newExpanded.delete(categoryId);
        } else {
            newExpanded.add(categoryId);
        }
        setExpandedCategories(newExpanded);
    };

    const handleSubCategoryClick = (categoryId, subCategoryId) => {
        setActiveCategory(categoryId);
        setActiveSubCategory(subCategoryId);
    };

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);

        // Collect all images from current view for navigation
        const currentCategory = galleryData.find(cat => cat.id === activeCategory);
        let allCurrentImages = [];

        if (activeSubCategory && currentCategory) {
            const subCategory = currentCategory.subCategories.find(sub => sub.id === activeSubCategory);
            if (subCategory) {
                allCurrentImages = subCategory.images;
            }
        } else if (currentCategory) {
            if (currentCategory.subCategories.length > 0) {
                // If category has sub-categories but none selected, show all sub-category images
                allCurrentImages = currentCategory.subCategories.flatMap(sub => sub.images);
            } else {
                allCurrentImages = currentCategory.images;
            }
        }

        setAllImages(allCurrentImages);
    };

    const handleLightboxClose = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
        setAllImages([]);
    };

    const handlePreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
            setSelectedImage(allImages[currentImageIndex - 1]);
        }
    };

    const handleNextImage = () => {
        if (currentImageIndex < allImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            setSelectedImage(allImages[currentImageIndex + 1]);
        }
    };

    const handleAccordionToggle = (categoryId) => {
        setOpenAccordion(openAccordion === categoryId ? null : categoryId);
        setActiveCategory(categoryId);
        setActiveSubCategory('');
    };

    const getCurrentImages = () => {
        const currentCategory = galleryData.find(cat => cat.id === activeCategory);
        if (!currentCategory) return [];

        if (activeSubCategory) {
            const subCategory = currentCategory.subCategories.find(sub => sub.id === activeSubCategory);
            return subCategory ? subCategory.images : [];
        }

        if (currentCategory.subCategories.length > 0) {
            // If category has sub-categories but none selected, show all sub-category images
            return currentCategory.subCategories.flatMap(sub => sub.images);
        }

        return currentCategory.images;
    };

    if (isLoading) {
        return <div className="loading">Loading Gallery...</div>;
    }

    const currentImages = getCurrentImages();

    return (
        <section
            id="gallery"
            className="gallery-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <Navbar useDarkLogo={true} />
            <h2 className="gallery-title">
                GALLERY
            </h2>

            {/* Desktop Layout */}
            <div className="gallery-desktop-layout">
                {/* Side Menu */}
                <div className="gallery-side-menu">
                    {galleryData.map((category) => (
                        <div key={category.id} className="category-group">
                            <button
                                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <span className="category-name">{category.name}</span>
                                {category.subCategories.length > 0 && (
                                    <span className="expand-icon">
                                        {expandedCategories.has(category.id) ?
                                            <RiArrowDropUpLine size={20} /> :
                                            <RiArrowDropDownLine size={20} />
                                        }
                                    </span>
                                )}
                            </button>

                            {/* Sub-categories */}
                            {expandedCategories.has(category.id) && category.subCategories.map((subCategory) => (
                                <button
                                    key={subCategory.id}
                                    className={`sub-category-item ${activeSubCategory === subCategory.id ? 'active' : ''}`}
                                    onClick={() => handleSubCategoryClick(category.id, subCategory.id)}
                                >
                                    {subCategory.name}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="gallery-content-area">
                    <div className="gallery-grid">
                        {currentImages.map((image, index) => (
                            <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image, index)}>
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                </div>
                            </div>
                        ))}
                    </div>

                    {currentImages.length === 0 && (
                        <div className="no-images">
                            <p>No images available in this category.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Accordion */}
            <div className="gallery-accordion mobile-nav">
                {galleryData.map((category) => (
                    <div key={category.id} className="accordion-item">
                        <button
                            className={`accordion-header ${openAccordion === category.id ? 'active' : ''}`}
                            onClick={() => handleAccordionToggle(category.id)}
                        >
                            <div className="gallery-nav-label">
                                <span>{category.name}</span>
                            </div>
                            <span className="accordion-icon">
                                {openAccordion === category.id ?
                                    <RiArrowDropUpLine color="#ffffff" size={28} /> :
                                    <RiArrowDropDownLine color="#00203D" size={28} />
                                }
                            </span>
                        </button>
                        {openAccordion === category.id && (
                            <div className="accordion-content">
                                {/* Sub-categories dropdown for mobile */}
                                {category.subCategories.length > 0 && (
                                    <div className="mobile-subcategory-dropdown">
                                        <select
                                            className="mobile-subcategory-select"
                                            value={activeSubCategory}
                                            onChange={(e) => handleSubCategoryClick(category.id, e.target.value)}
                                        >
                                            <option value="">All {category.name}</option>
                                            {category.subCategories.map((subCategory) => (
                                                <option key={subCategory.id} value={subCategory.id}>
                                                    {subCategory.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {/* Images grid for mobile */}
                                <div className="gallery-grid mobile">
                                    {getCurrentImages().map((image, index) => (
                                        <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image, index)}>
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                loading="lazy"
                                            />
                                            <div className="image-overlay">
                                                <span className="view-icon">🔍</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <ImageLightbox
                    image={selectedImage}
                    currentIndex={currentImageIndex}
                    totalImages={allImages.length}
                    onClose={handleLightboxClose}
                    onPrevious={handlePreviousImage}
                    onNext={handleNextImage}
                />
            )}
        </section>
    );
};

export default Gallery;