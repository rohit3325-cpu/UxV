import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-screen min-h-screen bg-[#F5F5F5] text-[#000000] flex items-center justify-center pt-20 md:pt-32" // Adjusted pt-20 for mobile and pt-32 for desktop
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">

        {/* Left - Content */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unlocking <span className="text-[#F4D03F]">Collaborative</span><br />
            with U<span className="text-[#F4D03F]">x</span>V Media.<br />
          </h1>

          <p className="text-[#1C1C1C] max-w-lg">
            At UxV, we blend creativity and strategy to build marketing solutions that connect, convert, and captivate your audience.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 justify-center md:justify-start">
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
        <div className="flex justify-center h-full md:justify-end">
          <img
            src="mainphoto.png" // Replace with your actual image
            alt="Marketing Illustration"
            className="w-full h-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;









