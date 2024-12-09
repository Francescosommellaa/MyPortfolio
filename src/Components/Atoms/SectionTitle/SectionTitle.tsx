import React from "react";

// SCSS
import "./SectionTitle.scss";

interface SectionTitleProps {
  size: "S" | "M" | "L";
  text: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ size, text }) => {
  return <h1 className={`section-title section-title-${size}`}>{text}</h1>;
};

export default SectionTitle;
