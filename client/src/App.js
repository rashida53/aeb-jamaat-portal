import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UmoorSection from './components/UmoorSection';
import MasjidSection from './components/MasjidSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MasjidPage from './components/MasjidPage';
import AllReflections from './components/AllReflections';
import BlogPost from './components/BlogPost';

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
                    <Route path="/reflections/all" element={<AllReflections />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 