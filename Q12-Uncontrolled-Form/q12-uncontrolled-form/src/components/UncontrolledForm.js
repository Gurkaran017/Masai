import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue.trim() !== '') {
      alert(`Submitted text: ${inputValue}`);
      inputRef.current.value = ''; // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text:{" "}
        <input type="text" ref={inputRef} placeholder="Type something" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
