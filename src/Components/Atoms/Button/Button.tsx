import React from "react";
import "./Buttons.scss";

interface ButtonSecondaryProps {
  size: "xs" | "s" | "m" | "l";
  text: string;
  withIcon?: boolean;
  className: string;
}

const Button: React.FC<ButtonSecondaryProps> = ({
  size,
  text,
  withIcon = true,
  className,
}) => {
  return (
    <button className={`btn btn-${size} ${className}`}>
      {text}
      {withIcon && (
        <svg
          className={`btn-icon btn-icon-${size}`}
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.910034 16.92L7.43003 10.4C8.20003 9.63 8.20003 8.37 7.43003 7.6L0.910034 1.08" />
        </svg>
      )}
    </button>
  );
};

export default Button;
