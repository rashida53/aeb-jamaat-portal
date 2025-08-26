import React from 'react';
import './Reflections.css';

const Reflections = () => {
    // Sample blog data - this could come from an API or CMS in a real application
    const blogPosts = [
        {
            id: 1,
            image: `${process.env.PUBLIC_URL}/images/masjid-carousel-1.jpeg`,
            title: "DUA ARAZ TO MAZOON-E-DAWAT SHZ QUAID JOHAR BS DM",
            content: "After Aqa Mola (TUS) performed ta'sees, Austin mumineen were bestowed with the Sharaf of doing araz to Mazoon-e-Dawat Shz Quaid Johar BS DM and Mukasir-e-Dawat Shz Malik ul Ashtar DM.",
            author: "Dr. M. Hussain bhai Malbari",
            link: "/reflections/1"
        },
        {
            id: 2,
            image: `${process.env.PUBLIC_URL}/images/masjid-carousel-2.jpeg`,
            title: "DUA ARAZ TO MAZOON-E-DAWAT SHZ QUAID JOHAR BS DM",
            content: "After Aqa Mola (TUS) performed ta'sees, Austin mumineen were bestowed with the Sharaf of doing araz to Mazoon-e-Dawat Shz Quaid Johar BS DM and Mukasir-e-Dawat Shz Malik ul Ashtar DM.",
            author: "Dr. M. Hussain bhai Malbari",
            link: "/reflections/2"
        },
        {
            id: 3,
            image: `${process.env.PUBLIC_URL}/images/masjid-carousel-3.jpeg`,
            title: "DUA ARAZ TO MAZOON-E-DAWAT SHZ QUAID JOHAR BS DM",
            content: "After Aqa Mola (TUS) performed ta'sees, Austin mumineen were bestowed with the Sharaf of doing araz to Mazoon-e-Dawat Shz Quaid Johar BS DM and Mukasir-e-Dawat Shz Malik ul Ashtar DM.",
            author: "Dr. M. Hussain bhai Malbari",
            link: "/reflections/3"
        }
    ];

    return (
        <section
            className="reflections-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern.svg)`,
            }}
        >
            <div className="container">
                <h2 className="section-title">REFLECTIONS</h2>

                <div className="blog-posts">
                    {blogPosts.map(post => (
                        <div key={post.id} className="blog-post">
                            <div className="post-accent"></div>
                            <div className="post-content">
                                <div className="post-image">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="post-details">
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-text">{post.content}</p>
                                    <div className="post-bottom">
                                        <p className="post-author">{post.author}</p>
                                        <a href={post.link} className="read-more">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reflections;
