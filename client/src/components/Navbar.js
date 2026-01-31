import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            setIsPastHero(true);
            return undefined;
        }

        const observer = new IntersectionObserver( //To observe when hero section is out of view for nav bg change
            (entries) => {
                const entry = entries[0];
                setIsPastHero(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.17, // treat as out of view when almost gone
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

    const handleNavLinkClick = (e, targetPage, offSetId) => {
        e.preventDefault();
        navigate(targetPage);
        let offSet;
        setTimeout(() => {
            if (offSetId != 0) {
                offSet = document.getElementById(offSetId).offsetTop - 100;
            } else {
                offSet = 0;
            }
            window.scrollTo({
                top: offSet,
                behavior: 'smooth'
            });
        }, 200);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
        }
    };

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
                        <div className="nav-link" onClick={(e) => handleNavLinkClick(e, '/', 'about')}>
                            About
                        </div>
                        <span className="nav-separator">|</span>
                        <div className="nav-link" onClick={(e) => handleNavLinkClick(e, '/pickleball2026', 0)}>
                            Pickleball '26
                        </div>
                        <span className="nav-separator">|</span>
                        <div className="nav-link" onClick={(e) => handleNavLinkClick(e, '/masjid', 0)}>
                            Masjid
                        </div>
                    </div>

                    <div className="nav-center">
                        <div className="nav-logo" onClick={(e) => handleNavLinkClick(e, '/', 0)}>
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
                    </div>

                    <div className="nav-right desktop-nav">
                        <div className="nav-link" onClick={(e) => handleNavLinkClick(e, '/blogs/all', 0)}>
                            Blog
                        </div>
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
                        <div className="nav-link" onClick={(e) => handleNavLinkClick(e, '/', 'contact')}>
                            Contact
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/', 'about')}>
                        About
                    </div>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/pickleball2026', 0)}>
                        Pickleball '26
                    </div>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/masjid', 0)}>
                        Masjid
                    </div>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/blogs/all', 0)}>
                        Blog
                    </div>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/team', 0)}>
                        Team
                    </div>
                    <div className="mobile-link-divider"></div>
                    <div className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, '/', 'contact')}>
                        Contact
                    </div>
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