import React from "react";

const AboutSection = () => {
  return (
    <section className="w-screen min-h-screen bg-[#1A1A1A] text-white pt-24 pb-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Intro Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Are <span className="text-[#F4D03F]">UxV Media</span>
          </h1>
          <p className="text-[#CCCCCC] max-w-3xl mx-auto text-lg">
            At UxV, we blend design, strategy, and storytelling to help brands cut through the noise and make lasting impressions. We're not just a creative agency — we're your strategic partner in growth.
          </p>
        </div>

        {/* Our Story */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-center text-[#F4D03F]">Our Story</h3>
          <p className="text-[#CCCCCC] text-lg max-w-5xl mx-auto text-center">
            UxV Media was born from the belief that marketing should inspire, not interrupt. Founded by a team of dreamers and doers, we set out to create an agency that puts creativity and human connection at the core. From humble beginnings to partnering with global brands, our journey has been one of bold risks, wild ideas, and unwavering passion.
          </p>
        </div> 

        {/* What Makes Us Different */}
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Creativity First",
              desc: "We challenge the ordinary and push boundaries to develop work that’s bold, original, and purpose-driven."
            },
            {
              title: "Results That Matter",
              desc: "Every design, campaign, and strategy we deliver is backed by data and focused on your goals."
            },
            {
              title: "People Over Profits",
              desc: "We value long-term relationships with our clients and teammates — because people come first, always."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#2A2A2A] p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-[#F4D03F] mb-2">{item.title}</h4>
              <p className="text-[#CCCCCC]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Join Us */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h3 className="text-3xl font-semibold mb-4 text-[#F4D03F]">Want to Work With Us?</h3>
          <p className="text-[#CCCCCC] text-lg mb-6">
            Whether you're a brand looking to make your mark or a creative mind ready to change the game — we’d love to hear from you. Let’s build something legendary together.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#F4D03F] text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;





