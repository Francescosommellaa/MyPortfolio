import React from "react";
import "./Buttons.scss";
import RightIcon from "../../assets/Icon/Arrow/Right.svg";

interface ButtonSecondaryProps {
  size: "xs" | "s" | "m" | "l";
  text: string;
  withIcon?: boolean; // Opzione per rimuovere l'icona
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  size,
  text,
  withIcon = true,
}) => {
  return (
    <button className={`btn-secondary btn-secondary-${size}`}>
      {text}
      {withIcon && (
        <img src={RightIcon} alt="Arrow Icon" className={`btn-icon-${size}`} />
      )}
    </button>
  );
};

export default ButtonSecondary;
