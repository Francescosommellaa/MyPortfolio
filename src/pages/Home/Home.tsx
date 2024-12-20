import React, { useEffect } from "react";

// Atoms
import GoTop from "../../Components/Atoms/Interaction/GoTop/GoTop";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";
import About from "../../Components/Molecules/About/About";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("data-title") || "";
        }
      });

      if (currentSection) {
        document.title = `Design by Fra | ${currentSection}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section aria-label="Home Page">
      <GoTop />

      <section id="hero" data-title="Designer & Developer">
        <Hero />
      </section>

      <section id="about" data-title="About">
        <About />
      </section>

      <section id="lavori" data-title="Lavori">
        <Work />
      </section>
    </section>
  );
};

export default Home;
