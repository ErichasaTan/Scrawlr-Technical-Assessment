// src/App.tsx
import React from "react";
import UpvoteList from "./components/UpvoteList";
import { UpvoteProvider } from "./context/UpvoteContext";

function App() {
  return (
    <UpvoteProvider>
      <div className="App">
        <h1>Scrawlr Technical Assessment - Upvote</h1>
        <UpvoteList listIndex={0} />
        <UpvoteList listIndex={1} />
        <UpvoteList listIndex={2} />
      </div>
    </UpvoteProvider>
  );
}

export default App;
