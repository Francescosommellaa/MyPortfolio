import React from "react";
import "./Home.scss";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="home">
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default Home;
