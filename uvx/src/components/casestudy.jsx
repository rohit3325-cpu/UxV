import React from "react";
import KotakImage from "../assets/images/kotak-mahindra.webp";
import PaytmImage from "../assets/images/paytmbanner33.jpg";
import BinanceImage from "../assets/images/Binance33.png";
import AngelOneImage from "../assets/images/AngelOne2.png";
import UnivestImage from "../assets/images/univest4.png";
import ZebpayImage from "../assets/images/Zebpay2.png";

export default function CaseStudies() {
  const caseStudies = [
    { image: KotakImage },
    { image: PaytmImage },
    { image: BinanceImage },
    { image: AngelOneImage },
    { image: UnivestImage },
    { image: ZebpayImage },
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

      {/* Title and description */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-white">Case</span>{" "}
          <span className="text-[#F4D03F]">Studies</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Real brands, real results. See how UvX Media drives impact.
        </p>
      </div>

      {/* Revolving Circular Layout */}
      <div className="relative z-10 w-full h-[400px] md:h-[500px] flex justify-center items-center overflow-visible">
        <div
          className="absolute w-full h-full flex justify-center items-center"
          style={{
            animation: "revolve 30s linear infinite",
          }}
        >
          {caseStudies.map((caseStudy, index) => {
            const angle = (index * 360) / caseStudies.length;

            return (
              <div
                key={index}
                className={`
                  absolute 
                  w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                  bg-[#1A1A1A] rounded-full p-2 sm:p-3 md:p-4 
                  shadow-xl hover:shadow-[#F4D03F]/30 
                  transition duration-300 ease-in-out
                `}
                style={{
                  transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-full bg-black flex items-center justify-center">
                  <img
                    src={caseStudy.image}
                    alt={`Case study image ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes revolve {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}



