import React from "react";

// SCSS
import "./Work.scss";

// Atoms
import WorkCards from "../../Atoms/WorkCards/WorkCards";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Work: React.FC = () => {
  const Size = useSize();
  return (
    <section className="work-container">
      <WorkCards size={Size} />
    </section>
  );
};

export default Work;
