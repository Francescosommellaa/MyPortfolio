import React from "react";

// SCSS
import "./Hero.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Hero: React.FC = () => {
  const Size = useSize();

  return (
    <header className="hero-container" aria-label="Hero Section">
      {Size === "S" ? (
        <h3>Human ≠ Robot</h3>
      ) : Size === "M" ? (
        <h2>Human ≠ Robot </h2>
      ) : (
        <h1>Human ≠ Robot </h1>
      )}
      <div className="hero-content">
        <img
          src={
            new URL(
              "/src/Assets/Icon-Tools/Icon/Name=arrow-down, Dimension=M.svg",
              import.meta.url
            ).href
          }
          alt=""
          role="presentation"
        />
        <p className={`text-paragraph-${Size}`}>
          Progetto e sviluppo siti web su misura, pensati per le esigenze dei
          tuoi utenti, al fine di offrire esperienze coinvolgenti, intuitive e
          funzionali.
        </p>
      </div>
    </header>
  );
};

export default Hero;
