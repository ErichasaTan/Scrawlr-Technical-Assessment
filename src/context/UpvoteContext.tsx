// src/context/UpvoteContext.tsx
import React, { createContext, useState, useEffect } from "react";

// Define the shape of the context
interface UpvoteContextProps {
  upvotes: boolean[][];
  setUpvotes: React.Dispatch<React.SetStateAction<boolean[][]>>;
}

// Create the context
export const UpvoteContext = createContext<UpvoteContextProps | undefined>(
  undefined
);

// Create a provider component
export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [upvotes, setUpvotes] = useState<boolean[][]>(() => {
    // Retrieve from local storage and ensure it's an array of arrays
    const storedUpvotes = localStorage.getItem("upvotes");
    return storedUpvotes
      ? JSON.parse(storedUpvotes)
      : [
          [false, false],
          [false, false],
          [false, false],
        ]; // Initialize with 3 lists
  });

  useEffect(() => {
    // Save the upvotes in local storage
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [upvotes]);

  return (
    <UpvoteContext.Provider value={{ upvotes, setUpvotes }}>
      {children}
    </UpvoteContext.Provider>
  );
};
