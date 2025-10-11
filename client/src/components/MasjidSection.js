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
    const [mediaContent, setMediaContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fallback content in case Contentful fails
    const fallbackContent = [
        {
            id: 1,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-1.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community gathering and activities',
            type: 'image'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-2.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Prayer hall and religious ceremonies',
            type: 'image'
        },
        {
            id: 3,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-3.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community events and gatherings',
            type: 'image'
        },
        {
            id: 4,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-4.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Religious ceremonies and celebrations',
            type: 'image'
        }
    ];

    useEffect(() => {
        const fetchMasjidContent = async () => {
            try {
                console.log('Fetching masjid content...');

                const response = await client.getEntries({
                    content_type: 'masjidUpdate',
                    include: 2
                });

                console.log('Contentful response:', response);

                if (response.items.length > 0) {
                    const entry = response.items[0];
                    console.log('Entry fields:', entry.fields);

                    setMasjidContent(entry.fields);

                    if (entry.fields.masjidImages && entry.fields.masjidImages.length > 0) {
                        console.log('Found media items:', entry.fields.masjidImages);

                        const content = entry.fields.masjidImages.map((item, index) => {
                            const fileUrl = item.fields.file.url;
                            const fileType = item.fields.file.contentType;

                            // Check if it's a video or image based on content type
                            const isVideo = fileType.startsWith('video/');

                            return {
                                id: `media-${index}`,
                                src: `https:${fileUrl}`,
                                alt: item.fields.title || item.fields.description || `Masjid Gallery Item ${index + 1}`,
                                type: isVideo ? 'video' : 'image'
                            };
                        });

                        console.log('Processed media content:', content);

                        // Sort to ensure video appears first if it exists
                        const sortedContent = [
                            ...content.filter(item => item.type === 'video'),
                            ...content.filter(item => item.type === 'image')
                        ];

                        setMediaContent(sortedContent);
                    } else {
                        console.log('No media items found, using fallback content');
                        setMediaContent(fallbackContent);
                    }
                } else {
                    console.log('No masjid update entry found, using fallback content');
                    setMediaContent(fallbackContent);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching masjid content:', error);
                setMediaContent(fallbackContent);
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
                        {mediaContent.map((item) => (
                            <div key={item.id} className="carousel-slide">
                                <div className="image-container">
                                    {item.type === 'video' ? (
                                        <video
                                            className="masjid-video"
                                            controls
                                            playsInline
                                            src={item.src}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="masjid-image"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="masjid-text-content">
                    {(() => {
                        if (!masjidContent) {
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

                        const textContent = masjidContent.masjidUpdateText;
                        if (textContent) {
                            return (
                                <div>
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
                        }

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