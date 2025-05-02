import React, { useState, useEffect } from "react";
import "./styles.css"; // Import styles

function App() {
  const [counter, setCounter] = useState(0);

  // useEffect to log the counter value whenever it changes
  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]); // Dependency array ensures this runs only when counter changes

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <div className="counter-display">
        <p>Current Count: {counter}</p>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
