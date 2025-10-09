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
        },
        {
            id: 5,
            src: `${process.env.PUBLIC_URL}/images/MasjidCarousalFallbackImgs/masjid-carousel-5.jpg`,
            alt: 'Anjuman-e-Burhani Markaz - Community development and progress'
        }
    ];

    useEffect(() => {
        const fetchMasjidImages = async () => {
            try {
                console.log('Fetching masjid gallery images from Contentful...');

                const response = await client.getEntries({
                    content_type: 'masjidUpdate',
                    limit: 1
                });

                if (response.items.length > 0) {
                    const entry = response.items[0];
                    console.log('MasjidGallery - Entry fields:', entry.fields);

                    // Extract images from the masjidImages field
                    if (entry.fields.masjidImages && entry.fields.masjidImages.length > 0) {
                        console.log('MasjidGallery - Found masjidImages:', entry.fields.masjidImages);
                        const images = entry.fields.masjidImages.map((image, index) => ({
                            id: index + 1,
                            src: `https:${image.fields.file.url}`,
                            alt: image.fields.title || image.fields.description || `Masjid Gallery Image ${index + 1}`
                        }));
                        console.log('MasjidGallery - Processed images:', images);
                        setMasjidImages(images);
                    } else {
                        console.log('MasjidGallery - No masjidImages found, using fallback');
                        setMasjidImages(fallbackImages);
                    }
                } else {
                    console.log('MasjidGallery - No masjidUpdate entries found, using fallback');
                    setMasjidImages(fallbackImages);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('MasjidGallery - Error fetching images:', error);
                setMasjidImages(fallbackImages);
                setIsLoading(false);
            }
        };

        fetchMasjidImages();
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
                        {masjidImages.map((image) => (
                            <div key={image.id} className="carousel-slide">
                                <div className="gallery-image-container">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="carousel-image"
                                    />
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
