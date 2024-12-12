import React from "react";
import { motion } from "motion/react";

// Scsss
import "./About.scss";

const About: React.FC = () => {
  return (
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
            <p className="text-paragraph-L">
              Mi chiamo Francesco Sommella, ho 23 anni e vivo a Napoli.
            </p>
            <p className="text-paragraph-L">
              Sono un Front-end Developer e UX/UI Designer con circa tre anni di
              esperienza nel settore.
            </p>
            <p className="text-paragraph-L">
              Ho completato un percorso formativo intensivo di 6 mesi presso
              Boolean, specializzandomi come Front-end Developer. Oggi continuo
              ad aggiornarmi attraverso corsi e letture, per garantire il
              massimo valore e professionalità in ogni progetto.
            </p>
            <p className="text-paragraph-L">
              Collaboro con aziende offrendo soluzioni su misura. Ogni progetto
              è un'opportunità per spingermi oltre i miei limiti, mantenendo la
              qualità come priorità assoluta.
            </p>
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
          <div className="service">
            <span className="text-placeholder">o1</span>
            <hr />
            <span className="subtitle subtitle-L">Design</span>
            <p className="text-paragraph-M">
              Con una solida esperienza nella progettazione di siti web,
              fornisco design digitali solidi e di facile utilizzo.
            </p>
          </div>
          <div className="service">
            <span className="text-placeholder">o2</span>
            <hr />
            <span className="subtitle subtitle-L">Development</span>
            <p className="text-paragraph-M">
              Sviluppo siti web scalabili da zero, perfettamente allineati al
              design.
            </p>
          </div>
          <div className="service">
            <span className="text-placeholder">o3</span>
            <hr />
            <span className="subtitle subtitle-L">Il Pacchetto Completo</span>
            <p className="text-paragraph-M">
              Un sito web completo, dall'idea alla realizzazione.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
