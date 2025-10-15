import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import Gallery from './components/Gallery';

function App() {
    return (
        <Router>
            <div className="App">
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
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 