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
    <div className="w-screen overflow-hidden bg-[#0F0F0F] py-10">
      
      <h2 className="text-5xl  text-center font-bold mb-4">
            <span className="text-5xl font-bold text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
              <span className="text-white">Brands</span> <span className="text-[#F4D03F]">collaborated</span>
            </span>
          </h2>
      

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
                     className="h-24 w-24 sm:h-20 sm:w-20 object-contain rounded-full"
/>

              </div>
            </a>
          ))}
        </div>
      </div>

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
