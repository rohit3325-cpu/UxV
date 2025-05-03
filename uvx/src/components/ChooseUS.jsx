import React from "react";
import {
  ShieldCheck,
  Brain,
  Smile,
  Sparkles,
  Globe,
  Rocket,
} from "lucide-react";

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
    <section className="relative w-full bg-[#0D0D0D] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Red Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FF4D00]/30 via-[#FF2D00] to-transparent rounded-full blur-3xl opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-5xl font-bold text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
              Why Choose <span className="text-[#F4D03F]">UvX</span>
            </span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            We're not just another agency — we're your edge in a noisy digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-4 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#1C1C1C] rounded-lg hover:shadow-[0_0_20px_#F4D03F40]"
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
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



