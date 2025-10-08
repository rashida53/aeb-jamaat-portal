import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Highlights.css';

const Highlights = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    speed: 100,
                    arrows: false,
                    fade: true
                }
            }
        ]
    };

    const highlights = [
        {
            image: `${process.env.PUBLIC_URL}/images/QuranHaflat.jpg`,
            title: 'Haflat ul Quran',
            description: 'Quran tilawat program conducted by Madrasah tul Badri on the auspicious occasion of Aqa Maula TUS milaad'
        },
        {
            image: `${process.env.PUBLIC_URL}/images/PickleballTournament.jpg`,
            title: 'Pickleball Tournament',
            description: 'Austin jamaat held a pickleball tournament that brought together players of all ages on the court for fun, fitness, and teamwork, upholding our reputation as the pickleball capital of the country'
        },
        {
            image: `${process.env.PUBLIC_URL}/images/BbqDinner.jpg`,
            title: 'Eid BBQ Dinner',
            description: 'A Shehrullah-must-have where AEB families gather to cook and celebrate Eid with delicious food, laughter, and community spirit.'
        },
        {
            image: `${process.env.PUBLIC_URL}/images/DonationDrive.jpg`,
            title: 'Donation Drive',
            description: 'Regular donation drives organized by Umoor Kharejiyah to collectively give back, supporting local and global causes through generosity and compassion.'
        },
        {
            image: `${process.env.PUBLIC_URL}/images/BusinessMeetup.jpg`,
            title: 'Business Meetups',
            description: 'Monthly seminars and meetups organized by Tijarat Rabea committee to help entrepreneurs thrive and provide support to our local community.'
        },
        {
            image: `${process.env.PUBLIC_URL}/images/Madrasah-SummerCamp.png`,
            title: 'Madrasah Summer Camp',
            description: 'A fun filled week with activities and play designed specially for our young and bright minds.'
        }
    ];

    return (
        <div className="highlights-container">
            <Slider {...settings}>
                {highlights.map((highlight, index) => (
                    <div key={index}>
                        <div className="highlight-card">
                            <div className="highlight-image">
                                <img src={highlight.image} alt={highlight.title} />
                            </div>
                            <div className="highlight-content">
                                <h3 className="highlight-title">{highlight.title}</h3>
                                <p className="highlight-description">{highlight.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Highlights;
