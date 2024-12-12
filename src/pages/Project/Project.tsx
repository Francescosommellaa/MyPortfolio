import React from "react";
import { useParams } from "react-router-dom";

// DB
import Projects from "../../Components/DB/Projects";

// SCSS
import "./Project.scss";

// Atoms
import Button from "../../Components/Atoms/Button/Button";

const Project: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1>Progetto non trovato</h1>;
  }
  const {
    title,
    url,
    year,
    creatorName,
    services,
    description,
    descriptionTwo,
    projectImg,
  } = project;

  return (
    <main className="project-container">
      <div className="main-info">
        {/* Titolo */}
        <h1>{title}</h1>

        {/* link al sito */}
        <a href={`${url}`}>
          <Button size="S" text="Vai al Sito" iconName="Esterno" />
        </a>
      </div>

      <div className="img-container">
        {projectImg.map((imgName, index) => (
          <img
            key={index}
            src={
              new URL(
                `/src/Assets/Project-img/Project-Img/Name=${imgName}.jpg`,
                import.meta.url
              ).href
            }
            alt={`${title} - image ${index + 1}`}
          />
        ))}
      </div>

      <div className="bottom-container">
        {/* altre info */}
        <div className="info-container">
          <div>
            <span className="text-placeholder">Anno:</span>
            <span className="text-paragraph-M">{year}</span>
          </div>
          <div>
            <span className="text-placeholder">Creatore:</span>
            <span className="text-paragraph-M">{creatorName}</span>
          </div>
          <div>
            <span className="text-placeholder">Ruolo:</span>
            <span className="text-paragraph-M">{services}</span>
          </div>
        </div>

        {/* Descrizione */}
        <div className="description-container">
          <p className="text-paragraph-L">{description}</p>
          <hr />
          <p className="text-paragraph-L">{descriptionTwo}</p>
        </div>
      </div>
    </main>
  );
};

export default Project;
