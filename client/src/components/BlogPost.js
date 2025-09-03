import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { createClient } from 'contentful';
import './BlogPost.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const BlogPost = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                console.log('Fetching post with ID:', id);
                const response = await client.getEntry(id);
                console.log('Contentful response:', response);
                setPost(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog post:', error);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="blog-post-page">
                <Navbar useDarkLogo={true} />
                <div className="loading">Loading...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-post-page">
                <Navbar useDarkLogo={true} />
                <div className="error">Blog post not found</div>
            </div>
        );
    }

    // Extract fields from the Contentful response
    const { title, content, featuredImage, author } = post.fields;
    const imageUrl = featuredImage?.fields?.file?.url;
    const authorName = author?.fields?.name || '';

    // Function to render rich text content
    const renderContent = () => {
        if (!content || !content.content) return null;

        return content.content.map((node, index) => {
            if (node.nodeType === 'paragraph') {
                return (
                    <p key={index}>
                        {node.content.map((child, i) => child.value).join('')}
                    </p>
                );
            }
            if (node.nodeType.startsWith('heading-')) {
                const HeadingTag = `h${node.nodeType.split('-')[1]}`;
                return (
                    <HeadingTag key={index}>
                        {node.content.map((child, i) => child.value).join('')}
                    </HeadingTag>
                );
            }
            return null;
        });
    };

    return (
        <div className="blog-post-page">
            <Navbar useDarkLogo={true} />
            <div
                id="blog-post"
                className="blog-post-section"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
                }}
            >

                <div className="container">
                    <h1 className="blog-post-title">{title}</h1>
                    <div className="single-post-container">
                        <div className="single-post-content">
                            {imageUrl && (
                                <div className="single-post-image">
                                    <img
                                        src={imageUrl}
                                        alt={title}
                                    />
                                </div>
                            )}
                            <div className="single-post-details">
                                {authorName && <p className="single-post-author">{authorName}</p>}
                                <div className="single-post-body">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPost;