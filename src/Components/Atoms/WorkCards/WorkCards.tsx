import React from "react";
import Projects from "../../DB/Projects";
import "./WorkCards.scss";

// Atoms
import Button from "../Button/Button";

const WorkCards: React.FC = () => {
  return (
    <div className="container-cards right">
      {Projects.map((project) => (
        <div key={project.slug} className="project-card">
          <h6 className="project-title">{project.Title}</h6>
          <div className="img-container">
            <img
              src={
                new URL(
                  `/src/assets/Project-img/Project-Cover/${project.ProjectCover}`,
                  import.meta.url
                ).href
              }
              alt={`${project.Title} cover`}
              className="project-cover"
            />
            <Button size="S" text="Vedi Progetto" iconName="Arrow-min-right" />
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
