import React from "react";
import KotakImage from "../assets/images/kotak-mahindra.webp";
import PaytmImage from "../assets/images/paytmbanner33.jpg";
import BinanceImage from "../assets/images/Binance33.png";
import AngelOneImage from "../assets/images/AngelOne2.png";
import UnivestImage from "../assets/images/univest4.png";
import ZebpayImage from "../assets/images/Zebpay2.png";

export default function CaseStudies() {
  const caseStudies = [
    {
      client: "Kotak811",
      summary: "Increased app engagement with Gen Z-focused campaigns.",
      image: KotakImage,
    },
    {
      client: "Paytm Money",
      summary: "Boosted user growth through performance marketing.",
      image: PaytmImage,
    },
    {
      client: "Binance",
      summary: "Expanded brand presence with influencer partnerships.",
      image: BinanceImage,
    },
    {
      client: "AngelOne",
      summary: "Drove new account openings with targeted ads.",
      image: AngelOneImage,
    },
    {
      client: "Univest",
      summary: "Improved app retention with community-driven marketing.",
      image: UnivestImage,
    },
    {
      client: "Zebpay",
      summary: "Enhanced brand visibility through strategic campaigns.",
      image: ZebpayImage,
    },
  ];

  return (
    <section
      id="case-studies"
      className="relative w-full py-32 px-6 md:px-12 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1C1C1C, #0D0D0D)",
      }}
    >
      {/* Red glow background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-[#FF2C2C] rounded-full blur-[200px] opacity-30 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-white">Case</span>{" "}
          <span className="text-[#F4D03F]">Studies</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Real brands, real results. See how UvX Media drives impact.
        </p>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-3xl p-6 shadow-xl hover:shadow-[#F4D03F]/30 transition duration-300 ease-in-out"
          >
            <div className="w-full h-40 mb-4 overflow-hidden rounded-2xl bg-black flex items-center justify-center">
              <img
                src={caseStudy.image}
                alt={caseStudy.client}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {caseStudy.client}
            </h3>
            <p className="text-sm text-gray-400">{caseStudy.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
