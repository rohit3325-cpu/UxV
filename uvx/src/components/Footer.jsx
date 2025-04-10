import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#F4D03F]">UvX</h2>
          <p className="text-[#B3B3B3]">
            Your growth partner in the digital world. Strategy. Execution. Results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm">
            {["Home", "About", "Services", "Work", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-[#F4D03F] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-[#B3B3B3] mb-4 text-sm">Follow us for the latest insights:</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#F4D03F] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#F4D03F] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#F4D03F] transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1C1C1C] mt-10 pt-6 text-center text-sm text-[#B3B3B3]">
        © {new Date().getFullYear()} UvX Media. All rights reserved.
      </div>
    </footer>
  );
}
