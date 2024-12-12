import React from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import Hero from '../components/Hero';

export default function Products() {
  return (
    <div className="py-8">
      <Hero />
      <ProductGrid products={products} />
    </div>
  );
}