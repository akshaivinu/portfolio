import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Lenis from "lenis";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { EyeIcon, Github } from "lucide-react";

const Home = () => {

  useEffect(() => {
      const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  gsap.utils.toArray(".work-item").forEach((Item) => {
      const img = Item.querySelector(".work-item-img");
      const nameH1 = Item.querySelector(".work-item-name h1");

      const split = SplitText.create(nameH1, {
        type: "chars",
        mask: "chars",
      });

      gsap.set(split.chars, { y: "125%"})

      split.chars.forEach((char, index) => {
        ScrollTrigger.create({
          trigger: Item,
          start: `top+=${index * 25 - 250} top`,
          end: `top+=${index * 25 - 100} top`,
          scrub: 1,
          animation: gsap.fromTo(
            char, {
              y: "125%"
            },{
              y: "0%",
              ease: "none"
            }
          ),
        });
      });
      ScrollTrigger.create({
        trigger: Item,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img, {
            clipPath: "polygon(25% 25%,75% 40%,100% 100%,0% 100%)"
          },
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            ease: "none"
          }
        )
      });
      ScrollTrigger.create({
        trigger: Item,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img, {
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
          },
          {
            clipPath: "polygon(0% 0%,100% 0%,75% 60%,25% 75%)",
            ease: "none"
          }
        )
      })

  });

  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <section className="intro relative w-[100vw] overflow-hidden h-[50svh] flex justify-center items-center p-[2rem]">
        <h1 className="text-9xl text-black sansation-bold underline">FEATURED PROJECTS</h1>
      </section>

      
      <section className="work-item relative w-[100vw] overflow-hidden h-[150svh]">
        <div className="work-item-img absolute w-[100%] h-[100%] [clip-path:polygon(25%_25%,75%_40%,100%_100%,0%_100%)] will-change-[clip-path]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="work-item-name absolute top-[50%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1">
            <h1 className="text-[#fff]">Two</h1>
          </div>
        </div>
      </section>
      <section className="work-item relative w-[100vw] overflow-hidden h-[150svh]">
        <div className="work-item-img absolute w-[100%] h-[100%] [clip-path:polygon(25%_25%,75%_40%,100%_100%,0%_100%)] will-change-[clip-path]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="work-item-name absolute top-[50%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1">
            <h1 className="text-[#fff] text-6xl">Three</h1>
          </div>
          <div className="absolute top-[60%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1">
            <p className="description text-white">this is an project</p>
          </div>
          <div className="absolute top-[66%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1 text-white flex flex-row gap-10">
            <a href="" className="border border-white px-2 rounded text-center py-0.5">Node js</a>
            <a href="" className="border border-white px-2 rounded text-center py-0.5">Node js</a>
            <a href="" className="border border-white px-2 rounded text-center py-0.5">Node js</a>
            <a href="" className="border border-white px-2 rounded text-center py-0.5">Node js</a>
          </div>
          <div className="absolute top-[71%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1 text-white flex flex-row gap-10"> 
              <button className="flex flex-row gap-2 "><EyeIcon /> View Live</button>
              <button className="flex flex-row gap-2 "><Github /> View Source</button>
          </div>
        </div>
      </section>
      <section className="work-item relative w-[100vw] overflow-hidden h-[150svh]">
        <div className="work-item-img absolute w-[100%] h-[100%] [clip-path:polygon(25%_25%,75%_40%,100%_100%,0%_100%)] will-change-[clip-path]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=79"
            alt=""
          />
          <div className="work-item-name absolute top-[50%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1">
            <h1 className="text-[#fff]">Four</h1>
          </div>
        </div>
      </section>
      <section className="work-item relative w-[100vw] overflow-hidden h-[150svh]">
        <div className="work-item-img absolute w-[100%] h-[100%] [clip-path:polygon(25%_25%,75%_40%,100%_100%,0%_100%)] will-change-[clip-path]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="work-item-name absolute top-[50%] left-[50%] transform translate-[-50%,-50%] w-[100%] z-1">
            <h1 className="text-[#fff] text-4xl">Five</h1>
          </div>
        </div>
      </section>

      <section className="outro relative w-[100vw] overflow-hidden h-[10svh] flex justify-center items-center p-[2rem]">
      </section>
    </>
  );
};

export default Home;
