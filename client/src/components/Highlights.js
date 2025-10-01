import React from 'react';
import './Highlights.css';

const Highlights = () => {
    const highlights = [
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
        }
    ];

    return (
        <div className="highlights-container">
            {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                    <div className="highlight-image">
                        <img src={highlight.image} alt={highlight.title} />
                    </div>
                    <div className="highlight-content">
                        <h3 className="highlight-title">{highlight.title}</h3>
                        <p className="highlight-description">{highlight.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Highlights;
