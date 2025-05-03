import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/images/uxvshort.png"; // Update with your image path
import styles from "./Herosection.module.css";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] to-[#1C1C1C] text-white flex justify-center items-center overflow-x-hidden">
      {/* Ambient Gradient Glows */}
      <div className="absolute w-[300px] h-[300px] bg-[#F4D03F]/20 rounded-full top-[-150px] right-[-150px] md:right-[-100px] blur-3xl z-0" />
      <div className="absolute w-[300px] h-[300px] bg-[#FF4C4C]/15 rounded-full top-[150px] left-[-150px] md:left-[-100px] blur-3xl z-0" />


      <div className="w-full overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 text-center md:text-left">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-[#F4D03F] tracking-wide max-w-xl w-full break-words"
          >
            Unlocking <span className="text-[#F4D03F]">Collaboration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`text-base sm:text-lg text-[#B3B3B3] max-w-md mx-auto md:mx-0 ${styles.typewriter}`}
          >
            At <span className="font-semibold text-[#F4D03F]">UxV Media</span>, When ideas align, outcomes <br />multiply.
          </motion.p>
        </motion.div>

        {/* Right Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute w-[300px] h-[400px] bg-gradient-to-tr from-[#FF4C4C]/30 via-[#F4D03F]/20 to-transparent rounded-full blur-2xl z-0 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]" />

          <img
            src={HeroImg}
            alt="Hero Logo"
            className="relative z-10 max-w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;




















