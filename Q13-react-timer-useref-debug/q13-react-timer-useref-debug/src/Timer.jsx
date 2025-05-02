import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const intervalId = useRef(null);

  const startTimer = () => {
    // Prevent starting multiple timers
    if (intervalId.current !== null) return;

    intervalId.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId.current);
          intervalId.current = null;
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer(); // Ensures interval is cleared
    setTime(10);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Time Left: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ margin: "0 10px" }}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
