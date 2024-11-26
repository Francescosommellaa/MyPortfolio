import React from "react";
import "./Hr.scss";
interface HorizontalRuleProps {
  margin:
    | "big"
    | "medium"
    | "small"
    | "bottom-big"
    | "bottom-medium"
    | "bottom-small"
    | "top-big"
    | "top-medium"
    | "top-small";
}

const Hr: React.FC<HorizontalRuleProps> = ({ margin }) => {
  return <hr className={`horizontal-rule ${margin}`} />;
};

export default Hr;
