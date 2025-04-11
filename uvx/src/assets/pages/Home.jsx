import React from "react";
import HeroSection from "../../components/Hero.jsx";
import ContactSection from "../../components/contactinfo.jsx";
import ServicesSection from "../../components/Services.jsx";
import WhyChooseUs from "../../components/ChooseUS.jsx";
import Stats from "../../components/Stats.jsx";
import PartnersSection from "../../components/PartnerSection.jsx";
import BrandBanner from "../../components/Brandbanner.jsx";


const Home = () => {
    return (
      <>
        <HeroSection />
        
        <WhyChooseUs />
        <ServicesSection />
        <div className=" bg-[#F4D03F] w-screen h-px bg-[#1C1C1C] "></div>

        <Stats />
        <PartnersSection />
        <BrandBanner />
        <div className=" bg-[#F4D03F] w-screen h-px bg-[#1C1C1C] "></div>
        <ContactSection /> 
      </>
    );
  };
  
  export default Home;