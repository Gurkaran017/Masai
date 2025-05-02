import React, { useState, useEffect } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  // useEffect to log when the state changes
  useEffect(() => {
    console.log(`State updated: ${randomNumber}`);
  }, [randomNumber]); // Dependency array ensures this runs on every state change

  const handleClick = () => {
    const newNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    setRandomNumber(newNumber); // Update the state
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Current State: {randomNumber}</h1>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
}

export default App;
