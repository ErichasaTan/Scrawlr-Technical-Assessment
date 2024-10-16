import React, { useState, useEffect } from "react";
import Upvote from "./Upvote";
import "./UpvoteList.css";

const UpvoteList: React.FC = () => {
  // Initial state with localStorage persistence
  const [upvotes, setUpvotes] = useState<boolean[]>(() => {
    const storedUpvotes = localStorage.getItem("upvotes");
    return storedUpvotes ? JSON.parse(storedUpvotes) : [false, false];
  });

  useEffect(() => {
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [upvotes]);

  // Toggle upvote state
  const toggleUpvote = (index: number) => {
    const updatedUpvotes = upvotes.map((selected, i) =>
      i === index ? !selected : selected
    );
    setUpvotes(updatedUpvotes);
  };

  // Add a new upvote to the list
  const addUpvote = () => {
    const newUpvotes = [...upvotes, false];
    setUpvotes(newUpvotes);
  };

  return (
    <div className="upvote-list-wrapper">
      <div className="upvote-box">
        {upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onToggle={() => toggleUpvote(index)}
          />
        ))}
      </div>
      <div className="plus-button" onClick={addUpvote}>
        <img src="/plus.svg" alt="Add Upvote" className="plus-icon" />
      </div>
    </div>
  );
};

export default UpvoteList;
