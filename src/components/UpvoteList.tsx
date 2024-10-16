import React, { useContext } from "react";
import Upvote from "./Upvote";
import { UpvoteContext } from "../context/UpvoteContext";
import "./UpvoteList.css";

interface UpvoteListProps {
  listIndex: number; // Unique index to identify each upvote list
}

const UpvoteList: React.FC<UpvoteListProps> = ({ listIndex }) => {
  const context = useContext(UpvoteContext);

  if (!context) {
    throw new Error("UpvoteList must be used within an UpvoteProvider");
  }

  const { upvotes, setUpvotes } = context;

  // Ensure the list exists and is an array
  const currentUpvotes = upvotes[listIndex] || [];

  // Toggle upvote state for the specific list
  const toggleUpvote = (index: number) => {
    const updatedList = currentUpvotes.map((selected, i) =>
      i === index ? !selected : selected
    );
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[listIndex] = updatedList;
    setUpvotes(updatedUpvotes);
  };

  // Add a new upvote to the specific list
  const addUpvote = () => {
    const newList = [...currentUpvotes, false];
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[listIndex] = newList;
    setUpvotes(updatedUpvotes);
  };

  return (
    <div className="upvote-list-wrapper">
      <div className="upvote-box">
        {currentUpvotes.map((isSelected, index) => (
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
