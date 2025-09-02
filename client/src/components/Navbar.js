import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = ({ useDarkLogo = false }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar only when at the top of the page
            if ((window.location.hash === '' || window.location.pathname === '/aeb-jamaat-portal') && (window.location.hash != '#/masjid')) { // only on the homepage
                if (currentScrollY <= 50) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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
                        <HashLink smooth to="/#hero" className="nav-link">
                            Home
                        </HashLink>
                        <span className="nav-separator">|</span>
                        <HashLink smooth to="/#about" className="nav-link">
                            About
                        </HashLink>
                        <span className="nav-separator">|</span>
                        <HashLink smooth to="/#umoor" className="nav-link">
                            12 Umoor
                        </HashLink>
                    </div>

                    <div className="nav-center">
                        <div className="nav-logo">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${useDarkLogo ? 'Dark-Logo.png' : 'jamaat-logo.png'}`}
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
                        <HashLink smooth to="/#news" className="nav-link">News</HashLink>
                        <span className="nav-separator">|</span>
                        <HashLink smooth to="/#masjid" className="nav-link">
                            Blog
                        </HashLink>
                        <span className="nav-separator">|</span>
                        <HashLink smooth to="/#contact" className="nav-link">
                            Contact
                        </HashLink>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <HashLink smooth to="/#hero" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        Home
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        About
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#umoor" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        12 Umoor
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#news" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        News
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#masjid" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        Blog
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact
                    </HashLink>
                </div>
            </div>
        </>
    );
};

export default Navbar; 