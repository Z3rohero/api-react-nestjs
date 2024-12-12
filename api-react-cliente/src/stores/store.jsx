import { create } from 'zustand';
import * as productController from '../controllers/ProductController';
import * as categoriaController from '../controllers/CategoriaController';

const useStore = create((set) => ({
  productos: [],
  categorias: [],
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
     

      console.log("Esta storeeeeeeeeeeeeeeeeeeeeeeee");
      datosProducto.forEach((value, key) => {
        console.log(key + ": " + value);
      });  
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
  //------------------------Categoriass --------------------
  obtenerTodasLasCategorias: async () => {
    set({ cargando: true, error: null });
    try {
      const categorias = await categoriaController.getTodasLasCategorias();
      set({ categorias, cargando: false });
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  crearCategoria: async (categoriaData) => {
    set({ cargando: true, error: null });
    try {
      const nuevaCategoria = await categoriaController.crearCategoria(categoriaData);
      set((estado) => ({
        categorias: [...estado.categorias, nuevaCategoria],
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  actualizarCategoria: async (id, categoriaData) => {
    set({ cargando: true, error: null });
    try {
      const categoriaActualizada = await categoriaController.actualizarCategoria(id, categoriaData);
      set((estado) => ({
        categorias: estado.categorias.map((categoria) =>
          categoria.id === id ? categoriaActualizada : categoria
        ),
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },

  eliminarCategoria: async (id) => {
    set({ cargando: true, error: null });
    try {
      await categoriaController.eliminarCategoria(id);
      set((estado) => ({
        categorias: estado.categorias.filter((categoria) => categoria.id !== id),
        cargando: false,
      }));
    } catch (err) {
      set({ error: err.message, cargando: false });
    }
  },
}));

export default useStore;
