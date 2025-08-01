import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MasjidSection.css';

const MasjidSection = () => {
    const masjidImages = [
        {
            id: 1,
            src: '/images/masjid-carousel-1.jpeg',
            alt: 'Anjuman-e-Burhani Markaz - Community gathering and activities'
        },
        {
            id: 2,
            src: '/images/masjid-carousel-2.jpeg',
            alt: 'Anjuman-e-Burhani Markaz - Prayer hall and religious ceremonies'
        },
        {
            id: 3,
            src: '/images/masjid-carousel-3.jpeg',
            alt: 'Anjuman-e-Burhani Markaz - Community events and gatherings'
        },
        {
            id: 4,
            src: '/images/masjid-carousel-4.jpeg',
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

                    <div className="read-more-container">
                        <a href="#" className="read-more-link">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasjidSection; 