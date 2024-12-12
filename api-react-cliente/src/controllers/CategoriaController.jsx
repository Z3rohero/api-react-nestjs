import { CategoriaService } from '../config/Services';

export const getTodasLasCategorias = async () => {
  try {
    return await CategoriaService.getTodasLasCategorias();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const crearCategoria = async (categoriaData) => {
  try {
    return await CategoriaService.crearCategoria(categoriaData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const actualizarCategoria = async (id, categoriaData) => {
  try {
    return await CategoriaService.actualizarCategoria(id, categoriaData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const eliminarCategoria = async (id) => {
  try {
    return await CategoriaService.eliminarCategoria(id);
  } catch (err) {
    throw new Error(err.message);
  }
};
