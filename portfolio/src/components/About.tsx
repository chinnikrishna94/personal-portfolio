import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%", // start animation when top of section hits 80% viewport
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 font-poppins">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am a passionate frontend developer specializing in building modern,
          interactive web applications using React, Tailwind CSS, and GSAP. I
          love designing smooth, engaging user experiences and bringing creative
          ideas to life.
        </p>
      </div>
    </section>
  );
};

export default About;
