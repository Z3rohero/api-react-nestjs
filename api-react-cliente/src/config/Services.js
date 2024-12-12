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

      console.log("Esta es la data ==> que se envia:");
      datosProducto.forEach((value, key) => {
        console.log(key + ": " + value);
      });  
      
      const respuesta = await fetch(endpoints.products, {
        method: 'POST',
        body: datosProducto 
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
        body: datosProducto,
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



export const CategoriaService = {
  getTodasLasCategorias: async () => {
    try {
      const respuesta = await fetch(endpoints.categorias);
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  },

  getCategoria: async (id) => {
    try {
      const respuesta = await fetch(`${endpoints.categorias}/${id}`);
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al obtener la categoría:', error);
    }
  },

  crearCategoria: async (datosCategoria) => {
    try {
      
      const respuesta = await fetch(endpoints.categorias, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body:JSON.stringify({ nombre:  datosCategoria }), 

      });
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al crear la categoría:', error);
    }
  },

  actualizarCategoria: async (id, datosCategoria) => {
    try {
      const respuesta = await fetch(`${endpoints.categorias}/${id}`, {
        method: 'PUT',        
        body:JSON.stringify({ nombre:  datosCategoria }), 
        
      });
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
    }
  },

  eliminarCategoria: async (id) => {
    try {
      const respuesta = await fetch(`${endpoints.categorias}/${id}`, {
        method: 'DELETE',
      });
      if (!respuesta.ok) {
        throw new Error(MENSAJES_ERROR.RESPUESTA_NO_SATISFACTORIA);
      }
      return await respuesta.json();
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  },
};
  

