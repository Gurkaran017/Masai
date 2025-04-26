import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    setCounter((prev) => prev + step);
  };

  const handleDecrease = () => {
    setCounter((prev) => Math.max(0, prev - step)); // Ensure counter does not go below 0
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(isNaN(value) ? 1 : value); // Ensure step is a number
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <div>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
        />
        <span> Step Value</span>
      </div>
    </div>
  );
}

export default Counter;
