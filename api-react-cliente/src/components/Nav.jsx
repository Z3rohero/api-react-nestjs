import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center space-x-3 px-6">
        <span className="text-2xl font-bold">Gestión de Productos</span>
        <div className="bg-gray-700 hover:bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full transition duration-300">
          <ShoppingCart className="w-5 h-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
