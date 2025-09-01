
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Contact from "../components/Contact";

const Home = () => {

    useGSAP(() => {
      gsap.fromTo(".skills-heading", { opacity: 0 }, { opacity: 1, duration: 1 });
      gsap.fromTo(".skills-subheading", { opacity: 0 }, { opacity: 1, duration: 2 });
    },[])

  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="bg-black"></div>
      <div className="bg-black h-auto">
        <Projects />
      </div>
      <div className="skills-section bg-black text-white h-auto">
        <h1 className="text-4xl sansation-regular pl-15 skills-heading">Skills</h1>
        <div className="flex flex-row gap-10 pl-15 pt-5">
          <p className=" text-xl border border-white px-2 py-0.5 rounded-4xl active skills-subheading" data-speed="1">
            Frontend
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl skills-subheading" data-speed="2">
            Backend
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl skills-subheading" data-speed="3">
            Database
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl skills-subheading" data-speed="4">
            Tools
          </p>
        </div>
        <div className="pl-15 mt-20 h-auto">
          <Skills />
        </div>
      </div>
      <div className="bg-black h-[500px] pl-15 pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
