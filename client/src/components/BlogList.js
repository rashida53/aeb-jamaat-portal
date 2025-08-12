import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Navbar from './Navbar';
import './BlogList.css';

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries({ content_type: 'pageBlogPost' })
            .then((response) => {
                setBlogs(response.items);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="blog-list-page">
                <div className="blog-breadcrumb">Home &gt; Blog</div>
                <h1 className="blog-list-title">Blog</h1>
                <div className="blog-list-grid">
                    {blogs.map((blog) => {
                        const { title, shortDescription, featuredImage, slug, publishedDate } = blog.fields;
                        const imageUrl = featuredImage?.fields?.file?.url;
                        return (
                            <div className="blog-list-card" key={blog.sys.id}>
                                {imageUrl && <img src={imageUrl} alt={title} className="blog-list-image" />}
                                <div className="blog-list-card-content">
                                    <h2 className="blog-list-card-title">{title}</h2>
                                    {/* <p className="blog-list-card-desc">{shortDescription}</p> */}
                                    <div className="blog-list-card-footer">
                                        <span className="blog-list-date">{publishedDate}</span>
                                        <a href={`/blog/${slug}`} className="blog-list-readmore">Read More</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default BlogList;
