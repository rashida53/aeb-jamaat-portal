import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import './BlogPost.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const BlogPost = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await client.getEntry(id, { include: 10 });
                console.log('Response:', response);
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
    const featuredImageUrl = featuredImage?.fields?.file?.url;
    const authorName = author?.fields?.name || '';

    // Rich text rendering options
    const renderOptions = {
        renderMark: {
            bold: text => <strong className="blog-bold">{text}</strong>,
            italic: text => <em className="blog-italic">{text}</em>,
            underline: text => <u className="blog-underline">{text}</u>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p className="blog-paragraph">{children}</p>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="blog-heading-4">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="blog-heading-5">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="blog-heading-6">{children}</h6>,
            [BLOCKS.UL_LIST]: (node, children) => <ul className="blog-list">{children}</ul>,
            [BLOCKS.OL_LIST]: (node, children) => <ol className="blog-list">{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="blog-list-item">{children}</li>,

            [BLOCKS.QUOTE]: (node, children) => (
                <blockquote className="blog-quote">{children}</blockquote>
            ),

            [BLOCKS.TABLE]: (node, children) => (
                <div className="blog-table-container">
                    <table className="blog-table">{children}</table>
                </div>
            ),

            [BLOCKS.TABLE_ROW]: (node, children) => <tr className="blog-table-row">{children}</tr>,

            [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
                <th className="blog-table-header">{children}</th>
            ),

            [BLOCKS.TABLE_CELL]: (node, children) => (
                <td className="blog-table-cell">{children}</td>
            ),

            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const entry = node.data.target;
                // Handle different types of embedded entries based on content type
                switch (entry.sys.contentType?.sys.id) {
                    case 'componentRichImage':
                        const { image, caption, fullWidth } = entry.fields;
                        const imageUrl = image.fields.file.url;
                        const fullImageUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl;

                        return (
                            <div className={`blog-image-container ${fullWidth ? 'full-width' : ''}`}>
                                <img
                                    src={fullImageUrl}
                                    alt={caption || image.fields.title}
                                    className="blog-image"
                                    width={image.fields.file.details.image.width}
                                    height={image.fields.file.details.image.height}
                                />
                                {caption && <p className="blog-image-caption">{caption}</p>}
                            </div>
                        );

                    case 'videoEmbed':
                        return (
                            <div className="blog-video-container">
                                <iframe
                                    src={entry.fields.url}
                                    title={entry.fields.title}
                                    allowFullScreen
                                    className="blog-video"
                                />
                            </div>
                        );
                    // Add more cases for other content types as needed
                    default:
                        return null;
                }
            },

            [INLINES.HYPERLINK]: (node, children) => (
                <a
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-link"
                >
                    {children}
                </a>
            ),

            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, description, file } = node.data.target.fields;
                if (!file?.url) return null;

                const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url;

                return (
                    <div className="blog-image-container">
                        <img
                            src={imageUrl}
                            alt={description || title}
                            className="blog-image"
                            width={file.details?.image?.width}
                            height={file.details?.image?.height}
                        />
                        {title && <p className="blog-image-caption">{title}</p>}
                    </div>
                );
            },
        }
    }

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
                            {featuredImageUrl && (
                                <div className="single-post-image">
                                    <img
                                        src={featuredImageUrl}
                                        alt={title}
                                    />
                                </div>
                            )}
                            <div className="single-post-details">
                                {authorName && <p className="single-post-author">{authorName}</p>}
                                <div className="single-post-body">
                                    {documentToReactComponents(content, renderOptions)}
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