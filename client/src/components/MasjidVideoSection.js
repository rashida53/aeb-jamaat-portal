import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import './MasjidVideoSection.css';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const MasjidVideoSection = () => {
    const [videoSrc, setVideoSrc] = useState(null);
    const [videoAlt, setVideoAlt] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMasjidVideo = async () => {
            try {
                console.log('MasjidVideoSection - Fetching masjid video...');

                const response = await client.getEntries({
                    content_type: 'masjidUpdate',
                    include: 2
                });

                console.log('MasjidVideoSection - Contentful response:', response);

                if (response.items.length > 0) {
                    const entry = response.items[0];
                    console.log('MasjidVideoSection - Entry fields:', entry.fields);

                    if (entry.fields.masjidImages && entry.fields.masjidImages.length > 0) {
                        console.log('MasjidVideoSection - Found media items:', entry.fields.masjidImages);

                        // Find the first video in the masjidImages array
                        const videoItem = entry.fields.masjidImages.find((item) => {
                            const fileType = item.fields.file.contentType;
                            return fileType.startsWith('video/');
                        });

                        if (videoItem) {
                            const fileUrl = videoItem.fields.file.url;
                            console.log('MasjidVideoSection - Found video:', videoItem);
                            setVideoSrc(`https:${fileUrl}`);
                            setVideoAlt(videoItem.fields.title || videoItem.fields.description || 'Masjid Video');
                        } else {
                            console.log('MasjidVideoSection - No video found in masjidImages');
                        }
                    } else {
                        console.log('MasjidVideoSection - No masjidImages found');
                    }
                } else {
                    console.log('MasjidVideoSection - No masjid update entry found');
                }
                setIsLoading(false);
            } catch (error) {
                console.error('MasjidVideoSection - Error fetching masjid video:', error);
                setIsLoading(false);
            }
        };

        fetchMasjidVideo();
    }, []);

    if (isLoading) {
        return (
            <section
                className="masjid-video-section"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
                }}
            >
                <div className="masjid-video-container">
                    <div className="loading">Loading video...</div>
                </div>
            </section>
        );
    }

    if (!videoSrc) {
        // Don't render anything if there's no video
        return null;
    }

    return (
        <section
            className="masjid-video-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/islamic-pattern-corrected.png)`,
            }}
        >
            <div className="masjid-video-container">
                <div className="video-wrapper">
                    <video
                        className="masjid-video-player"
                        controls
                        playsInline
                        autoPlay
                        muted
                        loop
                        src={videoSrc}
                        aria-label={videoAlt}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default MasjidVideoSection;

