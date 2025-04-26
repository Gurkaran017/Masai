import React, { useState } from 'react';

function UsernameForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Username is required.');
    } else {
      alert(`Submitted username: ${username}`);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
