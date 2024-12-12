import React, { useState, useEffect } from 'react';
import useStore from '../stores/store';
import * as Dialog from '@radix-ui/react-dialog';

const CreateProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const {
    productos,
    categorias,
    crearProducto,
    actualizarProducto,
    obtenerTodosLosProductos,
    obtenerTodasLasCategorias,
    eliminarProducto,
  } = useStore();

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: '',
    cantidad: '',
    file: null 
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, descripcion, precio, cantidad, categoria, file } = formData;

    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!descripcion) newErrors.descripcion = 'La descripción es obligatoria.';
    if (!file) newErrors.file = 'La imagen es obligatoria en formato png.';
    if (!precio || isNaN(precio)) newErrors.precio = 'El precio es obligatorio y debe ser numérico.';
    if (!cantidad || isNaN(cantidad)) newErrors.cantidad = 'La cantidad es obligatoria y debe ser numérica.';
    if (!categoria) newErrors.categoria = 'La categoría es obligatoria.';
    

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsDialogOpen(true);
      return;
    }

    const formDataToSubmit = new FormData(); 
    formDataToSubmit.append('nombre', nombre);
    formDataToSubmit.append('descripcion', descripcion);
    formDataToSubmit.append('categoria', categoria);
    formDataToSubmit.append('precio', parseFloat(precio));
    formDataToSubmit.append('cantidad', parseInt(cantidad, 10));
    formDataToSubmit.append('file', file); 

    if (selectedProduct) {
      // Update existing product
      actualizarProducto(selectedProduct, formDataToSubmit);
      setSelectedProduct(null);
    } else {
      formDataToSubmit.forEach((value, key) => {
        console.log(key + ": " + value);
      });      
      crearProducto(formDataToSubmit);
    }

    setFormData({
      nombre: '',
      descripcion: '',
      categoria: '', 
      precio: '',
      cantidad: '',
      file: null
    });
    setSelectedProduct(null);
  };

  const handleEdit = (producto) => {
    setSelectedProduct(producto.id);
    setFormData({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      categoria: producto.categoria,
      precio: producto.precio.toString(),
      cantidad: producto.cantidad.toString(),
      file: null 
    });
  };

  const handleEliminar = (id) => {
    eliminarProducto(id);
    if (selectedProduct === id) setSelectedProduct(null);
  };

  useEffect(() => {
    obtenerTodosLosProductos();  
    obtenerTodasLasCategorias(); 
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {selectedProduct ? 'Actualizar Producto' : 'Crear Producto'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">
              Nombre del producto
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa el nombre"
              className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-lg font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ingresa la descripción"
              rows="4"
              className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="categoria" className="block text-lg font-medium text-gray-700">
                Categoría
              </label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="precio" className="block text-lg font-medium text-gray-700">
                Precio
              </label>
              <input
                type="number"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="Ingresa el precio"
                className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cantidad" className="block text-lg font-medium text-gray-700">
                Cantidad
              </label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                placeholder="Ingresa la cantidad"
                className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="file" className="block text-lg font-medium text-gray-700">
                Imagen
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-gray-500 focus:border-gray-500 text-gray-700 shadow-sm"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                selectedProduct ? 'bg-red-300 hover:bg-red-400' : 'bg-emerald-200 hover:bg-emerald-500'
              } text-black font-bold py-3 px-10 rounded-md focus:ring-4 focus:ring-gray-400 shadow-md`}
            >
              {selectedProduct ? 'Actualizar Producto' : 'Crear Producto'}
            </button>
          </div>
        </form>

        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed bg-white rounded-lg p-6 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-lg font-bold text-gray-700">
              Campos obligatorios
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-600">
              Por favor, revisa los siguientes errores antes de continuar:
            </Dialog.Description>
            <ul className="mt-4 text-sm text-red-500 list-disc pl-5">
              {Object.keys(errors).map((campo) => (
                <li key={campo}>{errors[campo]}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <Dialog.Close
                className="bg-red-300 text-white py-2 px-4 rounded-lg hover:bg-red-400"
                onClick={() => setIsDialogOpen(false)}
              >
                Cerrar
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>

      {/* Tabla de productos */}
      <h2 className="text-2xl font-bold text-center mt-10 mb-6 text-gray-700">Lista de Productos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Nombre</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Descripción</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Categoría</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Precio</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Cantidad</th>
              <th className="py-4 px-6 text-center text-sm font-medium text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-t hover:bg-gray-100">
                <td className="py-4 px-6 text-gray-700">{producto.nombre}</td>
                <td className="py-4 px-6 text-gray-700">{producto.descripcion}</td>
                <td className="py-4 px-6 text-gray-700">{producto.categoria}</td>
                <td className="py-4 px-6 text-gray-700 font-semibold">${parseFloat(producto.precio).toFixed(2)}</td>
                <td className="py-4 px-6 text-gray-700">{producto.cantidad}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleEdit(producto)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleEliminar(producto.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateProduct;
