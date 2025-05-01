import React from "react";
import { motion } from "framer-motion"; 
import MainP from "../assets/images/hero988.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#F5F5F5] text-[#000000] flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 items-center">

        {/* Left - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Unlocking <span className="text-[#F4D03F]">Collaboration</span>
            </motion.span>
            <br />
            with U<span className="text-[#F4D03F]">x</span>V Media.
          </h1>

          <p className="text-[#1C1C1C] max-w-lg">
            At UxV, we blend creativity and strategy to build marketing solutions that connect, convert, and captivate your audience.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a
              href="#contact"
              className="bg-[#F4D03F] text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="border border-[#F4D03F] text-[#F4D03F] font-medium px-6 py-3 rounded-lg hover:bg-[#F4D03F] hover:text-black transition-all"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={MainP}
            alt="Marketing Illustration"
            className="w-full max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;










