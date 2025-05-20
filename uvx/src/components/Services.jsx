import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Mic,
  Scissors,
  PenTool
} from "lucide-react";


const Services = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const creators = [
    {
      name: "Influencer Marketing",
      video: "/videos/one.mp4",
    },
    {
      name: "Podcast Management",
      video: "/videos/two.mp4",
    },
    {
      name: "Video Editing",
      video: "/videos/three.mp4",
    },
    {
      name: "Content Creation",
      video: "/videos/four.mp4",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section className="w-full bg-black py-20 px-4">
        {/* Top Heading */}
        <motion.h2
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center mb-16"
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

        {/* Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between md:items-start px-4">
            {creators.map((creator, index) => {
              let positionClass = "";
              let rotationClass = "";

              if (index === 0 || index === 3) positionClass = "md:translate-y-0";
              if (index === 1 || index === 2) positionClass = "md:translate-y-24";

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
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className="w-full md:w-[22%]"
                >
                  <div
                    className={`bg-[#1a1a1a] p-3 rounded-xl shadow-md ${positionClass} ${rotationClass}`}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    


<section className="w-full bg-black text-white py-20 px-4">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
      {/* Card 1 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <Megaphone className="w-10 h-10 text-red-400 mb-4" />
          <h4 className="text-xl font-semibold text-white mb-2">Influencer Marketing</h4>
          <p className="text-gray-400 text-sm">
            Reach your target audience with impactful creators.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <Mic className="w-10 h-10 text-red-400 mb-4" />
          <h4 className="text-xl font-semibold text-white mb-2">Podcast Management</h4>
          <p className="text-gray-400 text-sm">
            From recording to distribution, we handle it all.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <Scissors className="w-10 h-10 text-red-400 mb-4" />
          <h4 className="text-xl font-semibold text-white mb-2">Video Editing</h4>
          <p className="text-gray-400 text-sm">
            Create scroll-stopping content for every platform.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <PenTool className="w-10 h-10 text-red-400 mb-4" />
          <h4 className="text-xl font-semibold text-white mb-2">Content Creation</h4>
          <p className="text-gray-400 text-sm">
            From ideas to execution, we make your brand shine.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>



     
     
    </>
  );
};

export default Services;



