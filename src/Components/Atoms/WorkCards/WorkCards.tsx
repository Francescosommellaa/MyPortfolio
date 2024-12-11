import React from "react";
import { Link } from "react-router-dom";

// DB
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
        <div key={project.slug} className="project-card">
          <h6 className="project-title">{project.title}</h6>
          <div className="img-container">
            <Link to={`/project/${project.slug}`}>
              <img
                src={
                  new URL(
                    `/src/Assets/Project-img/Project-Cover/Name=${project.projectCover}.jpg`,
                    import.meta.url
                  ).href
                }
                alt={`${project.title} cover`}
                className="project-cover"
              />
              <Link to={`/project/${project.slug}`}>
                <Button
                  size="S"
                  text="Vedi Progetto"
                  iconName="Arrow-min-right"
                />
              </Link>
            </Link>
          </div>
          <div className="description">
            <span className="text-placeholder">{project.services}</span>
            <span className="text-placeholder">{project.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
