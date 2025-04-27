import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400">Hypixel</span>
            <span className="text-2xl font-bold text-white">Store</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Inicio</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Tienda</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Rangos</a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">Soporte</a>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors">
              Iniciar Sesión
            </button>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#" className="block text-white py-2 hover:text-yellow-400 transition-colors">Inicio</a>
            <a href="#" className="block text-white py-2 hover:text-yellow-400 transition-colors">Tienda</a>
            <a href="#" className="block text-white py-2 hover:text-yellow-400 transition-colors">Rangos</a>
            <a href="#" className="block text-white py-2 hover:text-yellow-400 transition-colors">Soporte</a>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full w-full transition-colors">
              Iniciar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;