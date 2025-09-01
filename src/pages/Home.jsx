
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {


  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="bg-black"></div>
      <div className="bg-black h-auto">
        <Projects />
      </div>
      <div className="skills-section bg-black text-white h-auto">
        <h1 className="text-4xl sansation-regular pl-15">Skills</h1>
        <div className="flex flex-row gap-10 pl-15 pt-5">
          <p className=" text-xl border border-white px-2 py-0.5 rounded-4xl">
            Frontend
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl">
            Backend
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl">
            Database
          </p>
          <p className="text-xl border border-white px-2 py-0.5 rounded-4xl">
            Tools
          </p>
        </div>
        <div className="pl-15 mt-20 h-[100svh]">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
