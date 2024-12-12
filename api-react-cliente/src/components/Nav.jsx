import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleCartClick = () => navigate('/');
  const handleCategoriasClick = () => navigate('/categorias');
  const handleProductosClick = () => navigate('/productos');


  return (
    <nav className="bg-gradient-to-r from-emerald-200 to-lime-200 text-white py-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-6">
        <span className="text-3xl font-bold tracking-wide text-gray-700">
          Gestión de Productos
        </span>

        <div className="flex items-center space-x-4">
          <div
            className="bg-white hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={handleCartClick}
          >
            <ShoppingCart className="w-5 h-5 text-indigo-400" />
          </div>


          <div
            className="bg-white hover:bg-gray-200 px-5 py-2 rounded-lg text-indigo-400 font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={handleCartClick}
          >
            crear productos
          </div>

          <div
            className="bg-white hover:bg-gray-200 px-5 py-2 rounded-lg text-indigo-400 font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={handleCategoriasClick}
          >
             crear Categorías
          </div>

          <div
            className="bg-white hover:bg-gray-200 px-5 py-2 rounded-lg text-indigo-400 font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={handleProductosClick}
          >
            productos
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
