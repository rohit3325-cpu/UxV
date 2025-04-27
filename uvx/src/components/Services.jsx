// import React, { useRef } from "react";
// import {
//   Users,
//   Rocket,
//   LayoutDashboard,
//   TrendingUp,
//   Link2,
//   Megaphone,
// } from "lucide-react";
// import { motion, useInView } from "framer-motion";

// const services = [
//   {
//     icon: <Users size={24} className="text-[#F4D03F]" />,
//     title: "Influencer Marketing",
//     description: "Strategic influencer collaborations that build brand trust and expand your reach.",
//   },
//   {
//     icon: <Rocket size={24} className="text-[#F4D03F]" />,
//     title: "Brand Strategy",
//     description: "We define your voice, values, and visuals to help you own your space in the market.",
//   },
//   {
//     icon: <LayoutDashboard size={24} className="text-[#F4D03F]" />,
//     title: "Content Creation",
//     description: "From storyboards to social posts — we create content that captivates and converts.",
//   },
//   {
//     icon: <TrendingUp size={24} className="text-[#F4D03F]" />,
//     title: "Paid Advertising",
//     description: "Data-driven ads with performance-focused results on Google, Meta, and beyond.",
//   },
//   {
//     icon: <Link2 size={24} className="text-[#F4D03F]" />,
//     title: "Collaborations",
//     description: "We connect your brand with creators, talent, and trendsetters who align with your identity.",
//   },
//   {
//     icon: <Megaphone size={24} className="text-[#F4D03F]" />,
//     title: "Campaign Management",
//     description: "Full-service campaign planning and execution for real impact and recognition.",
//   },
//   {
//     icon: <Megaphone size={24} className="text-[#F4D03F]" />,
//     title: "Campaign Management",
//     description: "Full-service campaign planning and execution for real impact and recognition.",
//   },
// ];

// const AnimatedItem = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "0px 0px -10% 0px",
//     once: false,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       transition={{ duration: 0.6, delay }}
//       className="flex items-start gap-6"
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <section id="services" className="w-full bg-[#F5F5F5] text-[#1C1C1C] py-24 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto space-y-16">

//         {/* Section Title and Description */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4 text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
//             <span className="text-[#1C1C1C]">What We <span className="text-[#F4D03F]">Offer</span></span>
//           </h2>

//           <p className="text-yellow text-lg max-w-2xl mx-auto">
//             From strategy to execution — we help brands grow through innovative marketing solutions.
//           </p>
//         </div>

//         {/* Services Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//           {/* Services List */}
//           <div className="space-y-12">
//             {services.map((service, idx) => (
//               <AnimatedItem key={idx} delay={idx * 0.1}>
//                 <div className="mt-1">{service.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#1C1C1C] mb-1">{service.title}</h3>
//                   <p className="text-[#1C1C1C]">{service.description}</p>
//                 </div>
//               </AnimatedItem>
//             ))}
//           </div>

//           {/* Image on the Right */}
//           {/* <div className="flex justify-center h- md:justify-end">
//             <img
//               src="image45.jpg" // Replace with the actual image URL
//               alt="Services "
//               className="w-full  max-w-md mg-b-5 rounded-lg shadow-lg object-contain"
//             />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import React from "react";
import { Users, Rocket, LayoutDashboard, TrendingUp, Link2, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Users size={24} className="text-[#F4D03F]" />,
    title: "Influencer Marketing",
    description: "We connect your brand with top influencers to boost trust and expand your reach through authentic collaborations.",
  },
  {
    icon: <Rocket size={24} className="text-[#F4D03F]" />,
    title: "Talent Management",
    description: "We define your brand's voice and manage talent to help you dominate your market segment.",
  },
  {
    icon: <LayoutDashboard size={24} className="text-[#F4D03F]" />,
    title: "Content Creation",
    description: "From ideation to execution, we create engaging content that resonates with your audience and drives conversions.",
  },
  {
    icon: <TrendingUp size={24} className="text-[#F4D03F]" />,
    title: "Podcast Management",
    description: "We help you create, manage, and grow your podcast with data-driven strategies and audience engagement techniques.",
  },
  {
    icon: <Link2 size={24} className="text-[#F4D03F]" />,
    title: "Collaborations",
    description: "We build valuable connections by linking your brand with creators, trendsetters, and collaborators that align with your identity.",
  },
  {
    icon: <Megaphone size={24} className="text-[#F4D03F]" />,
    title: "Video Editing",
    description: "Our full-service video editing enhances storytelling to create compelling content that captivates and engages your audience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-[#F5F5F5] text-[#1C1C1C] py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Title and Description */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
            <span className="text-[#1C1C1C]">What We <span className="text-[#F4D03F]">Offer</span></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our approach is simple — we provide creative, data-driven marketing solutions that deliver tangible results.
          </p>
        </div>

        {/* Services Layout - Row-wise (Horizontal) */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Services List */}
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-6 bg-white p-6 rounded-lg shadow-[0px_4px_15px_#F4D03F] hover:shadow-[0px_8px_20px_#F4D03F] transition-shadow w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1C1C1C]">{service.title}</h3>
              <p className="text-[#1C1C1C] text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
