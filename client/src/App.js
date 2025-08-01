import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UmoorSection from './components/UmoorSection';
import MasjidSection from './components/MasjidSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <UmoorSection />
            <MasjidSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App; 