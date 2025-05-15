import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../../components/Hero.jsx";
import ContactSection from "../../components/contactinfo.jsx";
import ServicesSection from "../../components/Services.jsx";
import WhyChooseUs from "../../components/ChooseUS.jsx";
import Stats from "../../components/Stats.jsx";
import PartnersSection from "../../components/PartnerSection.jsx";
import BrandBanner from "../../components/Brandbanner.jsx";
import CaseStudies from "../../components/casestudy.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scroll");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />

      <CaseStudies />
      <WhyChooseUs />

      {/* Add an ID to enable scroll from footer link */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* <div className="bg-[#F4D03F] w-screen h-px bg-[#1C1C1C]"></div> */}

      <Stats />
      
      {/* Uncomment if needed */}
      {/* <PartnersSection /> */}
      {/* <BrandBanner /> */}

      <div className="bg-[#F4D03F] w-screen h-px bg-[#1C1C1C]"></div>

      {/* Add an ID to enable scroll from footer link */}
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
