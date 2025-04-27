import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default App;

// DONE