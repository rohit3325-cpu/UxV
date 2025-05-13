import React from "react";
import KotakImage from "../assets/images/kotak-mahindra.webp";
import PaytmImage from "../assets/images/paytmbanner33.jpg";
import BinanceImage from "../assets/images/binancebanner33.jpg";
import AngelOneImage from "../assets/images/Angel one.webp";
import UnivestImage from "../assets/images/univest.webp";
import ZebpayImage from "../assets/images/zebpay.webp";
import Motilalimage from "../assets/images/motilal.png";
import Meshologo from "../assets/images/Meesho_logo.webp";
import Lpulogo from "../assets/images/lpu.webp";
import Bajaj from "../assets/images/BAJAJFINSV.webp";
import scripbox from "../assets/images/scripbox.png";

const logos = [
  { name: "Kotak811", logo: KotakImage, link: "https://www.kotak811.com" },
  { name: "Paytm Money", logo: PaytmImage, link: "https://www.paytm.com" },
  { name: "Binance", logo: BinanceImage, link: "https://www.binance.com" },
  { name: "AngelOne", logo: AngelOneImage, link: "https://www.angelone.com" },
  { name: "Motilaloswal", logo: Motilalimage, link: "https://www.motilaloswal.com" },
  
  {name: "LPU", logo: Lpulogo, link: "https://www.lpu.in" },
  { name: "Bajaj Finserv", logo: Bajaj, link: "https://www.bajajfinserv.in" },

  
];
const logos2 = [
  { name: "AngelOne", logo: AngelOneImage, link: "https://www.angelone.com" },
  { name: "Univest", logo: UnivestImage, link: "https://www.univest.com" },
  { name: "Zebpay", logo: ZebpayImage, link: "https://www.zebpay.com" },
  { name: "Meesho", logo: Meshologo, link: "https://www.meesho.com" },
  { name: "Motilalimage", logo: KotakImage, link: "https://www.motilaloswal.com" },
 
  { name: "Binance", logo: BinanceImage, link: "https://www.binance.com" },
   { name: "Scripbox", logo: scripbox, link: "https://www.scripbox.com" }, 
];

export default function CaseStudies() {
  const duplicated = [...logos, ...logos, ...logos]; // Duplicate the logos for continuous scrolling
  const duplicates2 = [...logos2, ...logos2,...logos2]; // Duplicate the logos for continuous scrolling
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
         <h2 className="text-4xl font-bold mb-4">
            <span className="text-5xl font-bold text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
              Brands <span className="text-[#F4D03F]">Collaborated</span>
            </span>
          </h2>
        <p className="text-gray-400 text-lg">
          Brands that trust UxV Media to deliver impactful results.
        </p>
      </div>

      {/* Two Marquee Rows */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-10">
        {/* Row 1 - Scroll Left */}
        <div className="relative overflow-hidden w-full">
          <div className="mask-gradient absolute inset-0 pointer-events-none z-10" />
          <div className="marquee-left">
            {duplicated.map((brand, index) => (
              <a
                key={`top-${index}`}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-wrapper"
              >
                <div className="logo-circle">
                  <img src={brand.logo} alt={brand.name} className="logo-image" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative overflow-hidden w-full">
          <div className="mask-gradient absolute inset-0 pointer-events-none z-10" />
          <div className="marquee-right">
            {duplicates2.map((brand, index) => (
              <a
                key={`bottom-${index}`}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-wrapper"
              >
                <div className="logo-circle">
                  <img src={brand.logo} alt={brand.name} className="logo-image" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .marquee-left,
        .marquee-right {
          display: flex;
          gap: 3rem;
          width: max-content;
        }

        .marquee-left {
          animation: scrollLeft 30s linear infinite;
        }

        .marquee-right {
          animation: scrollRight 30s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .logo-wrapper {
          flex-shrink: 0;
        }

        .logo-circle {
          background-color: #1A1A1A;
          border-radius: 9999px;
          padding: 1rem;
          width: 6rem;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 9999px;
        }

        .mask-gradient {
          mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          mask-repeat: no-repeat;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          background: rgba(0,0,0,0);
        }
      `}</style>
    </section>
  );
}
