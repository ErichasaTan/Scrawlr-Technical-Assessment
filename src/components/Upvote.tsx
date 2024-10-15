import React from "react";
import "./Upvote.css";

interface UpvoteProps {
  isSelected: boolean;
  onToggle: () => void;
}

const Upvote: React.FC<UpvoteProps> = ({ isSelected, onToggle }) => {
  return (
    <div
      className={`upvote ${isSelected ? "selected" : "default"}`}
      onClick={onToggle}
      role="button"
      aria-pressed={isSelected}
    >
      <img src="/arrow-up.svg" alt="Upvote Arrow" className="upvote-icon" />
    </div>
  );
};

export default Upvote;
