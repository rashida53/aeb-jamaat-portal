import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Reflections.css';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const AllReflections = () => {
    const [reflections, setReflections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        client.getEntries({
            content_type: 'pageBlogPost',
            order: '-fields.publishedDate'
        })
            .then((response) => {
                setReflections(response.items);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className='all-reflections'>
            <Navbar useDarkLogo={true} />
            <section
                className="reflections-section"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
                }}
            >
                <div className="container">
                    <h2 className="reflections-section-title">ALL REFLECTIONS</h2>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="blog-posts">
                            {reflections.map(post => {
                                const { title, featuredImage, author, slug } = post.fields;
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
                </div>
            </section>
        </div>
    );
};

export default AllReflections;
