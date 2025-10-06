import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = ({ useDarkLogo = false }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById('hero');

        // Always keep navbar mounted/visible; we only toggle background
        setIsVisible(true);

        if (!heroSection) {
            // No hero on this page → solid background
            setIsPastHero(true);
            return undefined;
        }

        // Use IntersectionObserver to detect when hero leaves the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // When hero is intersecting (visible), keep transparent; when not, make solid
                setIsPastHero(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.01, // treat as out of view when almost gone
            }
        );

        observer.observe(heroSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : '';
    };

    const handleLogoClick = (e) => {
        e.preventDefault();

        // Navigate to homepage
        navigate('/');

        // Scroll to top after navigation
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    const handleMasjidClick = (e) => {
        e.preventDefault();

        // Navigate to masjid page
        navigate('/masjid');

        // Scroll to top after navigation
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    // Cleanup effect to ensure scroll is re-enabled when component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''} ${isPastHero ? 'solid-bg' : ''}`}>
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
                        <HashLink smooth to="/#about" className="nav-link">
                            About
                        </HashLink>
                        <span className="nav-separator">|</span>
                        <HashLink smooth to="/#umoor" className="nav-link">
                            12 Umoor
                        </HashLink>
                        <span className="nav-separator">|</span>
                        <Link smooth to="/masjid" className="nav-link" onClick={handleMasjidClick}>
                            Masjid
                        </Link>
                    </div>

                    <div className="nav-center">
                        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
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
                        </Link>
                    </div>

                    <div className="nav-right desktop-nav">
                        <Link to="/reflections/all" className="nav-link">
                            Blog
                        </Link>
                        <span className="nav-separator">|</span>
                        <div className="nav-link dropdown">
                            <span>Resources</span>
                            <div className="dropdown-content">
                                <a href="https://tinyurl.com/niyaaz-calendar-1447" target="_blank" rel="noopener noreferrer">
                                    1447H Niyaaz Calendar
                                </a>
                                <a href="https://fmb.austinjamaat.org/miqaats" target="_blank" rel="noopener noreferrer">
                                    Miqaat RSVP
                                </a>
                                <a href="https://tinyurl.com/relay-request" target="_blank" rel="noopener noreferrer">
                                    Relay Request Form
                                </a>
                                <a href="https://tinyurl.com/aeb-new-member" target="_blank" rel="noopener noreferrer">
                                    New Jamaat Member
                                </a>
                                <a href="https://tinyurl.com/markaz-maintenance-request" target="_blank" rel="noopener noreferrer">
                                    Maintenance/Nazafat Request
                                </a>
                                <a href="https://us14.campaign-archive.com/home/?u=b6ab8f303315d93cd2a01a661&id=f6d73734f9" target="_blank" rel="noopener noreferrer">
                                    Newsletters
                                </a>
                            </div>
                        </div>
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
                    <HashLink smooth to="/#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        About
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#umoor" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        12 Umoor
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <Link smooth to="/masjid" className="mobile-nav-link" onClick={(e) => { handleMasjidClick(e); setIsMobileMenuOpen(false); }}>
                        Masjid
                    </Link>
                    <div className="mobile-link-divider"></div>
                    <Link to="/reflections/all" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        Blog
                    </Link>
                    <div className="mobile-link-divider"></div>
                    <HashLink smooth to="/#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact
                    </HashLink>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-section">
                        <div
                            className={`mobile-nav-section-title ${isResourcesExpanded ? 'expanded' : ''}`}
                            onClick={() => setIsResourcesExpanded(!isResourcesExpanded)}
                        >
                            Resources <span className="expand-icon">{isResourcesExpanded ? <RiArrowDropUpLine color="#ce9c01" size={38} /> : <RiArrowDropDownLine color="#ce9c01" size={38} />}</span>
                        </div>
                        <div className={`mobile-nav-section-content ${isResourcesExpanded ? 'expanded' : ''}`}>
                            <a href="https://tinyurl.com/niyaaz-calendar-1447" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                1447H Niyaaz Calendar
                            </a>
                            <a href="https://fmb.austinjamaat.org/miqaats" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                Miqaat RSVP
                            </a>
                            <a href="https://tinyurl.com/relay-request" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                Relay Request Form
                            </a>
                            <a href="https://tinyurl.com/aeb-new-member" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                New Jamaat Member
                            </a>
                            <a href="https://tinyurl.com/markaz-maintenance-request" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                Maintenance/Nazafat Request
                            </a>
                            <a href="https://us14.campaign-archive.com/home/?u=b6ab8f303315d93cd2a01a661&id=f6d73734f9" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" style={{ paddingBottom: '130px' }} onClick={() => setIsMobileMenuOpen(false)}>
                                Newsletters
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar; 