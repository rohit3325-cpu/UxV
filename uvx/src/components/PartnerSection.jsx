import React from "react";
import { Star } from "lucide-react";

const companies = [
  {
    name: "Nike",
    logo: "https://images-platform.99static.com//loM1EGLM7iHwC7g7UYaw1yoauD8=/47x0:955x908/fit-in/500x500/99designs-contests-attachments/50/50962/attachment_50962357",
    review: "UvX Media has transformed our digital presence through influencer campaigns that felt authentic and drove real engagement.",
    rating: 5,
  },
  {
    name: "Spotify",
    logo: "https://1000logos.net/wp-content/uploads/2022/04/Garnier-logo-500x281.png",
    review: "Working with UvX Media was seamless — their campaign strategy and execution were top-notch.",
    rating: 4,
  },
  {
    name: "Google",
    logo: "https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-desktop.jpg",
    review: "Their content creation and paid ads delivered measurable ROI. Highly recommend their team!",
    rating: 5,
  },
];

const CompaniesSection = () => {
  return (
    <section className="bg-[#F5F5F5] text-[#1C1C1C] py-24 px-6 md:px-20"> {/* Light background */}
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-[#F4D03F]">Partners Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-6 space-y-6 shadow-md hover:shadow-[0_4px_6px_rgba(244,208,63,0.6)]  transition-all duration-300" 
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 mx-auto object-contain"
              />
              <p className="text-[#1C1C1C] text-sm">{company.review}</p> {/* Dark text for reviews */}
              <div className="flex justify-center gap-1">
                {[...Array(company.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#F4D03F] fill-[#F4D03F]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;

