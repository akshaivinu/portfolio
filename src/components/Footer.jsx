import React from "react";
import { Link } from "react-router-dom";
import { Github, LinkedinIcon, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-gray-400 bg-black h-auto pl-15 md:pl-50 pb-10 pt-20 sansation-regular">
      <div className="grid grid-cols-3 gap-5">
        <div>
          <p>Akshai vinu</p>
          <p className="font-bold">Web Developer</p>
          <p className="pt-5 pb-10">
            Passionate about creating exceptional digital experiences with
            modern web technologies. Always learning, always building, always
            improving.
          </p>
          <div className="flex gap-5">
          <Link to="/contact" className="hover:text-white">
            <Github />
          </Link>
          <Link to="/contact" className="hover:text-white">
            <LinkedinIcon />
          </Link>
          <Link to="/contact" className="hover:text-white">
            <Mail />
          </Link>
          </div>
        </div>
        <div className="md:pl-20">
          <h6 className="font-bold">Quick Links</h6>
          <ul className="pt-5 flex flex-col gap-2">
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                About
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                Projects
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                skills
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="md:pl-10 sm:pr-20">
          <h6 className="font-bold">Get in Touch</h6>
          <ul className="pt-5 flex flex-col gap-2">
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                San Francisco
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                email@gamaail.com
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                +91 123456789
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/About" className="hover:text-white">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
