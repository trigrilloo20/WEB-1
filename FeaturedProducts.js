import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Rango MVP+',
      price: 29.99,
      image: 'https://via.placeholder.com/400x300/1a1a2e/ffffff?text=MVP%2B',
      category: 'Rango'
    },
    {
      id: 2,
      title: 'Paquete de Mascotas',
      price: 14.99,
      image: 'https://via.placeholder.com/400x300/16213e/ffffff?text=Mascotas',
      category: 'Cosmético'
    },
    {
      id: 3,
      title: 'Traje Épico',
      price: 9.99,
      image: 'https://via.placeholder.com/400x300/0f3460/ffffff?text=Traje',
      category: 'Skin'
    },
    {
      id: 4,
      title: 'Efectos de Particulas',
      price: 7.99,
      image: 'https://via.placeholder.com/400x300/533483/ffffff?text=Particulas',
      category: 'Cosmético'
    }
  ];

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Productos Destacados</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Los artículos más populares de nuestra tienda para mejorar tu experiencia en Hypixel
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;