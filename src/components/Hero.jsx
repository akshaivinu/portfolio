import React from "react";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="noisy w-full"></div>
      <div className="z-60 absolute text-center w-full flex flex-col justify-center sm:mt-10 md:mt-20">
        <p className="text-gray-300 sansation-regular md:mb-5 md:text-2xl">Hi, I'm Akshai Vinu.</p>
        <h1
          id="hero-heading"
          className="text-gray-300 font-bold text-2xl sm:text-4xl md:text-6xl text-bold"
        >
          WEB DEVELOPER
        </h1>
        <div>
          <p className="text-gray-300 sansation-regular mt-2 md:mt-10">Building seamless digital experiences with React & Node.js</p>
          <p className="text-gray-300 sansation-regular">Modern web solutions, crafted with code and creativity</p>
        </div>
        <div className="mt-2 md:mt-10">
          <p className="text-gray-300 sansation-regular">Passionate about solving real-world problems through elegant code and user-focused designs</p>
          <p className="text-gray-300 sansation-regular">Currently building projects with React and Node.js while growing my skills in JavaScript and database design.</p>
        </div>
        <div className="flex gap-5 mt-15 text-white justify-center sansation-regular">
          <button className="h-10 w-40 bg-blue-500/50 rounded-xs cursor-pointer">View Projects</button>
          <button className="h-10 w-40 bg-transparent border-2 border-gray-300 rounded-xs cursor-pointer">Resume</button>
        </div>
        <div className="flex gap-5 mt-15 text-white justify-center sansation-regular">
          <button className=" cursor-pointer"><Github /></button>
          <button className="cursor-pointer"><Linkedin /></button>
          <button className="cursor-pointer"><Mail /></button>
        </div>
      </div>
    </>
  );
};

export default Hero;

//light rays

// top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
