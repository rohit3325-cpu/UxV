import React from "react";
import { motion } from "framer-motion";

// Image Imports
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

const brands = [
  { name: "Kotak811", logo: KotakImage, link: "https://www.kotak811.com" },
  { name: "Paytm Money", logo: PaytmImage, link: "https://www.paytm.com" },
  { name: "Binance", logo: BinanceImage, link: "https://www.binance.com" },
  { name: "AngelOne", logo: AngelOneImage, link: "https://www.angelone.com" },
  { name: "Motilal Oswal", logo: Motilalimage, link: "https://www.motilaloswal.com" },
  { name: "LPU", logo: Lpulogo, link: "https://www.lpu.in" },
  { name: "Bajaj Finserv", logo: Bajaj, link: "https://www.bajajfinserv.in" },
  { name: "Univest", logo: UnivestImage, link: "https://www.univest.com" },
  { name: "Zebpay", logo: ZebpayImage, link: "https://www.zebpay.com" },
  { name: "Meesho", logo: Meshologo, link: "https://www.meesho.com" },
  { name: "Scripbox", logo: scripbox, link: "https://www.scripbox.com" },
  { name: "LPU", logo: Lpulogo, link: "https://www.lpu.in" },
  { name: "Bajaj Finserv", logo: Bajaj, link: "https://www.bajajfinserv.in" },
  { name: "Univest", logo: UnivestImage, link: "https://www.univest.com" },
];

const CaseStudies = () => {
  return (
    <div className="w-screen overflow-hidden bg-black py-10">
      {/* Header with Northwell font */}
      <motion.h2
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl leading-snug tracking-wide text-center mb-12"
        style={{ fontFamily: "'Northwell', cursive", color: "white", fontWeight: "normal" }}
      >
        Our Brand{" "}
        <span className="relative inline-block text-[#F4D03F]">
          Partners
          <svg
            className="absolute -bottom-4.5 left-[64%] -translate-x-1/2 w-[150px] md:w-[160px] h-auto"
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

      {/* Marquee of brand logos */}
      <div className="relative w-full overflow-x-hidden">
        <div className="animate-slide flex gap-12 w-max px-10">
          {[...brands, ...brands].map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#1A1A1A] shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-32 w-32 sm:h-34 sm:w-34 object-contain rounded-full"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Scrolling animation */}
      <style>{`
        .animate-slide {
          display: flex;
          animation: slideLeft 22s linear infinite;
          will-change: transform;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-70%);
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
