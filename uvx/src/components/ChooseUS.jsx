import React from "react";
import { ShieldCheck, Brain, Smile, Sparkles, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <ShieldCheck size={28} className="text-[#F4D03F]" />,
    title: "Reliable & Transparent",
    description:
      "We build long-term trust with honest communication, clear goals, and real results.",
  },
  {
    icon: <Brain size={28} className="text-[#F4D03F]" />,
    title: "Creative Strategy",
    description:
      "Our team blends imagination and insights to develop brand-first strategies that deliver.",
  },
  {
    icon: <Smile size={28} className="text-[#F4D03F]" />,
    title: "Client-Centric Approach",
    description:
      "We listen, adapt, and execute every project with your vision and audience in mind.",
  },
  {
    icon: <Sparkles size={28} className="text-[#F4D03F]" />,
    title: "Impactful Design",
    description:
      "Every element we create is crafted to inspire action, loyalty, and recognition.",
  },
  {
    icon: <Globe size={28} className="text-[#F4D03F]" />,
    title: "Global Mindset",
    description:
      "We craft solutions that resonate across cultures, making your brand ready for a global stage.",
  },
  {
    icon: <Rocket size={28} className="text-[#F4D03F]" />,
    title: "Growth-Focused",
    description:
      "We don’t just build cool stuff — we build results. Our focus is always on scaling your success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Red Glow Effect */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FF4D00]/30 via-[#FF2D00] to-transparent rounded-full blur-3xl opacity-30 z-0" /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center mb-12"
            style={{ fontFamily: "'Northwell', cursive", color: "white", fontWeight: "normal" }}
          >
            Why Choose{" "}
            <span className="relative inline-block text-[#F4D03F]">
              UxV?
              <svg
                className="absolute -bottom-3 left-[50%] -translate-x-1/2 w-[90px] md:w-[110px] h-auto"
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
          </motion.h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            We're not just another agency — we're your edge in a noisy digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1C1C1C] rounded-lg hover:shadow-[0_0_20px_#F4D03F40]"
            >
              <div className="rounded-full p-4 bg-[#1C1C1C]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl mb-2 text-white" >
                  {item.title}
                </h4>
                <p className="text-[#B3B3B3]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;




