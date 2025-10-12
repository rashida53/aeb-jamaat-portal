import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UmoorSection from './components/UmoorSection';
import MasjidSection from './components/MasjidSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MasjidPage from './components/MasjidPage';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import TeamPage from './components/TeamPage';

ReactGA.initialize('G-P092E7XRF7');

function PageTracker() {
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname
        });
        if (location.pathname === '/' && location.hash) {
            const section = location.hash.slice(1);
            if (['blog', 'masjid'].includes(section)) {
                ReactGA.send({
                    hitType: "pageview",
                    page: `/${section}`
                });
            }
        }
    }, [location]);
    return null;
}

function App() {
    return (
        <Router>
            <div className="App">
                <PageTracker />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <HeroSection />
                            <AboutSection />
                            <UmoorSection />
                            <MasjidSection />
                            <ContactSection />
                            <Footer />
                        </>
                    } />
                    <Route path="/masjid" element={<MasjidPage />} />
                    <Route path="/blogs/all" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/team" element={<TeamPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export const trackResourceClick = (resourceName) => {
    ReactGA.event({
        category: 'Resources',
        action: 'Click',
        label: resourceName
    });
};

export default App;