import React, { useEffect, useRef } from "react";

// SCSS
import "./Buttons.scss";

interface ButtonProps {
  size: "S" | "M" | "L";
  iconName?: string;
  text?: string;
  withIcon?: boolean;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size,
  text,
  iconName,
  light = false,
  withIcon = true,
}) => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (withIcon && size && iconName) {
      const svgPath = `src/assets/Icon & Tools/Icon/Name=${iconName}, Dimension=${size}.svg`;

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
  }, [size, withIcon, iconName]);
  return (
    <button className={`btn btn-${size} ${light ? "light" : ""}`}>
      {text}
      {withIcon && size && iconName && (
        <div className="icon" ref={svgRef} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
