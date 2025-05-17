// src/components/Stats.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients Served", value: 25 },
  { label: "Campaigns Launched", value: 80 },
  { label: "Influencers Onboarded", value: 50 },
  { label: "Ad Reach (in millions)", value: 2, isMillion: true },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="work"
      className="bg-[#0F0F0F] text-white py-24 px-6 md:px-20"
      ref={ref}
    >
      <div className="border border-white rounded-2xl p-10 md:p-12 bg-[#1A1A1A] shadow-md">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center"
          style={{ fontFamily: "'Northwell', cursive", color: "white", fontWeight: "normal" }}
        >
          Our impact in{" "}
          <span className="relative inline-block text-[#F4D03F]">
            numbers
            <svg
              className="absolute -bottom-4.5 left-[60%] -translate-x-1/2 w-[120px] md:w-[160px] h-auto"
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

        {/* Stats Box */}
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-extrabold text-[#F4D03F] flex items-baseline gap-1">
                  {inView ? (
                    <>
                      <CountUp end={item.value} duration={2.5} />
                      <span className="text-2xl align-super">
                        {item.isMillion ? "M+" : "+"}
                      </span>
                    </>
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-[#CCCCCC] text-sm text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#CCCCCC] text-4xl text-center mt-4">
             And still counting...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;



