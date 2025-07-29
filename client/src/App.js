import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UmoorSection from './components/UmoorSection';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <UmoorSection />
        </div>
    );
}

export default App; 