import React from "react";
import "./Buttons.scss";

interface ButtonPrimaryProps {
  size: "xs" | "s" | "m" | "l";
  text: string;
  withIcon?: boolean; // Opzione per rimuovere l'icona
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ size, text }) => {
  return <button className={`btn-primary btn-primary-${size}`}>{text}</button>;
};

export default ButtonPrimary;
