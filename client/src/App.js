import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useNavigationType } from 'react-router-dom';
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
import EventsPage from './components/EventsPage';
import BusinessExpoPage from './components/BusinessExpoPage';
import SummerCampPage from './components/SummerCampPage';
import NiyaazCalendarPage from './components/NiyaazCalendarPage';
import AsharaMubarakaPage from './components/AsharaMubarakaPage';

function HomePage() {
    const navigate = useNavigate();
    const navType = useNavigationType();

    useEffect(() => {
        if (navType === 'POP') {
            navigate('/asharamubaraka', { replace: true });
        }
    }, [navigate, navType]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <UmoorSection />
            <MasjidSection />
            <ContactSection />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/asharamubaraka" element={<AsharaMubarakaPage />} />
                    <Route path="/masjid" element={<MasjidPage />} />
                    <Route path="/blogs/all" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/pickleball2026" element={<EventsPage />} />
                    <Route path="/businessexpo" element={<BusinessExpoPage />} />
                    <Route path="/summercamp" element={<SummerCampPage />} />
                    <Route path="/niyaaz-calendar" element={<NiyaazCalendarPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
