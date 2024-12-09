import React from "react";
import "./Work.scss";

// Atoms
import WorkCards from "../../Atoms/WorkCards/WorkCards";

const Work: React.FC = () => {
  return (
    <section className="work-container">
      {/* work cards */}
      <h1 className="section-title">Lavori</h1>
      <WorkCards />
    </section>
  );
};

export default Work;
