import { AlignRight, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="md:w-[1280px] sm:w-[740px] w-[420px] @max-xs:w-[300px] flex 
    m-auto h-18 items-center text-gray-300 sansation-regular p-4
     font-semibold blur-bg shadow-md rounded"
    >
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold">PORTFOLIO</p>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="flex gap-16 text-lg">
            <li>
              <Link to="/" className="hover:text-white">
                HOME
              </Link>
              {/* <span className="absolute left-[35%] top-[12px] text-xs -z-15 text-black/50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">★</span>
          <span className="absolute left-[33%] top-[12px] text-xs -z-15 text-black/50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">★</span>
          <span className="absolute left-[34%] top-[45px] text-xs -z-15 text-black/50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">★</span>
          <span className="absolute left-[32%] top-[40px] text-xs -z-15 text-black/50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">★</span>
          <span className="absolute left-[33%] top-[25px] text-xs -z-15 text-black opacity-0 drop-shadow-2xl group-hover:opacity-100 transition duration-300 ease-in-out">★</span> */}
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
        <button className="hidden md:flex">
          <Sun />
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden z-60 relative">
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
          className={`fixed top-0 h-[240px] w-full sm:w-full z-40 flex justify-center text-center mt-7 md:hidden
            transform transition-transform ease-in-out duration-500 bg-gray-500/20 right-1 backdrop-blur-lg rounded-lg translate-y-7
            ${isOpen ? "translate-x-1   " : "translate-x-200"} `}
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
