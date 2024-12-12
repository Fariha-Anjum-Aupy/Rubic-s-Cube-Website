import React from 'react';
import { Product } from '../types/product';
import ProductSpecs from './ProductSpecs';
import ProductFeatures from './ProductFeatures';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        </div>
        
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <ProductSpecs specs={product.specs} />
        <ProductFeatures features={product.features} />
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Recommended For</h3>
          <ul className="list-disc list-inside text-gray-600">
            {product.recommendedFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <button className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}