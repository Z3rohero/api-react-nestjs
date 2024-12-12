import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Card from "./Card";  
import useStore from '../stores/store';


export default function CardCarousel() {

  useEffect(() => {
    obtenerTodosLosProductos();
  }, []);

  const {
    productos,
    crearProducto,
    actualizarProducto,
    obtenerTodosLosProductos,
    eliminarProducto,
  } = useStore();


  /*configuración para la animación 3D*/
  const carouselVariants = {
    initial: {
      rotateY: 0,
    },
    animate: {
      rotateY: -30,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  console.log(`estos son los productos  ${JSON.stringify(productos)}`)


  return (
    <div className="relative flex justify-center items-center">
      {/* Carrusel de tarjetas */}
      <motion.div
        className="flex space-x-6"
        variants={carouselVariants}
        initial="initial"
        animate="animate"
        style={{ perspective: "1200px" }}
      >

          {productos.map((producto) => (
                <Card key = {producto.id}
                bgColor="bg-green-300"
                title="Product 2"
                imageSrc={producto.fileUrl}
                description={producto.descripcion}>
                </Card>
          ))}
    
      </motion.div>
    </div>
  );
}
