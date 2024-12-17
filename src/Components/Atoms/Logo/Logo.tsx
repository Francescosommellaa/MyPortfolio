import React from "react";
import { Link } from "react-router-dom";

// SCSS
import "./Logo.scss";

interface LogoProps {
  size: "S" | "M" | "L";
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, light = false }) => {
  return (
    <Link
      to="/"
      className={`logo-text logo-text-${
        light ? "light" : ""
      } logo-text-${size}`}
    >
      © Design by Fra
    </Link>
  );
};
export default Logo;
