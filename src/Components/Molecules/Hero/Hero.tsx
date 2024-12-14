import React from "react";

// Hooks
import { useSize } from "../../../Hooks/useSize";

// SCSS
import "./Hero.scss";

const Hero: React.FC = () => {
  const Size = useSize();

  return (
    <header className="hero-container">
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
        />
        <p className={`text-paragraph-${Size}`}>
          Progetto e sviluppo siti web su misura, pensati per le esigenze dei
          tuoi utenti, per offrire esperienze coinvolgenti, intuitive e
          funzionali.
        </p>
      </div>
    </header>
  );
};

export default Hero;
