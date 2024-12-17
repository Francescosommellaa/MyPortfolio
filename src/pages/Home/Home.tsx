import React from "react";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet-async";

// Atoms
import Cursor from "../../Components/Atoms/Animation/Cursor/Cursor";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";
import Tools from "../../Components/Molecules/Tools/Tools";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <main aria-label="Home Page">
      <Cursor />
      {/* Titolo dinamico */}
      <Helmet>
        <title>Design by Fra | Designer & Developer</title>
      </Helmet>

      <Hero />
      <Work />
      <Tools size={isMobile ? "S" : "M"} />
    </main>
  );
};

export default Home;
