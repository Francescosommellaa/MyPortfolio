import React, { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

// SCSS
import "./About.scss";

// Atoms
import Cursor from "../../Components/Atoms/Animation/Cursor/Cursor";

// DB
import AboutText from "../../Components/DB/AboutText";
import Service from "../../Components/DB/Service";

// Hooks
import { useSize } from "../../Hooks/useSize";

const About: React.FC = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState(2);

  const handleReadMore = () => {
    setVisibleParagraphs((prev) => prev + 2);
  };
  const handleReadLess = () => {
    setVisibleParagraphs((prev) => prev - 2);
  };
  const Size = useSize();

  return (
    <main className="about" aria-label="About Page">
      <Cursor />
      {/* Titolo dinamico */}
      <Helmet>
        <title>Design by Fra | About</title>
      </Helmet>

      {Size === "S" ? (
        <h2>Supporto i Brand al Successo Digitale</h2>
      ) : Size === "M" ? (
        <h2>Supporto i Brand al Successo Digitale</h2>
      ) : (
        <h1>Supporto i Brand al Successo Digitale</h1>
      )}
      <div className="about-main">
        <div className="description">
          <img
            src={
              new URL(
                `/src/Assets/Icon/Name=arrow-down, Dimension=${Size}.svg`,
                import.meta.url
              ).href
            }
            alt="immagine che raffigura Francesco Sommella"
          />
          <div className="text">
            {AboutText.slice(0, visibleParagraphs).map((about, index) => (
              <p key={index} className={`text-paragraph-${Size}`}>
                {about.text}
              </p>
            ))}
            {visibleParagraphs < AboutText.length ? (
              <a onClick={handleReadMore}>Leggi di Più</a>
            ) : visibleParagraphs > 2 ? (
              <a onClick={handleReadLess}>Leggi Meno</a>
            ) : null}
          </div>
        </div>
        <div className={`wrapper wrapper-${Size}`}>
          <motion.img
            src={new URL(`/src/Assets/Me/Me.png`, import.meta.url).href}
            alt="Descrizione immagine"
            className="image"
            initial={{ y: "-50%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="about-secondary">
        {Size === "S" ? (
          <h5>In cosa posso aiutarti</h5>
        ) : (
          <h4>In cosa posso aiutarti</h4>
        )}
        <div className="service-container">
          {Service.map((service) => (
            <div className="service">
              <span className="text-placeholder">{service.number}</span>
              <hr />
              <span className={`subtitle subtitle-${Size}`}>
                {service.name}
              </span>
              <p className={`text-paragraph text-paragraph-${Size}`}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
