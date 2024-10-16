import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Clicking plus button should add one upvote", () => {
    render(<App />);

    const plusButtons = screen.getAllByRole("button", { name: /add upvote/i });
    fireEvent.click(plusButtons[0]);

    const upvoteLists = screen.getAllByRole("button", {
      name: /upvote arrow/i,
    });

    expect(upvoteLists.length).toBeGreaterThan(0); // Ensure at least one upvote exists
    expect(upvoteLists[0]).toBeInTheDocument(); // Check if the first upvote button is in the document
  });

  test("Clicking upvote button should change state for one button", () => {
    render(<App />);

    const plusButtons = screen.getAllByRole("button", { name: /add upvote/i });
    fireEvent.click(plusButtons[0]);

    const upvoteButtons = screen.getAllByRole("button", {
      name: /upvote arrow/i,
    });
    fireEvent.click(upvoteButtons[0]);

    expect(upvoteButtons[0]).toHaveClass("selected"); // Check if the first upvote button has the "selected" class
  });
});
