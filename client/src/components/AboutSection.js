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
                    <p>The Dawoodi Bohra community in Austin has been a part of this beautiful city since over five decades and have over a 100 families in our congregation today. We are followers of the 53rd Dai al Mutlaq, Syedna Mufaddal Saifuddin TUS. The Anjuman-e-Burhani Markaz (community hall) was built in Pflugerville in 2007 under the guidance of the 52nd Dai al Mutlaq Syedna Mohammed Burhanuddin RA. It is our central location, while we work towards our Mosque in the same vicinity. We hold community prayers, meals, events and Madrasah (classes for youngsters) at the Markaz. Our growing community always aspires to continue the Zikr of Ahl-al-Bait, the Aza of Imam Husain AS (grandson of Prophet Mohammed Rasulullah SAW), Aimmat Taahereen AS, Doaat Mutlaqeen RA and Hudaat Kiraam AQ. <br></br>
                        <br></br>

                        Austin TX is all about “Keeping it Weird”. In our community, you will find the most weirdly lovable folks - tech enthusiasts turned entrepreneurs, doctors addicted to racket sports, skilled teachers who bake a mean cookie, real estate geniuses with a heart of gold, and many more. The city offers fantastic opportunities for growth, is close to large jamaats but keeps its identity of a close knit community, and always has a few foodies looking for some company to gobble at a new restaurant. Once you move to this Jamaat, you will not want to be a part of another jamaat again!
                    </p>
                </div>
                <Highlights />
            </div>
        </section>
    );
};

export default AboutSection; 