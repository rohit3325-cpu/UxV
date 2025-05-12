import React from "react";
import KotakImage from "../assets/images/kotak-mahindra.webp";
import PaytmImage from "../assets/images/paytmbanner33.jpg";
import BinanceImage from "../assets/images/Binance33.png";
import AngelOneImage from "../assets/images/AngelOne2.png";
import UnivestImage from "../assets/images/univest4.png";
import ZebpayImage from "../assets/images/Zebpay2.png";

const logos = [
  KotakImage,
  PaytmImage,
  BinanceImage,
  AngelOneImage,
  UnivestImage,
  ZebpayImage,
  PaytmImage,
  BinanceImage,
  AngelOneImage,
];

const testimonials = [
  {
    logo: KotakImage,
    name: "Kotak811",
    text: "UxV Media helped us 10x our digital outreach through creative influencer strategies.",
  },
  {
    logo: BinanceImage,
    name: "Binance",
    text: "Their campaign was a game-changer in our India launch strategy.",
  },
  {
    logo: UnivestImage,
    name: "Univest",
    text: "The team at UxV is professional, creative, and results-driven.",
  },
];

export default function CaseStudies() {
  const columns = [
    "up",
    "down",
    "up",
    "down", // four columns: up-down-up-down
  ];

  return (
    <section
      id="case-studies"
      className="relative w-full py-24 px-6 md:px-12 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1C1C1C, #0D0D0D)",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-[#FF2C2C] rounded-full blur-[200px] opacity-30 z-0" />

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-white">Case</span>{" "}
          <span className="text-[#F4D03F]">Studies</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Real brands, real results. See how UxV Media drives impact.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Logos in 4 columns */}
        <div className="flex justify-center gap-4 h-[400px] overflow-hidden">
          {columns.map((direction, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col items-center ${
                direction === "up" ? "animate-up" : "animate-down"
              }`}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={`${colIndex}-${idx}`}
                  className="w-20 h-20 bg-[#1A1A1A] rounded-full p-3 shadow-md mb-6 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`logo-${idx}`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right - Testimonials */}
        <div className="space-y-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md hover:shadow-[#F4D03F]/60 transition"
            >
              <div className="flex items-center mb-4 gap-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-12 h-12 object-contain rounded-full"
                />
                <h4 className="text-xl font-semibold">{item.name}</h4>
              </div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes moveDown {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(50%);
          }
        }

        .animate-up {
          animation: moveUp 15s linear infinite;
        }

        .animate-down {
          animation: moveDown 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
