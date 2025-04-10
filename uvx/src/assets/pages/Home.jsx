import React from "react";
import HeroSection from "../../components/Hero.jsx";
import ContactSection from "../../components/contactinfo.jsx";
import ServicesSection from "../../components/Services.jsx";
import WhyChooseUs from "../../components/ChooseUS.jsx";


const Home = () => {
    return (
      <>
        <HeroSection />
        
        <WhyChooseUs />
        <ServicesSection />
        <ContactSection /> 
      </>
    );
  };
  
  export default Home;