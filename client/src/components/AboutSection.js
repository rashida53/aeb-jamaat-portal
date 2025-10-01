import React from 'react';
import './AboutSection.css';
import Highlights from './Highlights';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2 className="about-title">ANJUMAN-E-BURHANI AUSTIN</h2>
                <div className="title-underline"></div>
                <div className="about-text-content">
                    <p>
                        Austin TX is all about “Keeping it Weird”. In our community, you will find the most weirdly lovable folks - tech enthusiasts turned entrepreneurs, doctors addicted to racket sports, skilled teachers who bake a mean cookie, real estate geniuses with a heart of gold, and many more. The city offers fantastic opportunities for growth, is close to large jamaats but keeps its identity of a close knit community, and always has a few foodies looking for some company to gobble at a new restaurant. Once you move to this Jamaat, you will not want to be a part of another jamaat again!
                    </p>
                </div>
                <Highlights />
            </div>
        </section>
    );
};

export default AboutSection; 