import React from "react";
import { useMediaQuery } from "react-responsive";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";
import Tools from "../../Components/Molecules/Tools/Tools";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <main>
      <Hero />
      <Work />
      <Tools size={isMobile ? "S" : "M"} />
    </main>
  );
};

export default Home;
