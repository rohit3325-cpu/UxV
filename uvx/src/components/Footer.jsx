import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#F4D03F]">UxV</h2>
          <p className="text-[#333333]">
            Your growth partner in the digital world. Strategy. Execution. Results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#333333] text-sm">
            {["Home", "About", "Services", "Work", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#F4D03F] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media + WhatsApp */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-[#333333] mb-4 text-sm">Follow us for the latest insights:</p>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-[#F4D03F] transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#F4D03F] transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#F4D03F] transition"><Twitter size={20} /></a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919870100609?text=Hi%20UvX%20Media!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#E0E0E0] mt-10 pt-6 text-center text-sm text-[#333333]">
        © {new Date().getFullYear()} UxV Media. All rights reserved.
      </div>
    </footer>
  );
}


