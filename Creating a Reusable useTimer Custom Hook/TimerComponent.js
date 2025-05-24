// TimerComponent.js
import React from "react";
import useTimer from "./useTimer";

function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: 50 }}>
      <h1>Timer: {timer} second{timer !== 1 ? "s" : ""}</h1>
      <button onClick={startTimer} disabled={isRunning} style={{ marginRight: 10 }}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning} style={{ marginRight: 10 }}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default TimerComponent;
