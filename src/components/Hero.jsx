import React from "react";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroHeadingSplit = new SplitText("#hero-heading", {
      type: "chars",
    });
    const heroNameSplit = new SplitText("#name", {
      type: "chars",
    });

    heroHeadingSplit.chars.forEach((char) =>
      char.classList.add("text-gradient")
    );
    heroNameSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroNameSplit.chars, {
      duration: 2,
      x: 0,
      y: 0,
      opacity: 0,
      ease: "sine.out",
      stagger: 0.05,
    });

    gsap.from(".sub-heading", {
      x: 0,
      y: 0,
      opacity: 0,
      duration: 3,
      ease: "sine.out",
    });
    gsap.from(".sub-second-heading", {
      x: 0,
      y: 0,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
    });

    gsap.from(heroHeadingSplit.chars, {
      duration: 2,
      x: 0,
      y: 0,
      opacity: 0,
      ease: "sine.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <div className="h-[90svh]">
      <div className="noisy w-max"></div>
      <div className="z-30 absolute text-center w-full flex flex-col justify-center sm:mt-10 md:mt-20 overflow-hidden">
        <p
          className="text-gray-300 mt-15 md:mt-0 sansation-regular md:mb-5 md:text-2xl "
          id="name"
        >
          Hi, I'm Akshai Vinu.
        </p>
        <h1
          id="hero-heading"
          className="text-gray-300 font-bold text-2xl sm:text-xl md:text-5xl lg:text-6xl text-bold xs:text-xl"
        >
          WEB DEVELOPER
        </h1>
        <div className="sub-heading xs:px-3">
          <p id="p" className="text-gray-300 sansation-regular mt-2 md:mt-10 text-md">
            Building seamless digital experiences with React & Node.js
          </p>
          <p id="p" className="text-gray-300 sansation-regular">
            Modern web solutions, crafted with code and creativity
          </p>
        </div>
        <div className="mt-10 sm:mt-9 md:mt-10 sub-second-heading xs:px-3">
          <p id="p" className="text-gray-300 sansation-regular">
            Passionate about solving real-world problems through elegant code
            and user-focused designs
          </p>
          <p id="p" className="text-gray-300 mt-2 md:mt-0 sansation-regular">
            Currently building projects with React and Node.js while growing my
            skills in JavaScript and database design.
          </p>
        </div>
        <div className="flex md:flex-row xs:flex-col xs:items-center gap-5 mt-10 text-white justify-center sansation-regular">
          <button className="h-10 w-40 bg-gray-500/50 rounded-xs cursor-pointer">
            View Projects
          </button>
          <button className="h-10 w-40 bg-transparent border-2 border-gray-300 rounded-xs cursor-pointer hover:bg-gray-300/50 duration-300 ease-in-out hover:text-black/50">
            <a href="/resume.pdf" download="resume.pdf">
              Resume
            </a>
          </button>
        </div>
        <div className="flex gap-8 md:mt-15 mt-10 text-white justify-center sansation-regular">
          <button className="cursor-pointer hover:scale-120 duration-300 ease-in-out">
            <Github />
          </button>
          <button className="cursor-pointer hover:scale-120 duration-300 ease-in-out">
            <Linkedin />
          </button>
          <button className="cursor-pointer hover:scale-120 duration-300 ease-in-out">
            <Mail />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;

//light rays

// top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
