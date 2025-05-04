import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backimage from "../assets/images/backgroundimage.jpg";
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
    description: "We connect your brand with top influencers...",
    icon: <Users size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Talent Management",
    description: "We define your brand's voice and manage talent...",
    icon: <Rocket size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Content Creation",
    description: "From ideation to execution, we create engaging content...",
    icon: <LayoutDashboard size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Podcast Management",
    description: "We help you create, manage, and grow your podcast...",
    icon: <TrendingUp size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Collaborations",
    description: "We build valuable connections...",
    icon: <Link2 size={28} className="text-[#F4D03F]" />,
  },
  {
    title: "Video Editing",
    description: "Our full-service video editing enhances storytelling...",
    icon: <Megaphone size={28} className="text-[#F4D03F]" />,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const total = services.length;

  return (
    <section
      id="services"
      ref={ref}
      className="relative h-[600vh] bg-[#0D0D0D] px-6 md:px-20"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10">
        <h2 className="text-3xl md:text-7xl font-bold mb-8 text-center text-white font-['Clash Grotesk']">
          Our <span className="text-red-500">Services</span>
        </h2>

        <div className="absolute left-[-150px] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] bg-[#FF2C2C] opacity-30 blur-[150px] rounded-full z-0" />

        <div className="relative w-full h-[60vh] flex items-center justify-center">
          {services.map((service, index) => {
            const start = index / total;
            const end = (index + 1) / total;

            const y = useTransform(scrollYProgress, [start, end], [0, -window.innerHeight]);
            const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
            const rotate = useTransform(scrollYProgress, [start, end], ["0deg", "-10deg"]);
            const zIndex = useTransform(scrollYProgress, [start, end], [total - index, total - index + 1]);

            return (
              <motion.div
  key={index}
  style={{
    y,
    opacity,
    scale,
    rotate,
    zIndex,
  }}
  className="absolute w-[320px] h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#333] text-white"
>
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-[#111111] bg-[url('https://www.ixpap.com/images/2021/05/red-wallpaper-ixpap-7.jpg')] bg-cover bg-center z-0"
  ></div>

  {/* Foreground content */}
  <div className="relative z-10 w-full h-full px-6 py-8 flex flex-col justify-center items-center text-center backdrop-brightness-[.85]">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
    <p className="text-sm text-gray-300">{service.description}</p>
  </div>
</motion.div>


            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
