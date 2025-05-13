import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-[#000000] text-[#F5F5F5] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Left - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/?scroll=home" className="text-[#F4D03F] hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-[#F4D03F] hover:underline">About</Link></li>
            <li><Link to="/?scroll=services" className="text-[#F4D03F] hover:underline">Services</Link></li>
            <li><Link to="/?scroll=work" className="text-[#F4D03F] hover:underline">Work</Link></li>
            <li><Link to="/?scroll=contact" className="text-[#F4D03F] hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Center */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#F4D03F]">UvX</h2>
          <p className="text-[#B3B3B3] text-sm">Unlocking collaboration & growth.</p>
        </div>

        {/* Right */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
          <p className="text-[#B3B3B3] mb-4 text-sm">Follow us for the latest insights:</p>
          <div className="flex justify-center md:justify-end gap-4 mb-4 text-[#F5F5F5]">
            <a href="#" className="hover:text-[#F4D03F] transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#F4D03F] transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#F4D03F] transition"><Twitter size={20} /></a>
          </div>
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

      <div className="border-t border-[#1C1C1C] mt-10 pt-6 text-center text-sm text-[#B3B3B3]">
        © {new Date().getFullYear()} UvX Media. All rights reserved.
      </div>
    </footer>
  );
}

