import React from "react";
import ToolsImg from "../../DB/ToolsImg";

// SCSS
import "./Tools.scss";

interface Toolsprops {
  size: "S" | "M";
}

const Tools: React.FC<Toolsprops> = ({ size }) => {
  return (
    <section className="tools-container">
      {ToolsImg.map((tools) => (
        <img
          src={
            new URL(
              `/src/Assets/Icon-Tools/Tools/Name=${tools.Url}, Dimension=${size}.png`,
              import.meta.url
            ).href
          }
          alt={`${tools.Url}`}
          key={tools.id}
        />
      ))}
    </section>
  );
};

export default Tools;
