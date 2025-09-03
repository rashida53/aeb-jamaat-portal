import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const Reflections = () => {

    const [reflections, setReflections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries({
            content_type: 'pageBlogPost',
            'fields.category': 'masjid',
            order: '-fields.publishedDate',
            limit: 4
        })
            .then((response) => {
                setReflections(response.items);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section
            className="reflections-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <div className="container">
                <h2 className="reflections-section-title">REFLECTIONS</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="blog-posts">
                        {reflections.map(post => {
                            const { title, shortDescription, featuredImage, author, slug } = post.fields;
                            const imageUrl = featuredImage?.fields?.file?.url;
                            const authorName = author?.fields?.name || '';
                            return (
                                <div key={post.sys.id} className="blog-post">
                                    <div className="post-accent"></div>
                                    <div className="post-content">
                                        <div className="post-image">
                                            {imageUrl && <img src={imageUrl} alt={title} />}
                                        </div>
                                        <div className="post-details">
                                            <h3 className="post-title">{title}</h3>
                                            <p className="post-text">
                                                {post.fields.content && (() => {
                                                    // Gather all text from paragraphs and headings
                                                    const blocks = post.fields.content.content.filter(node => node.nodeType === 'paragraph' || node.nodeType.startsWith('heading'));
                                                    const allText = blocks.map(node => node.content.map(child => child.value).join(' ')).join(' ');
                                                    const words = allText.split(/\s+/).filter(Boolean);
                                                    const preview = words.slice(0, 40).join(' ');
                                                    return preview + (words.length > 40 ? '...' : '');
                                                })()}
                                            </p>
                                            <div className="post-bottom">
                                                <p className="post-author">{authorName}</p>
                                                <Link to={`/blog/${post.sys.id}`} className="read-more">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/reflections/all" className="view-all-reflections-btn">VIEW ALL REFLECTIONS</Link>
                </div>
            </div>
        </section>
    );
};

export default Reflections;
