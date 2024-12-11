// CardCarousel.js
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";  

export default function CardCarousel() {
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
        <Card
          bgColor="bg-blue-300"
          title="Product 1"
          imageSrc="https://via.placeholder.com/256"
          description="This is a product description"
        />
        <Card
          bgColor="bg-green-300"
          title="Product 2"
          imageSrc="https://via.placeholder.com/256"
          description="This is another product description"
        />
        <Card
          bgColor="bg-red-300"
          title="Product 3"
          imageSrc="/../public/images/tenis_prueba.png"
          description="Here is a description for the third product"
        />
            <Card
          bgColor="bg-blue-300"
          title="Product 1"
          imageSrc="https://via.placeholder.com/256"
          description="This is a product description"
        />
        <Card
          bgColor="bg-green-300"
          title="Product 2"
          imageSrc="https://via.placeholder.com/256"
          description="This is another product description"
        />
        <Card
          bgColor="bg-red-300"
          title="Product 3"
          imageSrc="/../public/images/tenis_prueba.png"
          description="Here is a description for the third product"
        />    <Card
        bgColor="bg-blue-300"
        title="Product 1"
        imageSrc="https://via.placeholder.com/256"
        description="This is a product description"
      />
      <Card
        bgColor="bg-green-300"
        title="Product 2"
        imageSrc="https://via.placeholder.com/256"
        description="This is another product description"
      />
      <Card
        bgColor="bg-red-300"
        title="Product 3"
        imageSrc="/../public/images/tenis_prueba.png"
        description="Here is a description for the third product"
      />    <Card
      bgColor="bg-blue-300"
      title="Product 1"
      imageSrc="https://via.placeholder.com/256"
      description="This is a product description"
    />
    <Card
      bgColor="bg-green-300"
      title="Product 2"
      imageSrc="https://via.placeholder.com/256"
      description="This is another product description"
    />
    <Card
      bgColor="bg-red-300"
      title="Product 3"
      imageSrc="/../public/images/tenis_prueba.png"
      description="Here is a description for the third product"
    />
      </motion.div>
    </div>
  );
}
