import React from "react";
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";

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
