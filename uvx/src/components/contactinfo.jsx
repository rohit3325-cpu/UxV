import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white text-black py-16 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Get in <span className="text-[#F4D03F]">Touch</span>
          </h2>
          <p className="text-[#4A4A4A] mb-6">
            Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you soon.
          </p>

          <div className="space-y-4 text-[#4A4A4A]">
            <p><strong>Email:</strong> hi@uxvmedia.com</p>
            <p><strong>Phone:</strong> +91 98701 00609</p>
            <p><strong>Location:</strong>BMDI Creators Pvt Ltd <br />
            13 (Basement) Vinoba Puri Delhi -110024</p>
            
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          action="https://formspree.io/f/mvgkdzya"
          method="POST"
          className="space-y-6 bg-[#F4F4F4] p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block text-sm text-[#4A4A4A]">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 mt-1 rounded-lg bg-[#E6E6E6] text-black outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#4A4A4A]">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mt-1 rounded-lg bg-[#E6E6E6] text-black outline-none"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#4A4A4A]">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 mt-1 rounded-lg bg-[#E6E6E6] text-black outline-none"
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


