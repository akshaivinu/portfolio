import { AlignRight, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:w-[1280px] sm:w-[740px] w-[440px] flex 
    m-auto h-18 items-center text-gray-300 sansation-regular p-4
     font-semibold blur-bg shadow-md rounded">
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold">PORTFOLIO</p>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="flex gap-16 text-lg">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/skills">SKILLS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>

        {/* Theme Button */}
        <button className="hidden md:flex">
          <Sun />
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 relative">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignRight className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 h-[400px] w-full sm:w-full z-40 flex justify-center text-center mt-7 md:hidden
            transform transition-transform ease-in-out duration-500
            ${isOpen ? "translate-y-7" : "-translate-y-full"}`}
        >
          <div>
            <ul className="flex flex-col gap-5 text-lg">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;