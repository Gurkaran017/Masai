import React from "react";
import useToggleItems from "./useToggleItems";

function App() {
  // Initial array: ["A", "B", "C"]
  // Initial position: 1 (means starting at "B")
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div style={{ textAlign: "center", marginTop: 50, fontFamily: "Arial" }}>
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
