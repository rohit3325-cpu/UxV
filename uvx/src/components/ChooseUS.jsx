import React from "react";
import { ShieldCheck, Brain, Smile, Sparkles, Globe, Rocket } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={28} className="text-[#F4D03F]" />,
    title: "Reliable & Transparent",
    description: "We build long-term trust with honest communication, clear goals, and real results.",
  },
  {
    icon: <Brain size={28} className="text-[#F4D03F]" />,
    title: "Creative Strategy",
    description: "Our team blends imagination and insights to develop brand-first strategies that deliver.",
  },
  {
    icon: <Smile size={28} className="text-[#F4D03F]" />,
    title: "Client-Centric Approach",
    description: "We listen, adapt, and execute every project with your vision and audience in mind.",
  },
  {
    icon: <Sparkles size={28} className="text-[#F4D03F]" />,
    title: "Impactful Design",
    description: "Every element we create is crafted to inspire action, loyalty, and recognition.",
  },
  {
    icon: <Globe size={28} className="text-[#F4D03F]" />,
    title: "Global Mindset",
    description: "We craft solutions that resonate across cultures, making your brand ready for a global stage.",
  },
  {
    icon: <Rocket size={28} className="text-[#F4D03F]" />,
    title: "Growth-Focused",
    description: "We don’t just build cool stuff — we build results. Our focus is always on scaling your success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#1C1C1C] py-24 px-6 md:px-20"> {/* Light Background */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-[#F4D03F]">UxV</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            We're not just another agency — we're your edge in a noisy digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-4 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#EAEAEA] rounded-lg hover:shadow-[0_0_20px_#F4D03F40]" // Light hover effect
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-[#1C1C1C]">{item.description}</p> {/* Dark text for readability */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


