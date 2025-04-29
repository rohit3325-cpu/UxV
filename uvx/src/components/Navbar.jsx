import React, { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavLogo from "../assets/images/UxV_Full logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav id="nav" className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex bd items-center gap-2">
            <img src={NavLogo} alt="NavLogo" className="w-12 h-12  object-contain" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            <li><Link smooth to="/#nav" className="text-[#1C1C1C] hover:text-[#F4D03F] transition">Home</Link></li>
            <li><Link to="/about" className="text-[#1C1C1C] hover:text-[#F4D03F] transition">About</Link></li>
            <li><HashLink smooth to="/#services" className="text-[#1C1C1C] hover:text-[#F4D03F] transition">Services</HashLink></li>
            <li><HashLink smooth to="/#work" className="text-[#1C1C1C] hover:text-[#F4D03F] transition">Work</HashLink></li>
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
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-transparent text-black z-50">
            {isOpen ? <X size={28} /> : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <X size={24} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-6 text-lg font-medium px-8 pt-10 w-72">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-[#1C1C1C] hover:text-[#F4D03F] transition">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-[#1C1C1C] hover:text-[#F4D03F] transition">
            About
          </Link>
          <HashLink smooth to="/#services" onClick={() => setIsOpen(false)} className="text-[#1C1C1C] hover:text-[#F4D03F] transition">
            Services
          </HashLink>
          <HashLink smooth to="/#work" onClick={() => setIsOpen(false)} className="text-[#1C1C1C] hover:text-[#F4D03F] transition">
            Work
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-[#F4D03F] text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            <Mail size={18} />
            Contact
          </HashLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;




