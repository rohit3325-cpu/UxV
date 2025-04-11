import React from "react";

const brands = [
  {
    name: "Nike",
    logo: "https://1000logos.net/wp-content/uploads/2020/04/Garnier-Logo-500x313.jpg",
    link: "https://www.nike.com",
  },
  {
    name: "Apple",
    logo: "https://marketplace.canva.com/EAFSRVOchFk/1/0/1600w/canva-blue-minimalist-mountain-tooth-logo-design-ZEsuedWE0vQ.jpg",
    link: "https://www.apple.com",
  },
  {
    name: "Coca Cola",
    logo: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/567/Spotify_Logo_RGB_Green-512.png",
    link: "https://www.coca-cola.com",
  },
  {
    name: "Samsung",
    logo: "https://cdn.logojoy.com/wp-content/uploads/20240521123806/alexander-shatov-w-qqwn5O-4I-unsplash-600x450.jpg",
    link: "https://www.samsung.com",
  },
  {
    name: "Adidas",
    logo: "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/960x540/689347.jpg",
    link: "https://www.adidas.com",
  },
];

const BrandBanner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#1C1C1C] py-10">
      <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-6">
        Brands We've Collaborated With
      </h2>

      <div className="relative w-full">
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
                className="h-16 w-auto object-contain transition-transform duration-300"
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

        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default BrandBanner;




