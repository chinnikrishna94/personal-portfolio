import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={contactRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Let’s build something great together 🚀</p>
        <button className="px-6 py-3 bg-white text-black rounded-md font-semibold">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
