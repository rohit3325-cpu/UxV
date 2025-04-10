import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-2 left-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="UxVlogo.png" alt="UxV Media Logo" className="w-9 h-9 object-contain" />
          <span className="text-white font-semibold text-xl tracking-wide">
            U<span className="text-yellow-400">x</span>V Media
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li><Link to="/" className="text-[#B3B3B3] hover:text-[#F4D03F] transition">Home</Link></li>
          <li><Link to="/about" className="text-[#B3B3B3] hover:text-[#F4D03F] transition">About</Link></li>
          <li><HashLink smooth to="/#services" className="text-[#B3B3B3] hover:text-[#F4D03F] transition">Services</HashLink></li>
          <li><HashLink smooth to="/#stats" className="text-[#B3B3B3] hover:text-[#F4D03F] transition">Work</HashLink></li>
        </ul>

        {/* Contact Button */}
        <HashLink
          smooth
          to="/#contact"
          className="hidden md:flex items-center gap-2 bg-[#F4D03F] text-black px-5 py-2 rounded-lg font-semibold transition hover:scale-105 hover:bg-yellow-400"
        >
          <Mail size={18} />
          Contact
        </HashLink>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
          {isOpen ? <X size={28} /> : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex flex-col md:hidden">
    <div className="flex-1 overflow-y-auto px-6 pt-24 pb-10 flex flex-col items-center space-y-8 text-lg">
      <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#F4D03F] text-[#B3B3B3]">Home</Link>
      <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#F4D03F] text-[#B3B3B3]">About</Link>
      <HashLink smooth to="/#services" onClick={() => setIsOpen(false)} className="hover:text-[#F4D03F] text-[#B3B3B3]">Services</HashLink>
      <HashLink smooth to="/#work" onClick={() => setIsOpen(false)} className="hover:text-[#F4D03F] text-[#B3B3B3]">Work</HashLink>
      <HashLink
        smooth
        to="/#contact"
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-2 bg-[#F4D03F] text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
      >
        <Mail size={18} />
        Contact
      </HashLink>
    </div>
  </div>
)}


    </nav>
  );
};

export default Navbar;




