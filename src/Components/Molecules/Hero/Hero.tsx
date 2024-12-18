import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

// SCSS
import "./Hero.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Hero: React.FC = () => {
  const Size = useSize();

  const targetText = "Human ≠ Robot";
  const animationDuration = 3;

  const [animatedText, setAnimatedText] = useState<string>("");
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  useEffect(() => {
    const timeoutIds: number[] = [];
    const randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789≠ ";
    const textArray = targetText.split("");

    // Funzione per aggiornare una lettera alla volta
    const animateText = () => {
      for (let i = 0; i < textArray.length; i++) {
        timeoutIds.push(
          setTimeout(() => {
            const interval = setInterval(() => {
              setAnimatedText(
                (prev) =>
                  prev.slice(0, i) +
                  randomChars[Math.floor(Math.random() * randomChars.length)] +
                  prev.slice(i + 1)
              );
            }, 50);

            setTimeout(() => {
              clearInterval(interval);
              setAnimatedText(
                (prev) => prev.slice(0, i) + textArray[i] + prev.slice(i + 1)
              );
              if (i === textArray.length - 3) {
                setTimeout(() => setIsAnimationComplete(true));
              }
            }, (animationDuration / textArray.length) * 800);
          }, (i * animationDuration * 800) / textArray.length)
        );
      }
    };

    setAnimatedText("-".repeat(targetText.length));
    animateText();

    return () => timeoutIds.forEach((id) => clearTimeout(id)); // Cleanup corretto
  }, [targetText, animationDuration]);

  return (
    <header className="hero-container" aria-label="Hero Section">
      {Size === "S" ? (
        <motion.h3>{animatedText}</motion.h3>
      ) : Size === "M" ? (
        <motion.h2>{animatedText} </motion.h2>
      ) : (
        <motion.h1>{animatedText} </motion.h1>
      )}

      {isAnimationComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
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
        </motion.div>
      )}
    </header>
  );
};

export default Hero;
