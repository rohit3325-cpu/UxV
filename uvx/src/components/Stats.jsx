// src/components/Stats.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Clients Served", value: 25 },
  { label: "Campaigns Launched", value: 80 },
  { label: "Influencers Onboarded", value: 50 },
  { label: "Ad Reach (in millions)", value: 2, isMillion: true },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.3,     // 30% of the component must be visible
  });

  return (
    <section
      id="work"
      className="bg-[#F5F5F5] text-[#1C1C1C] py-24 px-6 md:px-20" // Light Background
      ref={ref}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#F4D03F]">Impact</span> in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-extrabold text-[#F4D03F]">
                {inView ? (
                  <CountUp end={item.value} duration={2.5} />
                ) : (
                  "0"
                )}
                {item.isMillion && "M"}
              </div>
              <p className="text-[#1C1C1C] text-sm text-center"> {/* Dark text for label */}
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
