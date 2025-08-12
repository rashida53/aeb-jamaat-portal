import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Navbar from './Navbar';

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="cf-heading1">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="cf-heading2">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="cf-heading3">{children}</h3>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="cf-paragraph">{children}</p>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="cf-list">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="cf-list">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="cf-list-item">{children}</li>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            return <img src={file.url} alt={title} className="cf-image" />;
        },
        [INLINES.HYPERLINK]: (node, children) => (
            <a href={node.data.uri} className="cf-link" target="_blank" rel="noopener noreferrer">{children}</a>
        ),
    },
};

function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries({
            content_type: 'pageBlogPost',
            'fields.slug': slug,
            limit: 1,
        })
            .then((response) => {
                setPost(response.items[0]);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found.</div>;

    const { title, featuredImage, publishedDate, shortDescription, content } = post.fields;
    const imageUrl = featuredImage?.fields?.file?.url;

    return (
        <>
            <Navbar />
            <div className="blog-post-page">
                <h1>{title}</h1>
                {imageUrl && <img src={imageUrl} alt={title} className="blog-post-image" />}
                <div className="blog-post-date">{publishedDate}</div>
                <div className="blog-post-desc">{shortDescription}</div>
                <div className="blog-post-content">
                    {content && documentToReactComponents(content, options)}
                </div>
            </div>
        </>
    );
}

export default BlogPost;
