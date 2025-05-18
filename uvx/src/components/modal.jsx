import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, creators, title }) => {
  if (!isOpen) return null;

  const cardVariants = {
    left: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
    bottom: { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
    right: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-black w-full max-w-6xl rounded-2xl p-8 text-white relative shadow-2xl overflow-y-auto max-h-[90vh]">

        {/* Modal main heading (dynamic based on service clicked) */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-500">
          {title}
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">

          {creators.map((creator, index) => {
            let variant = "bottom"; // Default
            if (index === 0) variant = "left";
            else if (index === 3) variant = "right";

            return (
              <motion.div
                key={index}
                variants={cardVariants[variant]}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-[#2C2C2C] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
                style={{
                  boxShadow: "0 0 15px 4px rgba(255, 0, 0, 0.8)", // red glow
                }}
              >
                {/* Heading for each card: Use creator.service or fallback to modal title */}
                {/* <h3 className="text-xl font-bold text-red-500 mb-2 text-center">
                  {creator.service || creator.title || title || "Service Name"}
                </h3> */}

                {creator.video ? (
                  <video
                    src={creator.video}
                    controls
                    className="w-full h-[300px] object-cover rounded-md"
                  />
                ) : (
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-[300px] object-cover rounded-md"
                  />
                )}
                <p className="text-center mt-3 text-red-500 font-semibold">{creator.name}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;


