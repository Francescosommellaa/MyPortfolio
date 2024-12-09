import React from "react";
import "./Project.scss";
import { useParams } from "react-router-dom";

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
