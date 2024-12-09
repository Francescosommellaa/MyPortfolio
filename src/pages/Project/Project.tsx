import React from "react";
import { useParams } from "react-router-dom";

// SCSS
import "./Project.scss";

const Project: React.FC = () => {
  const { slug } = useParams();
  return (
    <>
      <div>
        <h1>Dettagli del Progetto {slug}</h1>
      </div>
    </>
  );
};

export default Project;
