import React, { useRef } from "react";
import {
  Users,
  Rocket,
  LayoutDashboard,
  TrendingUp,
  Link2,
  Megaphone,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: <Users size={24} className="text-[#F4D03F]" />,
    title: "Influencer Marketing",
    description: "Strategic influencer collaborations that build brand trust and expand your reach.",
  },
  {
    icon: <Rocket size={24} className="text-[#F4D03F]" />,
    title: "Brand Strategy",
    description: "We define your voice, values, and visuals to help you own your space in the market.",
  },
  {
    icon: <LayoutDashboard size={24} className="text-[#F4D03F]" />,
    title: "Content Creation",
    description: "From storyboards to social posts — we create content that captivates and converts.",
  },
  {
    icon: <TrendingUp size={24} className="text-[#F4D03F]" />,
    title: "Paid Advertising",
    description: "Data-driven ads with performance-focused results on Google, Meta, and beyond.",
  },
  {
    icon: <Link2 size={24} className="text-[#F4D03F]" />,
    title: "Collaborations",
    description: "We connect your brand with creators, talent, and trendsetters who align with your identity.",
  },
  {
    icon: <Megaphone size={24} className="text-[#F4D03F]" />,
    title: "Campaign Management",
    description: "Full-service campaign planning and execution for real impact and recognition.",
  },
];

const AnimatedItem = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -10% 0px",
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-6"
    >
      {children}
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-[#0f0f0f] text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
  <span className="text-white">What We <span className="text-[#F4D03F]">Offer</span></span>
</h2>


          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            From strategy to execution — we help brands grow through innovative marketing solutions.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <AnimatedItem key={idx} delay={idx * 0.1}>
              <div className="mt-1">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-[#B3B3B3]">{service.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

