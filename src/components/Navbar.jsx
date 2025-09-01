import { AlignRight, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="lg:w-[1280px] md:w-[750px] smmd:w-[400px] sm:w-[350px] xs:w-[310px] flex 
    m-auto h-18 items-center text-gray-300 sansation-regular p-4
     font-semibold blur-bg shadow-md rounded"
    >
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold">PORTFOLIO</p>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className="flex gap-16 text-lg">
            <li>
              <Link to="/" className="hover:text-white">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-white">
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme Button */}
        <button className="hidden lg:flex">
          <Sun />
        </button>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-60 relative">
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
          className={`fixed top-0 h-[240px] w-full sm:w-full z-40 flex justify-center text-center mt-7 lg:hidden
            transform transition-transform ease-in-out duration-500 bg-gray-500/20 right-1 backdrop-blur-lg rounded-lg translate-y-7
            ${isOpen ? "translate-x-1" : "translate-x-300"} `}
        >
          <div>
            <ul className="flex flex-col gap-5 text-lg p-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  SKILLS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
