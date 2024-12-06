import React from "react";
import "./Home.scss";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Work />
      <div className="home">
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default Home;
