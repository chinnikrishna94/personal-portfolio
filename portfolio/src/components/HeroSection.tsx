import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <h1 className="text-5xl font-bold">Hi, I'm Krishna</h1>
    </section>
  );
};

export default Hero;
