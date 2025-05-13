import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#000000] text-white py-16 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 font-['Clash Grotesk']">
            Get in <span className="text-[#F4D03F]">Touch</span>
          </h2>
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

