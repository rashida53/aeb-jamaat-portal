import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after navigation
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="nav-container">
                    {/* Mobile Hamburger Menu */}
                    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-left desktop-nav">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="nav-link"
                        >
                            Home
                        </button>
                        <span className="nav-separator">|</span>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="nav-link"
                        >
                            About
                        </button>
                        <span className="nav-separator">|</span>
                        <button
                            onClick={() => scrollToSection('umoor')}
                            className="nav-link"
                        >
                            12 Umoor
                        </button>
                    </div>

                    <div className="nav-center">
                        <div className="nav-logo">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/jamaat-logo.png`}
                                alt="Jamaat Logo"
                                className="logo-image desktop-logo"
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Dark-Logo.png`}
                                alt="Jamaat Logo"
                                className="logo-image mobile-logo"
                            />
                        </div>
                    </div>

                    <div className="nav-right desktop-nav">
                        <a href="#news" className="nav-link">News</a>
                        <span className="nav-separator">|</span>
                        <button
                            onClick={() => scrollToSection('masjid')}
                            className="nav-link"
                        >
                            Blog
                        </button>
                        <span className="nav-separator">|</span>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="nav-link"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="mobile-nav-link"
                    >
                        Home
                    </button>
                    <div className="mobile-link-divider"></div>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="mobile-nav-link"
                    >
                        About
                    </button>
                    <div className="mobile-link-divider"></div>
                    <button
                        onClick={() => scrollToSection('umoor')}
                        className="mobile-nav-link"
                    >
                        12 Umoor
                    </button>
                    <div className="mobile-link-divider"></div>
                    <a href="#news" className="mobile-nav-link">News</a>
                    <div className="mobile-link-divider"></div>
                    <button
                        onClick={() => scrollToSection('masjid')}
                        className="mobile-nav-link"
                    >
                        Blog
                    </button>
                    <div className="mobile-link-divider"></div>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="mobile-nav-link"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar; 