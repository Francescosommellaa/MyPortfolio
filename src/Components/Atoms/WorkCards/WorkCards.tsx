import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../DB/Projects";

// SCSS
import "./WorkCards.scss";

// Atoms
import Button from "../Button/Button";

interface WorkCardsProps {
  size: "S" | "M" | "L";
}

const WorkCards: React.FC<WorkCardsProps> = ({ size }) => {
  return (
    <div className={`container-cards container-cards-${size}`}>
      {Projects.map((project) => (
        <div key={project.slug} className={`project-card project-card-${size}`}>
          <h6 className="project-title">{project.Title}</h6>
          <div className="img-container">
            <img
              src={
                new URL(
                  `/src/assets/Project-img/Project-Cover/Name=${project.ProjectCover}, Dimension=${size}.jpg`,
                  import.meta.url
                ).href
              }
              alt={`${project.Title} cover`}
              className="project-cover"
            />
            <Link to={`/project/${project.slug}`}>
              <Button
                size="S"
                text="Vedi Progetto"
                iconName="Arrow-min-right"
              />
            </Link>
          </div>
          <div className="description">
            <span className="text-placeholder">{project.Services}</span>
            <span className="text-placeholder">
              {project.DateOfPublication}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
