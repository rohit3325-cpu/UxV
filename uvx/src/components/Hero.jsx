import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImg from "../assets/images/x_logo.png";
import styles from "./Herosection.module.css"; // Includes @font-face for Northwell

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.3]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 text-center md:text-left">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-8 hero-text"
        >
          <motion.h1
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="text-7xl sm:text-6xl md:text-7xl leading-tight tracking-wide max-w-xl"
            style={{
              fontFamily: "Northwell, cursive",
              color: "white",
              fontWeight: "normal",
            }}
          >
            Unlocking{"   "}
            <span className="relative inline-block text-[#F4D03F]">
              Collaborations
              <svg
                   className="absolute -bottom-6 right-[0%] -translate-x-0 w-[200px] md:w-[250px] h-auto"
                viewBox="0 0 200 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M10 10 C60 0, 140 0, 190 10"
                  stroke="#F4D03F"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                />
                <motion.path
                  d="M10 20 C60 10, 140 10, 190 20"
                  stroke="#F4D03F"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
                />
              </svg>
            </span>
          </motion.h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative flex items-center justify-center md:justify-end hero-img"
        >
          <motion.img
            src={HeroImg}
            alt="Hero Logo"
            style={{ scale, opacity }}
            className="relative z-10 max-w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;























