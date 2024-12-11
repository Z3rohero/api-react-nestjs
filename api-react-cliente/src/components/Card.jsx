import { motion } from "framer-motion";

const ProductCard = ({ bgColor, title, imageSrc, price, description }) => {
  return (
    <motion.div
      className={`w-80 ${bgColor} rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
 
      <motion.div
        className="relative flex justify-center items-center overflow-hidden"
        whileHover={{
          scale: 1.1,
          rotateY: 5,
        }}
        style={{ perspective: "250px" }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-72 object-cover rounded-t-3xl"
        />
      </motion.div>

      <div className="p-6 bg-white rounded-b-3xl text-center">
        <span className="block text-xl font-bold text-gray-800">{price}</span>
        <p className="text-md text-gray-600 mt-2">{description}</p>

        {/*
        <motion.button
          className="mt-4 px-6 py-2 bg-black text-white text-sm font-medium rounded-full shadow-md transition-all duration-200 hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
        >
          Comprar ahora
        </motion.button>
        */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
