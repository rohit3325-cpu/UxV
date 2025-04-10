// src/components/Stats.jsx
import React from "react";

const stats = [
  { label: "Clients Served", value: 120 },
  { label: "Campaigns Launched", value: 250 },
  { label: "Influencers Onboarded", value: 75 },
  { label: "Ad Reach (in millions)", value: 5 },
];

const Stats = () => {
  return (
    <section id="stats" className="bg-[#0f0f0f] text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#F4D03F]">Impact</span> in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-extrabold text-[#F4D03F]">
                {item.value}
                {item.label.includes("millions") && "M"}
              </div>
              <p className="text-[#B3B3B3] text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
