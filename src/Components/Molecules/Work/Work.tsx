import React from "react";

// SCSS
import "./Work.scss";

// Atoms
import WorkCards from "../../Atoms/WorkCards/WorkCards";
import SectionTitle from "../../Atoms/SectionTitle/SectionTitle";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Work: React.FC = () => {
  const Size = useSize();
  return (
    <section className="work-container" aria-label="Work Section">
      {/* work cards */}
      <SectionTitle size={Size} text="Lavori" />
      <WorkCards size={Size} />
    </section>
  );
};

export default Work;
