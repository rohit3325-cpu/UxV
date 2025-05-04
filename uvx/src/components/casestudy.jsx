// import React from "react";
// import KotakImage from "../assets/images/kotak-mahindra.webp";
// import PaytmImage from "../assets/images/paytmbanner33.jpg";
// import BinanceImage from "../assets/images/Binance33.png";
// import AngelOneImage from "../assets/images/AngelOne2.png";
// import UnivestImage from "../assets/images/univest4.png";
// import ZebpayImage from "../assets/images/Zebpay2.png";

// export default function CaseStudies() {
//   const caseStudies = [
//     { image: KotakImage },
//     { image: PaytmImage },
//     { image: BinanceImage },
//     { image: AngelOneImage },
//     { image: UnivestImage },
//     { image: ZebpayImage },
//   ];

//   return (
//     <section
//       id="case-studies"
//       className="relative w-full py-24 px-6 md:px-12 text-white overflow-hidden"
//       style={{
//         background: "radial-gradient(circle at top, #1C1C1C, #0D0D0D)",
//       }}
//     >
//       {/* Red glow */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-[#FF2C2C] rounded-full blur-[200px] opacity-30 z-0" />

//       {/* Heading */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-5xl font-extrabold mb-4">
//           <span className="text-white">Case</span>{" "}
//           <span className="text-[#F4D03F]">Studies</span>
//         </h2>
//         <p className="text-gray-400 text-lg">
//           Real brands, real results. See how UxV Media drives impact.
//         </p>
//       </div>

//       {/* Rotating Layout */}
//       <div className="relative z-10 w-full h-[450px] flex justify-center items-center overflow-hidden">
//         <div
//           className="absolute w-full h-full flex justify-center items-center"
//           style={{
//             animation: "revolve 30s linear infinite",
//           }}
//         >
//           {caseStudies.map((caseStudy, index) => {
//             const angle = (index * 360) / caseStudies.length;
//             return (
//               <div
//               key={index}
//               className="absolute w-32 h-32 bg-[#1A1A1A] rounded-full p-3 shadow-xl hover:shadow-[#F4D03F]/30 transition duration-300 ease-in-out"
//               style={{
//                 transform: `rotate(${angle}deg) translateX(160px)`,
//               }}
//             >
//               <div
//                 className="w-full h-full overflow-hidden rounded-full bg-black flex items-center justify-center"
//                 style={{
//                   transform: `rotate(-${angle}deg)`, // This keeps the logo upright
//                 }}
//               >
//                 <img
//                   src={caseStudy.image}
//                   alt={`Case study image ${index + 1}`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
            
              
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes revolve {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


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
];

const testimonials = [
  {
    logo: KotakImage,
    name: "Kotak Mahindra",
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
  return (
    <section
      id="case-studies"
      className="relative w-full py-24 px-6 md:px-12 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1C1C1C, #0D0D0D)",
      }}
    >
      {/* Glow */}
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

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side – Logos Floating */}
        <div className="flex flex-col items-center gap-10">
          {logos.map((img, index) => (
            <div
              key={index}
              className={`w-24 h-24 bg-[#1A1A1A] rounded-full p-3 shadow-lg hover:shadow-[#F4D03F]/40 transition duration-300 animate-float${(index % 3) + 1}`}
            >
              <img
                src={img}
                alt={`logo-${index}`}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Right Side – Testimonials */}
        <div className="space-y-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md hover:shadow-[#F4D03F]/40 transition"
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

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float1 {
          animation: float1 3.5s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 4s ease-in-out infinite;
        }

        .animate-float3 {
          animation: float3 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
