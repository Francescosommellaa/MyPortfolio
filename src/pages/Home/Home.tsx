import React from "react";
import { Helmet } from "react-helmet-async";

// Atoms
import Cursor from "../../Components/Atoms/Animation/Cursor/Cursor";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";

const Home: React.FC = () => {
  return (
    <main aria-label="Home Page">
      <Cursor />
      {/* Titolo dinamico */}
      <Helmet>
        <title>Design by Fra | Designer & Developer</title>
      </Helmet>

      <Hero />
      <Work />
    </main>
  );
};

export default Home;
