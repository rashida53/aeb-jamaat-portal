import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import './MasjidSection.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const MasjidSection = () => {
    const navigate = useNavigate();
    const [masjidContent, setMasjidContent] = useState(null);
    const [masjidImages, setMasjidImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fallback images in case Contentful fails
    const fallbackImages = [
        {
            id: 1,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-1.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community gathering and activities'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-2.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Prayer hall and religious ceremonies'
        },
        {
            id: 3,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-3.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community events and gatherings'
        },
        {
            id: 4,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-4.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Religious ceremonies and celebrations'
        }
    ];


    useEffect(() => {
        const fetchMasjidContent = async () => {
            try {
                console.log('Fetching masjid content...');
                console.log('Contentful Space ID:', process.env.REACT_APP_CONTENTFUL_SPACE_ID);
                console.log('Contentful Access Token:', process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ? 'Present' : 'Missing');

                // Try different possible content type names
                const possibleContentTypes = ['masjidUpdate', 'masjid', 'masjidSection', 'masjidContent'];
                let response = null;
                let foundContentType = null;

                for (const contentType of possibleContentTypes) {
                    try {
                        console.log(`Trying content type: ${contentType}`);
                        response = await client.getEntries({
                            content_type: contentType,
                            limit: 1
                        });

                        if (response.items.length > 0) {
                            foundContentType = contentType;
                            console.log(`Found content with type: ${contentType}`);
                            break;
                        }
                    } catch (err) {
                        console.log(`Content type ${contentType} not found:`, err.message);
                    }
                }

                if (response && response.items.length > 0) {
                    const entry = response.items[0];
                    console.log('Entry fields:', entry.fields);
                    console.log('Available fields:', Object.keys(entry.fields));

                    setMasjidContent(entry.fields);

                    // Try different possible image field names
                    const possibleImageFields = ['masjidImages', 'images', 'gallery', 'carouselImages', 'masjidGallery'];
                    let imagesFound = false;

                    for (const fieldName of possibleImageFields) {
                        console.log(`MasjidSection - Checking field: ${fieldName}`);
                        if (entry.fields[fieldName]) {
                            console.log(`MasjidSection - Field ${fieldName} exists:`, entry.fields[fieldName]);
                            if (entry.fields[fieldName].length > 0) {
                                console.log(`MasjidSection - Found images in field: ${fieldName}`, entry.fields[fieldName]);
                                const images = entry.fields[fieldName].map((image, index) => ({
                                    id: index + 1,
                                    src: `https:${image.fields.file.url}`,
                                    alt: image.fields.title || `Masjid Image ${index + 1}`
                                }));
                                console.log('MasjidSection - Processed images:', images);
                                setMasjidImages(images);
                                imagesFound = true;
                                break;
                            } else {
                                console.log(`MasjidSection - Field ${fieldName} is empty`);
                            }
                        } else {
                            console.log(`MasjidSection - Field ${fieldName} does not exist`);
                        }
                    }

                    if (!imagesFound) {
                        console.log('No images found in any field, using fallback');
                        setMasjidImages(fallbackImages);
                    }
                } else {
                    console.log('No masjid entries found in any content type, using fallback');
                    setMasjidImages(fallbackImages);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching masjid content:', error);
                setMasjidImages(fallbackImages);
                setIsLoading(false);
            }
        };

        fetchMasjidContent();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const handleReadMore = () => {
        navigate('/masjid');
        window.scrollTo(0, 0);
    };

    if (isLoading) {
        return (
            <section id="masjid" className="masjid-section">
                <div className="masjid-content">
                    <h2 className="masjid-title">MASJID UPDATE</h2>
                    <div className="title-underline"></div>
                    <div className="loading">Loading...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="masjid" className="masjid-section">
            <div className="masjid-content">
                <h2 className="masjid-title">MASJID UPDATE</h2>
                <div className="title-underline"></div>

                <div className="masjid-carousel-container">
                    <Slider {...settings} className="masjid-carousel">
                        {masjidImages.map((image) => (
                            <div key={image.id} className="carousel-slide">
                                <div className="image-container">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="masjid-image"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="masjid-text-content">
                    {console.log('Rendering - masjidContent:', masjidContent)}
                    {console.log('Rendering - masjidImages:', masjidImages)}
                    {(() => {
                        if (!masjidContent) {
                            console.log('No masjidContent available');
                            return (
                                <div>
                                    {console.log('Using fallback content - no masjidContent')}
                                    <p>
                                        The ta'sees of Austin Masjid by Aqa Moula TUS on 21st Rajab ul Asab 1446 in Surat was a momentous occasion.
                                        The Janab Amilsaheb and Masjid committee wanted to share this milestone and project progress by visiting
                                        Austin mumineen homes, conducting zameen site visits, and pursuing financial targets to make this dream a reality.
                                    </p>

                                    <p>
                                        The response from Mumineen has been overwhelmingly positive and welcoming. Families have discussed the project
                                        in their homes and at the masjid zameen, showing huge amount of support in terms of new commitments,
                                        payment plans, additional takhmeen, and more. This collective effort demonstrates the unity and dedication
                                        of our community.
                                    </p>

                                    <p>
                                        Moving forward, we plan to schedule home and masjid zameen visits after Shehrullah to achieve 100%
                                        participation from Austin jamaat. The masjid committee and fundraising team will share updates,
                                        personal stories, and next steps during a presentation at the beginning of Shehrullah,
                                        keeping everyone informed and engaged in this important project.
                                    </p>
                                </div>
                            );
                        }

                        // Try different possible text field names
                        const possibleTextFields = ['masjidUpdateText', 'masjidUpdate', 'masjidText', 'content', 'description', 'text', 'body', 'masjidContent'];
                        let textContent = null;
                        let foundField = null;

                        for (const fieldName of possibleTextFields) {
                            if (masjidContent[fieldName]) {
                                textContent = masjidContent[fieldName];
                                foundField = fieldName;
                                console.log(`Found text content in field: ${fieldName}`);
                                break;
                            }
                        }

                        if (textContent) {
                            return (
                                <div>
                                    {console.log('Using Contentful content from field:', foundField, textContent)}
                                    {typeof textContent === 'string' ? (
                                        <div>
                                            {textContent.split('\n\n').map((paragraph, index) => (
                                                paragraph.trim() && (
                                                    <p key={index}>
                                                        {paragraph.trim()}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    ) : textContent.nodeType === 'document' ? (
                                        documentToReactComponents(textContent)
                                    ) : (
                                        <div>
                                            {textContent.split('\n\n').map((paragraph, index) => (
                                                paragraph.trim() && (
                                                    <p key={index}>
                                                        {paragraph.trim()}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        } else {
                            console.log('No text content found in any field, using fallback');
                            return (
                                <div>
                                    <p>
                                        The ta'sees of Austin Masjid by Aqa Moula TUS on 21st Rajab ul Asab 1446 in Surat was a momentous occasion.
                                        The Janab Amilsaheb and Masjid committee wanted to share this milestone and project progress by visiting
                                        Austin mumineen homes, conducting zameen site visits, and pursuing financial targets to make this dream a reality.
                                    </p>

                                    <p>
                                        The response from Mumineen has been overwhelmingly positive and welcoming. Families have discussed the project
                                        in their homes and at the masjid zameen, showing huge amount of support in terms of new commitments,
                                        payment plans, additional takhmeen, and more. This collective effort demonstrates the unity and dedication
                                        of our community.
                                    </p>

                                    <p>
                                        Moving forward, we plan to schedule home and masjid zameen visits after Shehrullah to achieve 100%
                                        participation from Austin jamaat. The masjid committee and fundraising team will share updates,
                                        personal stories, and next steps during a presentation at the beginning of Shehrullah,
                                        keeping everyone informed and engaged in this important project.
                                    </p>
                                </div>
                            );
                        }
                    })()}

                    <div className="read-more-container">
                        <button onClick={handleReadMore} className="read-more-link">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasjidSection; 