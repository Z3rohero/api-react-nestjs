import { create } from 'zustand';
import * as productController from '../controllers/ProductController';

const useStore = create((set) => ({
  productos: [],
  cargando: false,
  error: null,

  obtenerTodosLosProductos: async () => {
    set({ cargando: true, error: null });
    try {
      const productos = await productController.getTodosLosProductos();
      set({ productos, cargando: false });
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  crearProducto: async (datosProducto) => {
    set({ cargando: true, error: null });
    try {
      const nuevoProducto = await productController.crearProducto(datosProducto);
      set((estado) => ({
        productos: [...estado.productos, nuevoProducto],
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  actualizarProducto: async (id, datosProducto) => {
    set({ cargando: true, error: null });
    try {
      const productoActualizado = await productController.actualizarProducto(id, datosProducto);
      set((estado) => ({
        productos: estado.productos.map((producto) =>
          producto.id === id ? productoActualizado : producto
        ),
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  eliminarProducto: async (id) => {
    set({ cargando: true, error: null });
    try {
      await productController.eliminarProducto(id);
      set((estado) => ({
        productos: estado.productos.filter((producto) => producto.id !== id),
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },
}));

export default useStore;
