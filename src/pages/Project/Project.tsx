import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// SCSS
import "./Project.scss";

// Atoms
import Button from "../../Components/Atoms/Button/Button";
import Cursor from "../../Components/Atoms/Animation/Cursor/Cursor";

// DB
import Projects from "../../Components/DB/Projects";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Project: React.FC = () => {
  const Size = useSize();
  const { slug } = useParams<{ slug: string }>();
  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return Size === "S" ? (
      <h3>Progetto non trovato</h3>
    ) : Size === "M" ? (
      <h2>Progetto non trovato</h2>
    ) : (
      <h1>Progetto non trovato</h1>
    );
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
    <main className="project-container" aria-label="Project Page">
      <Cursor />
      {/* Titolo dinamicop */}
      <Helmet>
        <title>Design by Fra | {title}</title>
      </Helmet>

      <div className="main-info">
        {/* Titolo */}
        {Size === "S" ? (
          <h3>{title}</h3>
        ) : Size === "M" ? (
          <h2>{title}</h2>
        ) : (
          <h1>{title}</h1>
        )}

        {/* link al sito */}
        <a href={`${url}`}>
          <Button size="S" text="Sito Live" iconName="Esterno" />
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
            <span className={`text-paragraph text-paragraph-${Size}`}>
              {year}
            </span>
          </div>
          <div>
            <span className="text-placeholder">Creatore:</span>
            <span className={`text-paragraph text-paragraph-${Size}`}>
              {creatorName}
            </span>
          </div>
          <div>
            <span className="text-placeholder">Ruolo:</span>
            <span className={`text-paragraph text-paragraph-${Size}`}>
              {services}
            </span>
          </div>
        </div>

        {/* Descrizione */}
        <div className="description-container">
          <p className={`text-paragraph text-paragraph-${Size}`}>
            {description}
          </p>
          <hr />
          <p className={`text-paragraph text-paragraph-${Size}`}>
            {descriptionTwo}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Project;
