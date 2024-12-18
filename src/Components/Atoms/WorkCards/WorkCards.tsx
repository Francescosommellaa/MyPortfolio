import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

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
        <motion.div
          key={project.slug}
          className={`project-card project-card-${size}`}
          initial={{ opacity: 0, scale: 0.9, y: 50 }} // Stato iniziale
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.8 }}
        >
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
              <motion.img
                src={
                  new URL(
                    `/src/Assets/Project-img/Project-Cover/Name=${project.projectCover}.jpg`,
                    import.meta.url
                  ).href
                }
                alt={`${project.title} cover`}
                className="project-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }} // Effetto di zoom in hover
                transition={{ duration: 0.3 }}
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
        </motion.div>
      ))}
    </div>
  );
};

export default WorkCards;
