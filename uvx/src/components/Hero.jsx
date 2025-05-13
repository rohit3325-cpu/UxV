import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImg from "../assets/images/home_logo.png";
import styles from "./Herosection.module.css";

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
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,76,76,0.12),rgba(244,208,63,0.08),#000000)]" />
      <div className="absolute w-[400px] h-[300px] bg-[#F4D03F]/20 rounded-full top-[-150px] right-[-150px] md:right-[-100px] blur-3xl z-0" />
      <div className="absolute w-[400px] h-[300px] bg-[#FF4C4C]/15 rounded-full top-[150px] left-[-150px] md:left-[-100px] blur-3xl z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 text-center md:text-left">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6 hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-[#F4D03F] tracking-wide max-w-xl"
          >
            Unlocking <span className="text-[#F4D03F]">Collaboration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className={`text-base sm:text-lg text-[#B3B3B3] max-w-md mx-auto md:mx-0 ${styles.typewriter}`}
          >
            At <span className="font-semibold text-[#F4D03F]">UxV Media</span>,
            When ideas align, outcomes <br /> multiply.
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative flex items-center justify-center md:justify-end hero-img"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,76,76,0.35)_0%,_rgba(244,208,63,0.2)_50%,_transparent_100%)] blur-[80px] z-0"
          />
          <div className="absolute w-[300px] h-[100px] bg-[#F4D03F]/20 rounded-full bottom-[-40px] blur-3xl z-0" />

          <motion.img
            src={HeroImg}
            alt="Hero Logo"
            style={{ scale, opacity }}
            className="relative z-10 max-w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] rounded-xl"
          />
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-[5]" />
    </section>
  );
};

export default HeroSection;






















