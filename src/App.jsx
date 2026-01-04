import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import LaptopPage from './pages/LaptopPage';
import AudioPage from './pages/AudioPage';
import SmartHomePage from './pages/SmartHomePage';
import BuyingGuidesPage from './pages/BuyingGuidesPage';
import { AboutUs, PrivacyPolicy, ContactUs, TermsOfService } from './pages/LegalPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/best-5g-phones-under-15000" element={<ArticlePage />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        {/* Placeholder for other routes */}
        <Route path="/smartphones" element={<ArticlePage />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/smart-home" element={<SmartHomePage />} />
        <Route path="/guides" element={<BuyingGuidesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
