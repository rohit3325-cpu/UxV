import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Smooth scroll for sections
 // Import your logo here

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="UxVlogo.png" alt="UxV Media Logo" className="w-9 h-9 object-contain" />
          <span className="text-white font-semibold text-xl tracking-wide">
            U<span className="text-yellow-400">x</span>V Media
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li>
            <Link to="/" className="text-[#B3B3B3] hover:text-[#F4D03F] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#B3B3B3] hover:text-[#F4D03F] transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#services" className="text-[#B3B3B3] hover:text-[#F4D03F] transition-colors duration-300">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#work" className="text-[#B3B3B3] hover:text-[#F4D03F] transition-colors duration-300">
              Work
            </HashLink>
          </li>
        </ul>

        {/* Contact Button */}
        <HashLink
          smooth
          to="/#contact"
          className="hidden md:flex items-center gap-2 bg-[#F4D03F] text-black px-5 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-400"
        >
          <Mail size={18} />
          Contact
        </HashLink>

        {/* Mobile Icon */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





