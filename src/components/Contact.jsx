import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Mail,
  Map,
  Phone,
} from "lucide-react";
import React from "react";

const Contact = () => {

  useGSAP(() => {
    gsap.fromTo(".contact-heading", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(".contact-description", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(".contact-icon", { opacity: 0, rotate: -50 }, { opacity: 1, duration: 1, rotate: 0 });
    gsap.fromTo(".contact-info", { opacity: 0, x: 0, y: 20 }, { opacity: 1, duration: 1, x: 0, y: 0, scrollTrigger: ".contact-info", ease: "sine.out" });
  },[])

  return (
    <div className="contact text-white lg:w-[1280px] md:w-[730px] smmd:w-[360px] sm:w-[350px] xs:w-[300px] mx-auto">
      <h1 className="text-4xl contact-heading">Get in Touch</h1>
      <p className="pt-10 sm:pt-5 text-balance contact-description">
        I'm always interested in new opportunities, whether it's a full-time
        position, freelance project, or just a chat about technology. Feel free
        to reach out through any of the channels below.
      </p>
      <div>
        <div className="flex gap-10 pt-10 flex-col">
          <div className="flex gap-5 items-center">
            <span className="w-[50px] h-[50px] bg-amber-200 flex items-center justify-center rounded-full text-black contact-icon">
              <Mail />
            </span>
            <div className="contact-info">
              <p>Email: 0rZrA@example.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="w-[50px] h-[50px] bg-amber-200 flex items-center justify-center rounded-full text-black contact-icon"><Phone /></span>
            <div className="contact-info">
              <p>Phone: 123-456-789</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="w-[50px] h-[50px] bg-amber-200 flex items-center justify-center rounded-full text-black contact-icon"><Map /></span>
            <div className="contact-info">
              <p>Location: New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
