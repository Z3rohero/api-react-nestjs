import { endpoints,MENSAJES_ERROR } from "./config";

export  const productService = {
  getTodosLosProductos: async () => {
    try {
      const respuesta = await fetch(endpoints.products);
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  },
  
  getProducto: async (id) => {
    try {
      const respuesta = await fetch(`${endpoints.products}/${id}`);
      if (!respuesta.ok){
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  },
  
  crearProducto: async (datosProducto) => {
    try {
      const respuesta = await fetch(endpoints.products, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosProducto),
      });
      if (!respuesta.ok){
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      } 
      return await respuesta.json();
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  },
  
  actualizarProducto: async (id, datosProducto) => {
    try {
      const respuesta = await fetch(`${endpoints.products}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosProducto),
      });
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  },
  
  eliminarProducto: async (id) => {
    try {
      const respuesta = await fetch(`${endpoints.products}/${id}`, {
        method: 'DELETE',
      });
      console.log("esta es al respuesta",respuesta);
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      };
      return await respuesta.json();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  },
  
};
  

