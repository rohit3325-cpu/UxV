import React, { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import NavLogo from "../assets/images/uxvtransparent.png"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const navLinks = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "/about", isLink: true },
    { label: "Services", to: "/#services" },
    { label: "Work", to: "/#work" },
  ];

  return (
    <>
      <nav
        id="nav"
        className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={NavLogo} alt="Logo" className="w-13 h-12 object-contain" />
          </div>

          {/* Desktop Nav */}
{/* Desktop Nav inside a bordered box */}
<div className="hidden md:flex items-center border border-white rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
  <ul className="flex gap-6 text-sm font-medium">
    {navLinks.map((link, index) => {
      return (
        <motion.li
          key={link.label}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={linkVariants}
        >
          <div className="relative group overflow-hidden rounded-lg">
            {/* Bubble animation */}
            <motion.span
              className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-100 opacity-20 transition-transform duration-500 ease-out origin-center"
            />
            {link.isLink ? (
              <Link
                to={link.to}
                className="relative z-10 px-4 py-2 block text-white transition-colors duration-300 group-hover:text-yellow-400"
              >
                {link.label}
              </Link>
            ) : (
              <HashLink
                smooth
                to={link.to}
                className="relative z-10 px-4 py-2 block text-white transition-colors duration-300 group-hover:text-yellow-400"
              >
                {link.label}
              </HashLink>
            )}
          </div>
        </motion.li>
      );
    })}
  </ul>
</div>



          {/* Contact Button */}
          <HashLink
            smooth
            to="/#contact"
            className="hidden md:flex items-center gap-2 bg-[#F4D03F] text-black px-5 py-2 rounded-full font-semibold transition hover:bg-yellow-400 hover:scale-105"
          >
            <Mail size={18} />
            Contact
          </HashLink>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
            {isOpen ? <X size={28} /> : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col md:hidden`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-[#333] hover:bg-[#444] transition"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-8 pt-6 text-white font-semibold">
          {navLinks.map((link) => {
            const mobileStyles =
              "w-44 text-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-yellow-400 transition";

            return link.isLink ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={mobileStyles}
              >
                {link.label}
              </Link>
            ) : (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={mobileStyles}
              >
                {link.label}
              </HashLink>
            );
          })}

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-44 text-center px-4 py-2 rounded-lg bg-[#F4D03F] text-black hover:bg-yellow-400 transition"
          >
            <Mail size={18} className="inline-block mr-2" />
            Contact
          </HashLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;



