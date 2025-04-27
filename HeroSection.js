import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 to-indigo-800 h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="text-yellow-400">Hypixel</span> Store
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Los mejores rangos, cosméticos y ventajas para tu experiencia en Minecraft
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Explora Ahora
        </button>
      </div>
    </div>
  );
};

export default HeroSection;