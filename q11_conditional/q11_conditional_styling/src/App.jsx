import { useState } from "react";

function App() {
  const [isBlue, setIsBlue] = useState(true);

  const toggleColor = () => setIsBlue(!isBlue);

  const buttonStyle = {
    backgroundColor: isBlue ? "blue" : "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "100px"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggleColor} style={buttonStyle}>
        Color: {isBlue ? "Blue" : "Red"}
      </button>
    </div>
  );
}

export default App;
