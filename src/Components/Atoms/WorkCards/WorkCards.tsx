import React from "react";
import { Link } from "react-router-dom";

// SCSS
import "./WorkCards.scss";

// Atoms
import Button from "../Button/Button";

// DB
import Projects from "../../DB/Projects";

interface WorkCardsProps {
  size: "S" | "M" | "L";
}

const WorkCards: React.FC<WorkCardsProps> = ({ size }) => {
  return (
    <div className={`container-cards container-cards-${size}`}>
      {Projects.map((project) => (
        <div key={project.slug} className={`project-card project-card-${size}`}>
          {size === "S" ? (
            <h6 className="project-title">{project.title}</h6>
          ) : size === "M" ? (
            <h5 className="project-title">{project.title}</h5>
          ) : (
            <h4 className="project-title">{project.title}</h4>
          )}
          <div className="img-container">
            <Link
              to={`/project/${project.slug}`}
              title={`Vedi Progetto ${project.slug}`}
            >
              <img
                src={
                  new URL(
                    `/src/Assets/Project-img/Project-Cover/Name=${project.projectCover}.jpg`,
                    import.meta.url
                  ).href
                }
                alt={`${project.title} cover`}
                className="project-cover"
                loading="lazy"
              />
              <Button
                size="S"
                text="Vedi Progetto"
                iconName="Arrow-min-right"
              />
            </Link>
          </div>
          <div className="description">
            <span className={`text-paragraph-${size}`}>{project.services}</span>
            <span className={`text-paragraph-${size}`}>{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
