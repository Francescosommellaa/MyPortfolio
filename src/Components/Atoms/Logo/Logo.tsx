import React from "react";

// SCSS
import "./Logo.scss";

interface LogoProps {
  size: "S" | "M" | "L";
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, light = false }) => {
  return (
    <span
      className={`logo-text logo-text-${
        light ? "light" : ""
      } logo-text-${size}`}
    >
      © Design by Fra
    </span>
  );
};
export default Logo;
