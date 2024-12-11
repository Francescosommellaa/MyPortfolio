import React from "react";
import { useParams } from "react-router-dom";

// DB
import Projects from "../../Components/DB/Projects";

// SCSS
import "./Project.scss";

const Project: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Progetto non trovato</h1>;
  }
  const { Title, Url, Date, CreatorName, Services, Description, ProjectImg } =
    project;

  return (
    <main>
      {/* Carosello IMG*/}

      {/* Titolo */}
      <h1>Dettagli del Progetto {Title}</h1>
      {/* link al sito */}

      {/* Descrizione */}

      {/* altre info */}
    </main>
  );
};

export default Project;
