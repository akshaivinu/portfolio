import { Eye, GitBranch, Github } from "lucide-react";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".card-1",
      { opacity: 0, x: 0, y: -200, skewY: 10 },
      { opacity: 1, duration: 1, stagger: 0.2, x: 0, y: 0, skewY: 0 }
    );
  }, []);

  return (
    <div className="projects">
      <h1 className="text-4xl text-white flex justify-center pt-20 sansation-regular">
        Projects ShowCase
      </h1>
      <div className="projects-showcase grid lg:grid-cols-4 md:px-16 px-8 sm:grid-cols-1 sm:px-16 grid-cols-1  transform  gap-1 lg:w-[1280px] md:w-[700px] smmd:w-[400px] sm:w-[350px] xs:w-[300px] mx-auto pt-30">
        <div className="project-wrapper card-1">
          <div className="project-card w-[240px] h-[400px] transform-3d brightness-50">
            <div className="image h-[300px] w-[240px] relative">
              <img
                className="rounded w-[100%] h-[100%]"
                src="https://picsum.photos/200/300"
                alt=""
              />
              <div className="overlay absolute text-white top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center">
                <h2 className="-mt-10">Project Title</h2>
                <p>Project Description</p>
                <div className="flex gap-1 mt-30 p-2">
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <Eye className="w-[20px]" /> View Live
                  </button>
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <GitBranch className="w-[20px]" /> View Source
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-wrapper card-1">
          <div className="project-card w-[240px] h-[400px] transform-3d brightness-50">
            <div className="image h-[300px] w-[240px] relative">
              <img
                className="rounded w-[100%] h-[100%]"
                src="https://picsum.photos/200/300"
                alt=""
              />
              <div className="overlay absolute text-white top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center">
                <h2 className="-mt-10">Project Title</h2>
                <p>Project Description</p>
                <div className="flex gap-1 mt-30 p-2">
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <Eye className="w-[20px]" /> View Live
                  </button>
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <GitBranch className="w-[20px]" /> View Source
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-wrapper card-1">
          <div className="project-card w-[240px] h-[400px] transform-3d brightness-50">
            <div className="image h-[300px] w-[240px] relative">
              <img
                className="rounded w-[100%] h-[100%]"
                src="https://picsum.photos/200/300"
                alt=""
              />
              <div className="overlay absolute text-white top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center">
                <h2 className="-mt-10">Project Title</h2>
                <p>Project Description</p>
                <div className="flex gap-1 mt-30 p-2">
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <Eye className="w-[20px]" /> View Live
                  </button>
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <GitBranch className="w-[20px]" /> View Source
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-wrapper card-1">
          <div className="project-card w-[240px] h-[400px] transform-3d brightness-50">
            <div className="image h-[300px] w-[240px] relative">
              <img
                className="rounded w-[100%] h-[100%]"
                src="https://picsum.photos/200/300"
                alt=""
              />
              <div className="overlay absolute text-white top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center">
                <h2 className="-mt-10">Project Title</h2>
                <p>Project Description</p>
                <div className="flex gap-1 mt-30 p-2">
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <Eye className="w-[20px]" /> View Live
                  </button>
                  <button className="border border-white rounded-xl h-[35px] px-2 flex gap-2 sansation-regular text-xs text-center items-center">
                    {" "}
                    <GitBranch className="w-[20px]" /> View Source
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
