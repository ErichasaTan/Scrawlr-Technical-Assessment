import React, { useState, useEffect } from "react";
import Upvote from "./Upvote";
import "./UpvoteList.css";

const UpvoteList: React.FC = () => {
  const [upvotes, setUpvotes] = useState<boolean[]>(() => {
    const storedUpvotes = localStorage.getItem("upvotes");
    return storedUpvotes ? JSON.parse(storedUpvotes) : [false, false];
  });

  useEffect(() => {
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [upvotes]);

  const toggleUpvote = (index: number) => {
    const updatedUpvotes = upvotes.map((selected, i) =>
      i === index ? !selected : selected
    );
    setUpvotes(updatedUpvotes);
  };

  const addUpvote = () => {
    const newUpvotes = [...upvotes, false];
    setUpvotes(newUpvotes);
  };

  return (
    <div className="upvote-list">
      {upvotes.map((isSelected, index) => (
        <Upvote
          key={index}
          isSelected={isSelected}
          onToggle={() => toggleUpvote(index)}
        />
      ))}
      <button onClick={addUpvote} className="add-upvote">
        <img src="/plus.svg" alt="Add Upvote" />
      </button>
    </div>
  );
};

export default UpvoteList;
