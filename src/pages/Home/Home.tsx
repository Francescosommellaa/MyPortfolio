import React from "react";

// SCSS
import "./Home.scss";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";
import Tools from "../../Components/Molecules/Tools/Tools";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Work />
      <Tools size="M" />
    </main>
  );
};

export default Home;
