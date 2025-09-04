import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MasjidGallery.css';

const MasjidGallery = () => {
    const masjidImages = [
        {
            id: 1,
            src: `${process.env.PUBLIC_URL}/images/masjid-carousel-1.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community gathering and activities'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/images/masjid-carousel-2.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Prayer hall and religious ceremonies'
        },
        {
            id: 3,
            src: `${process.env.PUBLIC_URL}/images/masjid-carousel-3.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Community events and gatherings'
        },
        {
            id: 4,
            src: `${process.env.PUBLIC_URL}/images/masjid-carousel-4.jpeg`,
            alt: 'Anjuman-e-Burhani Markaz - Religious ceremonies and celebrations'
        }
    ];

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
