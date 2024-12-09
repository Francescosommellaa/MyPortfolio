import React from "react";

// SCSS
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <h1>Human ≠ Robot </h1>
      <div className="hero-content">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0701 14.43L12.0001 20.5L5.93005 14.43"
            stroke="#F5F5F5"
            stroke-width="1.30909"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 3.5V20.33"
            stroke="#F5F5F5"
            stroke-width="1.30909"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-paragraph-L">
          Progetto e sviluppo siti web su misura, pensati per le esigenze dei
          tuoi utenti, per offrire esperienze coinvolgenti, intuitive e
          funzionali.
        </p>
      </div>
    </div>
  );
};

export default Hero;
