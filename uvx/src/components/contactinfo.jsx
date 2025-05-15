import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#000000] text-white py-16 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Info */}
        <div>
         

<motion.h2
  initial={{ scale: 1.3, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
  className="text-3xl sm:text-5xl md:text-6xl leading-snug tracking-wide mb-6 font-normal"
  style={{ fontFamily: "'Kaushan Script', cursive", color: "white" }}
>
  Get in{" "}
  <span className="relative inline-block text-[#F4D03F]">
    Touch
    <svg
      className="absolute -bottom-4.5 right-[3%] -translate-x-0 w-[120px] md:w-[160px] h-auto"
      viewBox="0 0 200 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M10 10 C60 0, 140 0, 190 10"
        stroke="#F4D03F"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      />
      <motion.path
        d="M10 20 C60 10, 140 10, 190 20"
        stroke="#F4D03F"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
      />
    </svg>
  </span>
</motion.h2>

          <p className="text-[#B3B3B3] mb-6 text-sm">
            Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you soon.
          </p>

          <div className="space-y-4 text-[#B3B3B3] text-sm">
            <p><strong className="text-white">Email:</strong> hi@uxvmedia.com</p>
            <p><strong className="text-white">Phone:</strong> +91 98701 00609</p>
            
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          action="https://formspree.io/f/mnndjpzd"
          method="POST"
          className="space-y-6 bg-[#1C1C1C] p-8 rounded-2xl shadow-xl"
        >
          <div>
            <label className="block text-sm text-[#B3B3B3]">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 mt-1 rounded-lg bg-[#333333] text-white outline-none placeholder:text-[#999999]"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#B3B3B3]">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mt-1 rounded-lg bg-[#333333] text-white outline-none placeholder:text-[#999999]"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#B3B3B3]">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 mt-1 rounded-lg bg-[#333333] text-white outline-none placeholder:text-[#999999]"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#F4D03F] hover:bg-yellow-400 transition-all text-black px-6 py-3 rounded-xl w-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

