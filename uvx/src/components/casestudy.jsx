import KotakImage from "../assets/images/kotak-mahindra.webp";
import PaytmImage from "../assets/images/Paytm-Logo.wine.webp";
import BinanceImage from "../assets/images/Binance.webp";
import AngelOneImage from "../assets/images/AngelOne3.png";
import UnivestImage from "../assets/images/univest3.png";

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
      client: "cc",
      summary: " .",
      image: "--", 
    },
  ];

  return (
    <section id="case-studies" className="w-full py-24 px-6 md:px-12" style={{ backgroundColor: "#EAEAEA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-center relative inline-block after:block after:w-full after:h-[2px] after:bg-[#F4D03F] after:mt-2">
            <span className="text-black">Case</span> <span className="text-[#F4D03F]">Studies</span>
          </h2>
          <p className="text-[#1C1C1C] max-w-2xl mx-auto text-base md:text-lg">
            Real brands, real results. See how UxV Media drives impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.client}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{caseStudy.client}</h3>
                <p className="text-[#B3B3B3] text-sm">{caseStudy.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  