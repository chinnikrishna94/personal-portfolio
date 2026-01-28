import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={projectsRef} className="min-h-screen bg-white px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="project-card p-6 bg-gray-100 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
            <p className="text-gray-600">
              Description of your project goes here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
