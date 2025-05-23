import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, creators, title }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateIn(false);
      const timer = setTimeout(() => setAnimateIn(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-black w-full max-w-7xl h-[95vh] rounded-2xl p-8 text-white relative shadow-2xl overflow-y-auto">
        {/* Centered Title */}
        <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-bold text-red-500 z-10">
          {title}
        </h2>

        {/* U-Shaped Layout with Tilted Cards */}
        <div
          className={`relative flex gap-6 px-6 mt-40
            flex-col items-center
            md:flex-row md:justify-between md:items-start
          `}
        >
          {creators.map((creator, index) => {
            let positionClass = "";
            let rotationClass = "";

            // U-shaped layout and tilt only on desktop
            if (index === 0 || index === 3) {
              positionClass = "md:translate-y-0";
            } else if (index === 1 || index === 2) {
              positionClass = "md:translate-y-24";
            }

            if (index === 0) rotationClass = "md:-rotate-[5deg]";
            if (index === 1) rotationClass = "md:-rotate-[2deg]";
            if (index === 2) rotationClass = "md:rotate-[2deg]";
            if (index === 3) rotationClass = "md:rotate-[5deg]";

            return (
              <div
                key={index}
                style={{
                  transform: animateIn ? "translateY(0)" : "translateY(20px)",
                  opacity: animateIn ? 1 : 0,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transitionDelay: `${index * 100}ms`,
                }}
                className={`
                  w-full md:w-[22%]
                `}
              >
                <div
                  className={`bg-[#1a1a1a] p-3 rounded-xl shadow-md
                    ${positionClass} ${rotationClass}
                  `}
                >
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
                  <p className="text-center mt-2 text-red-400 font-semibold text-sm">
                    {creator.name}
                  </p>


                   <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10">
        <motion.h2
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center mb-12"
          style={{
            fontFamily: "'Northwell', cursive",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Our{" "}
          <span className="relative inline-block text-red-500">
            Services
            <svg
              className="absolute -bottom-4.5 left-[40%] -translate-x-1/2 w-[120px] md:w-[160px] h-auto"
              viewBox="0 0 200 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M10 10 C60 0, 140 0, 190 10"
                stroke="#ef4444"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              />
              <motion.path
                d="M10 20 C60 10, 140 10, 190 20"
                stroke="#ef4444"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
              />
            </svg>
          </span>
        </motion.h2>





                </div>
              </div>
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









