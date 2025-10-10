import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createClient } from 'contentful';
import './MasjidGallery.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const MasjidGallery = () => {
    const [galleryContent, setGalleryContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fallback images in case Contentful fails
    const fallbackImages = [
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
        },
        {
            id: 5,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-5.jpg`,
            alt: 'Anjuman-e-Burhani Markaz - Community development and progress',
            type: 'image'
        }
    ];

    useEffect(() => {
        const fetchContent = async () => {
            try {
                console.log('Fetching content from Contentful...');

                const response = await client.getEntries({
                    content_type: 'masjidUpdate',
                    include: 2
                });

                console.log('Contentful response:', response);

                if (response.items.length > 0) {
                    const entry = response.items[0];
                    console.log('Masjid update entry:', entry);

                    if (entry.fields.masjidImages && entry.fields.masjidImages.length > 0) {
                        console.log('Found media items:', entry.fields.masjidImages);

                        const mediaContent = entry.fields.masjidImages.map((item, index) => {
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

                        console.log('Processed media content:', mediaContent);

                        // Sort to ensure video appears first if it exists
                        const sortedContent = [
                            ...mediaContent.filter(item => item.type === 'video'),
                            ...mediaContent.filter(item => item.type === 'image')
                        ];

                        setGalleryContent(sortedContent);
                    } else {
                        console.log('No media items found, using fallback images');
                        setGalleryContent(fallbackImages);
                    }
                } else {
                    console.log('No masjid update entry found, using fallback images');
                    setGalleryContent(fallbackImages);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching content:', error);
                setGalleryContent(fallbackImages);
                setIsLoading(false);
            }
        };

        fetchContent();
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

    if (isLoading) {
        return (
            <section className="building-progress-section">
                <div className="container">
                    <h2 className="gallery-section-title">BUILDING TOGETHER: A COMMUNITY EFFORT</h2>
                    <div className="loading">Loading gallery...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="building-progress-section">
            <div className="container">
                <h2 className="gallery-section-title">BUILDING TOGETHER: A COMMUNITY EFFORT</h2>

                <div className="carousel-container">
                    <Slider {...settings} className="progress-carousel">
                        {galleryContent.map((item) => (
                            <div key={item.id} className="carousel-slide">
                                <div className="gallery-image-container">
                                    {item.type === 'video' ? (
                                        <video
                                            className="carousel-video"
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
                                            className="carousel-image"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default MasjidGallery;