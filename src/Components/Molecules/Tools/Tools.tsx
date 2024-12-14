import React from "react";

// DB
import ToolsImg from "../../DB/ToolsImg";

// SCSS
import "./Tools.scss";

interface Toolsprops {
  size: "S" | "M";
}

const Tools: React.FC<Toolsprops> = ({ size }) => {
  return (
    <section className="tools-container" aria-label="Tools Section">
      {ToolsImg.map((tools) => (
        <img
          src={
            new URL(
              `/src/Assets/Icon-Tools/Tools/Name=${tools.url}, Dimension=${size}.png`,
              import.meta.url
            ).href
          }
          alt={`${tools.url} tool icon`}
          key={tools.id}
        />
      ))}
    </section>
  );
};

export default Tools;
