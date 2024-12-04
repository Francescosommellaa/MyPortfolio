import React, { useEffect, useRef } from "react";
import "./Buttons.scss";

interface ButtonProps {
  size: "S" | "M" | "L";
  text: string;
  withIcon?: boolean;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size,
  text,
  light = false,
  withIcon = true,
}) => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (withIcon && size) {
      // Percorso dinamico in base alla dimensione
      const svgPath = `src/assets/Icon/Icon/Name=Arrow-min-right, Dimension=${size}.svg`;

      // Carica il file SVG e inseriscilo nel DOM
      fetch(svgPath)
        .then((response) => response.text())
        .then((svgContent) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = svgContent;
          }
        })
        .catch((error) =>
          console.error(`Errore nel caricamento dell'SVG: ${error}`)
        );
    }
  }, [size, withIcon]);
  return (
    <button className={`btn btn-${size} ${light ? "light" : ""}`}>
      {text}
      {withIcon && size && (
        <div className="icon" ref={svgRef} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
