import React from "react";
import { motion } from "motion/react";

// DB
import AboutText from "../../Components/DB/AboutText";
import Service from "../../Components/DB/Service";

// SCSS
import "./About.scss";

const About: React.FC = () => {
  return (
    <>
      <main className="about">
        <h1>Supporto i Brand al Successo Digitale</h1>
        <div className="about-main">
          <div className="description">
            <img
              src={
                new URL(
                  `/src/Assets/Icon-Tools/Icon/Name=arrow-down, Dimension=M.svg`,
                  import.meta.url
                ).href
              }
            />
            <div className="text">
              {AboutText.map((about) => (
                <p className="text-paragraph-L">{about.text}</p>
              ))}
            </div>
          </div>
          <div className="wrapper">
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
          <h4>In cosa posso aiutarti</h4>
          <div className="service-container">
            {Service.map((service) => (
              <div className="service">
                <span className="text-placeholder">{service.number}</span>
                <hr />
                <span className="subtitle subtitle-L">{service.name}</span>
                <p className="text-paragraph-M">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
