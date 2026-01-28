import Navbar from "./components/Navbar";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";

const App = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main >
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
