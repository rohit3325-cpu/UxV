import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" top-2 w-screen h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="top-1 max-w-7xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Content */}
        <div className="space-y-6 top-14">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting <span className="text-[#F4D03F]">Impactful</span><br />
            Digital Experiences
          </h1>

          <p className="text-[#B3B3B3] max-w-lg">
            At UvX, we blend creativity and strategy to build marketing solutions that connect, convert, and captivate your audience.
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
        <div className="flex justify-center md:justify-end">
          <img
            src="https://arcxp-prod.adage.com/resizer/v2/FHQGW2GOSZFB3PRQRRYAJ7BQE4.png?smart=true&auth=ede65f4f344fc1ffef60322b0403fb900e2417830cea2fc2b79cf008fd0de5e9&width=3000&height=1687" // Replace with your actual image
            alt="Marketing Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;





