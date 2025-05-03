import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Rocket,
  LayoutDashboard,
  TrendingUp,
  Link2,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Influencer Marketing",
    description:
      "We connect your brand with top influencers to boost trust and expand your reach through authentic collaborations.",
    icon: <Users size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Talent Management",
    description:
      "We define your brand's voice and manage talent to help you dominate your market segment.",
    icon: <Rocket size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Content Creation",
    description:
      "From ideation to execution, we create engaging content that resonates with your audience and drives conversions.",
    icon: <LayoutDashboard size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Podcast Management",
    description:
      "We help you create, manage, and grow your podcast with data-driven strategies and audience engagement techniques.",
    icon: <TrendingUp size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Collaborations",
    description:
      "We build valuable connections by linking your brand with creators, trendsetters, and collaborators that align with your identity.",
    icon: <Link2 size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Video Editing",
    description:
      "Our full-service video editing enhances storytelling to create compelling content that captivates and engages your audience.",
    icon: <Megaphone size={28} className="text-[#F4D03F]" />,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      ref={ref}
      className="relative h-[600vh] bg-cover bg-center bg-no-repeat text-white px-6 md:px-20"
      style={{
        backgroundImage: 'url("/your-background-image.jpg")', // optional
      }}
      
    >
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10">
        <h2 className="text-3xl md:text-7xl font-bold mb-8 font-['Clash Grotesk'] tracking-tight text-center text-white">
          Our <span className="text-red-500">Services</span>
        </h2>

        <div className="relative w-full h-[60vh]">
          {services.map((service, index) => {
            const total = services.length;
            const start = index / total;
            const end = (index + 1) / total;

            const y = useTransform(scrollYProgress, [start, end], [100, -100]);
            const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const rotate = useTransform(scrollYProgress, [start, end], [-10, 0]); // Tilt to straight

            return (
              <motion.div
                key={index}
                style={{
                  y,
                  scale,
                  opacity,
                  rotate,
                  zIndex: index + 1,
                }}
                className="absolute inset-0 m-auto w-[300px] h-[420px] bg-black/70 rounded-3xl shadow-2xl 
                           px-6 py-8 flex flex-col justify-center items-center text-center border border-[#333] backdrop-blur-md"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-300 max-w-[280px]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

