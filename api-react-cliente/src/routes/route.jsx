import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav'; 
import Dashboard from '../pages/Dashboard'; 
import Categorias from '../pages/Categorias'; 
import Products from '../pages/Products';

const Rutas = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>

        <Route path="/" element={<Dashboard />} />  
        <Route path="/categorias" element={<Categorias />} /> 
        <Route path="/productos" element={<Products />} />  
      </Routes>
    </Router>
  );
};

export default Rutas;
