import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar only when at the top of the page
            if (currentScrollY <= 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="nav-container">
                <div className="nav-left">
                    <a href="#home" className="nav-link">Home</a>
                    <span className="nav-separator">|</span>
                    <a href="#about" className="nav-link">About</a>
                    <span className="nav-separator">|</span>
                    <a href="#umoor" className="nav-link">12 Umoor</a>
                </div>

                <div className="nav-center">
                    <div className="nav-logo">
                        <img
                            src="/images/jamaat-logo.png"
                            alt="Jamaat Logo"
                            className="logo-image"
                        />
                    </div>
                </div>

                <div className="nav-right">
                    <a href="#news" className="nav-link">News</a>
                    <span className="nav-separator">|</span>
                    <a href="#blog" className="nav-link">Blog</a>
                    <span className="nav-separator">|</span>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 