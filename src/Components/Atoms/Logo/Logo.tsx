import React from "react";
import "./Logo.scss";

interface LogoProps {
  size: "S" | "M" | "L";
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div className="logo-container">
      <span className={`logo-text Logo-${size}`}>© Design by Fra</span>
    </div>
  );
};
export default Logo;
