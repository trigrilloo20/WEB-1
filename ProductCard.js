import React from 'react';

const ProductCard = ({ title, price, image, category }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full z-20">
          {category}
        </span>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-yellow-400">${price}</span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;