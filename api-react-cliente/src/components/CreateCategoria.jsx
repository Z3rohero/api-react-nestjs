import React, { useState, useEffect } from 'react';
import useStore from '../stores/store';
import * as Dialog from '@radix-ui/react-dialog';

const CreateCategoria = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const {
    categorias,
    crearCategoria,
    actualizarCategoria,
    obtenerTodasLasCategorias,
    eliminarCategoria,
  } = useStore();

  const [formData, setFormData] = useState({
    nombre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre } = formData;
    console.log("Datos del formulario antes de la validación:", formData);

    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsDialogOpen(true);
      return;
    }

    const categoryDataToSubmit = new FormData(); 
    categoryDataToSubmit.append('nombre', nombre);

    if (selectedCategory) {
      actualizarCategoria(selectedCategory, categoryDataToSubmit);
      setSelectedCategory(null);
    } else {
      console.log("Esta es la data ==> que se envia:");
      categoryDataToSubmit.forEach((value, key) => {
        console.log(key + ": " + value);
      });
      crearCategoria(nombre);
    }

    setFormData({ nombre: '' });
    setSelectedCategory(null);
  };

  const handleEdit = (categoria) => {
    setSelectedCategory(categoria.id);
    setFormData({ nombre: categoria.nombre });
  };

  const handleEliminar = (id) => {
    eliminarCategoria(id);
    if (selectedCategory === id) setSelectedCategory(null);
  };

  useEffect(() => {
    obtenerTodasLasCategorias();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-xl">
      {/* Formulario para crear o actualizar categorías */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {selectedCategory ? 'Actualizar Categoría' : 'Crear Categoría'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">
              Nombre de la categoría
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
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                selectedCategory ? 'bg-red-300 hover:bg-red-400' : 'bg-emerald-200 hover:bg-emerald-500'
              } text-black font-bold py-3 px-10 rounded-md focus:ring-4 focus:ring-gray-400 shadow-md`}
            >
              {selectedCategory ? 'Actualizar Categoría' : 'Crear Categoría'}
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

      {/* Tabla de categorías */}
      <h2 className="text-2xl font-bold text-center mt-10 mb-6 text-gray-700">Lista de Categorías</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
            <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Id</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">Nombre</th>
              <th className="py-4 px-6 text-center text-sm font-medium text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id} className="border-t hover:bg-gray-100">
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-700">{categoria.id}</th>
                <td className="py-4 px-6 text-gray-700">{categoria.nombre}</td>
                <td className="py-4 px-6 text-center">
              
                  <button
                    onClick={() => handleEliminar(categoria.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
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

export default CreateCategoria;
