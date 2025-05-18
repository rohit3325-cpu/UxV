import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backimage from "../assets/images/backgroundimage.jpg";
import {
  Users,
  Rocket,
  LayoutDashboard,
  TrendingUp,
  Megaphone,
} from "lucide-react";
import Modal from "./modal"; // adjust if path is different

const services = [
  {
    title: "Influencer Marketing",
    description: "We connect your brand with top influencers...",
    icon: <Users size={28} className="text-[#F4D03F]" />,
    topCreators: [
  { name: "@creator1", image: backimage },
  { name: "@creator2", image: backimage } ,
   { name: "@creator2", image: backimage },
  { name: "@creator3", image: backimage }
    ]
  },
  {
    title: "Talent Management",
    description: "We define your brand's voice and manage talent...",
    icon: <Rocket size={28} className="text-[#F4D03F]" />,
    topCreators: [
  { name: "@creator1", image: "/images/creator1.jpg" },
  { name: "@creator2", image: "/images/creator2.jpg" },
   { name: "@creator2", image: "/images/creator2.jpg" },
  { name: "@creator3", image: "/images/creator3.jpg" }
]

  },
  {
    title: "Content Creation",
    description: "From ideation to execution, we create engaging content...",
    icon: <LayoutDashboard size={28} className="text-[#F4D03F]" />,
    topCreators: [
  { name: "@creator1", image: "/images/creator1.jpg" },
  { name: "@creator2", image: "/images/creator2.jpg" },
   { name: "@creator2", image: "/images/creator2.jpg" },
  { name: "@creator3", image: "/images/creator3.jpg" }
]

  },
  {
    title: "Podcast Management",
    description: "We help you create, manage, and grow your podcast...",
    icon: <TrendingUp size={28} className="text-[#F4D03F]" />,
    topCreators: [
  { name: "@creator1", image: "/images/creator1.jpg" },
  { name: "@creator2", image: "/images/creator2.jpg" },
   { name: "@creator2", image: "/images/creator2.jpg" },
  { name: "@creator3", image: "/images/creator3.jpg" }
]

  },
  {
    title: "Video Editing",
    description: "Our full-service video editing enhances storytelling...",
    icon: <Megaphone size={28} className="text-[#F4D03F]" />,
   topCreators: [
  { name: "@creator1", image: "/images/creator1.jpg" },
  { name: "@creator2", image: "/images/creator2.jpg" },
   { name: "@creator2", image: "/images/creator2.jpg" },
  { name: "@creator3", image: "/images/creator3.jpg" }
]

  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [modalData, setModalData] = useState({
    open: false,
    creators: [],
    title: "",
  });

  const openModal = (creators, title) => {
    setModalData({ open: true, creators, title });
  };

  const closeModal = () => {
    setModalData({ open: false, creators: [], title: "" });
  };

  const total = services.length;

  return (
    <section
      id="services"
      ref={ref}
      className="relative h-[600vh] bg-[#0D0D0D] px-6 md:px-20"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10">
        <motion.h2
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center mb-12"
          style={{
            fontFamily: "'Northwell', cursive",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Our{" "}
          <span className="relative inline-block text-red-500">
            Services
            <svg
              className="absolute -bottom-4.5 left-[40%] -translate-x-1/2 w-[120px] md:w-[160px] h-auto"
              viewBox="0 0 200 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M10 10 C60 0, 140 0, 190 10"
                stroke="#ef4444"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              />
              <motion.path
                d="M10 20 C60 10, 140 10, 190 20"
                stroke="#ef4444"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
              />
            </svg>
          </span>
        </motion.h2>

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
                style={{ y, opacity, scale, rotate, zIndex }}
                className="absolute flex flex-col md:flex-row items-center justify-center gap-6"
              >
                

                {/* Center Card */}
                <div className="w-[320px] h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#333] text-white relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${backimage})` }}
                  />
                  <div className="relative z-10 w-full h-full px-6 py-8 flex flex-col justify-center items-center text-center backdrop-brightness-[.85]">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {service.description}
                    </p>

                    <button
                      onClick={() =>
                        openModal(service.topCreators, service.title)
                      }
                      className="mt-5 px-4 py-2 bg-red-500 text-black font-medium rounded-full hover:bg-yellow-400 transition duration-300"
                    >
                      Top Creators
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalData.open}
        onClose={closeModal}
        creators={modalData.creators}
        title={modalData.title}
      />
    </section>
  );
};

export default ServicesSection;




