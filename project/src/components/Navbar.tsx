import React from 'react';
import { Box } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Box className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CubeMaster</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/products" className={isActive('/products')}>Products</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}