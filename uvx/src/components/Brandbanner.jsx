import React from "react";
import KotakImage from "../assets/images/kotakbanner.webp";
import PaytmImage from "../assets/images/paytmbanner.webp";
import BinanceImage from "../assets/images/binancebanner.webp";
import AngelOneImage from "../assets/images/angelbanner.webp";
import UnivestImage from "../assets/images/univest.webp";
import ZebpayImage from "../assets/images/Policybazaar_Logo.gif";


const brands = [
  {
    name: "Kotak811",
    logo: KotakImage,
    link: "https://www.nike.com",
  },
  {
    name: "Paytm Money",
    logo: PaytmImage,
    link: "https://www.paytm.com",
  },
  {
    name: "Binance",
    logo: BinanceImage,
    link: "https://www.binance.com",
  },
  {
    name: "AngelOne",
    logo: AngelOneImage,
    link: "https://www.angelone.com",
  },
  {
    name: "Univest",
    logo: UnivestImage,
    link: "https://www.univest.com",
  },
  {
    name: "Zebpay",
    logo: ZebpayImage,
    link: "https://www.zebpay.com",
  },
  {
    name: "Kotak811",
    logo: KotakImage,
    link: "https://www.nike.com",
  },
  {
    name: "Paytm Money",
    logo: PaytmImage,
    link: "https://www.paytm.com",
  },
  {
    name: "Binance",
    logo: BinanceImage,
    link: "https://www.binance.com",
  },
  {
    name: "AngelOne",
    logo: AngelOneImage,
    link: "https://www.angelone.com",
  },
  {
    name: "Univest",
    logo: UnivestImage,
    link: "https://www.univest.com",
  },
  {
    name: "Policybazaar",
    logo: ZebpayImage,
    link: "https://www.policybazaar.com",
  },
 
];

const BrandBanner = () => {
  return (
    <div className="w-screen overflow-hidden bg-[#F5F5F5] py-10">
      <h2 className="text-center text-black text-2xl md:text-3xl font-semibold mb-6">
          Brands We've Collaborated With
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
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto object-contain mx-4 transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .animate-slide {
          display: flex;
          animation: slideLeft 20s linear infinite;
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

export default BrandBanner;





