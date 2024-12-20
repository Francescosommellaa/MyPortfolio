import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Element } from "react-scroll";

// Atoms
import GoTop from "../../Components/Atoms/Animation/GoTop/GoTop";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";
import About from "../../Components/Molecules/About/About";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main aria-label="Home Page">
      <GoTop />
      {/* Titolo dinamico */}
      <Helmet>
        <title>Design by Fra | Designer & Developer</title>
      </Helmet>

      <Hero />
      <Element name="about">
        <About />
      </Element>
      <Element name="lavori">
        <Work />
      </Element>
    </main>
  );
};

export default Home;
