import React from "react";
import { Link } from "react-router-dom";

// SCSS
import "./Logo.scss";

interface LogoProps {
  size: "S" | "M" | "L";
  light?: boolean;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ size, light = false, onClick }) => {
  const handleClick = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 24);
      }
      if (onClick) {
        onClick();
      }
    };
    scrollToTop();
  };

  return (
    <Link
      to="/"
      className={`logo-text logo-text-${
        light ? "light" : ""
      } logo-text-${size}`}
      onClick={handleClick}
    >
      © Design by Fra
    </Link>
  );
};
export default Logo;
