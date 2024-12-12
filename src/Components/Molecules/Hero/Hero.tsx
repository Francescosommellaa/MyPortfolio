import React from "react";

// SCSS
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <header className="hero-container">
      <h1>Human ≠ Robot </h1>
      <div className="hero-content">
        <img
          src={
            new URL(
              "/src/Assets/Icon-Tools/Icon/Name=arrow-down, Dimension=M.svg",
              import.meta.url
            ).href
          }
        />
        <p className="text-paragraph-L">
          Progetto e sviluppo siti web su misura, pensati per le esigenze dei
          tuoi utenti, per offrire esperienze coinvolgenti, intuitive e
          funzionali.
        </p>
      </div>
    </header>
  );
};

export default Hero;
