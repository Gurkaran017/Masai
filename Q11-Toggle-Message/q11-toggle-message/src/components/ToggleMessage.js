import React, { useState } from 'react';

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showMessage ? "Hide" : "Show"}
      </button>
      {showMessage && (
        <p>Hello, welcome to React state management!</p>
      )}
    </div>
  );
}

export default ToggleMessage;
