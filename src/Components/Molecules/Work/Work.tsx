import React from "react";

// SCSS
import "./Work.scss";

// Atoms
import WorkCards from "../../Atoms/WorkCards/WorkCards";
import SectionTitle from "../../Atoms/SectionTitle/SectionTitle";

const Work: React.FC = () => {
  return (
    <section className="work-container">
      {/* work cards */}
      <SectionTitle size="L" text="Lavori" />
      <WorkCards size="L" />
    </section>
  );
};

export default Work;
