import { productService } from '../config/Services';


export const getTodosLosProductos = async () => {
  try {
    return await productService.getTodosLosProductos();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const crearProducto = async (productData) => {
  try {
    return await productService.crearProducto(productData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const actualizarProducto = async (id, productData) => {
  try {
    return await productService.actualizarProducto(id, productData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const eliminarProducto = async (id) => {
  try {
    return await productService.eliminarProducto(id);
  } catch (err) {
    throw new Error(err.message);
  }
};
