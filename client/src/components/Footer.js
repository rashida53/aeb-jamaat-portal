import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h4 className="footer-section-title">Quick Links</h4>
                    <a href="https://tinyurl.com/niyaaz-calendar-1447" target="_blank" rel="noopener noreferrer" className="footer-link">
                        1447H Niyaaz Calendar
                    </a>
                    <a href="https://fmb.austinjamaat.org/miqaats" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Miqaat RSVP
                    </a>
                    <a href="https://tinyurl.com/relay-request" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Relay Request Form
                    </a>
                    <a href="https://tinyurl.com/aeb-new-member" target="_blank" rel="noopener noreferrer" className="footer-link">
                        New Jamaat Member
                    </a>
                    <a href="https://tinyurl.com/markaz-maintenance-request" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Maintenance/Nazafat Request
                    </a>
                </div>
                <div className="footer-center">
                    <p className="footer-text">Anjuman-e-Burhani</p>
                    <p className="footer-text">Austin</p>
                    <p className="footer-text">13209 Old Gregg Ln, Pflugerville</p>
                </div>
                <div className="footer-right">
                    <div className="footer-right-content">
                        <div className="footer-spacer"></div>
                        <p className="footer-copyright">Copyright @ KapsLok</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 