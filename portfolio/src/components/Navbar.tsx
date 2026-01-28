import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home"); // default active section

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setActive(id); // set active when clicked
  };

  // Optional: update active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) current = section; // navbar height offset
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white text-black z-50 border-b border-gray-200">
      <ul className="flex justify-center gap-10 py-5 font-poppins text-sm tracking-wide">
        {["home", "about", "projects", "contact"].map((item) => (
          <li
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer relative group uppercase"
          >
            {item}
            {/* Hover & Active underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                active === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
